import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import History from "../components/History";
import ProductByCategory from "../components/ProductByCategory";
import styles from "../styles/Home.module.scss";
import {
  getNotification,
  getListCategory,
  getHistory,
  getProductInCategory,
  getAProduct,
  getStatusProduct,
} from "./api/listRouteApi";

export default function Home({ categories, histories }) {
  const [noti, setNoti] = useState([]);

  useEffect(() => {
    getNoti();
  }, []);

  useEffect(() => {
    setInterval(() => {
      getNoti();
    }, 60000);
  }, []);

  const getNoti = () => {
    fetch(getNotification)
      .then((res) => res.json())
      .then((res) => {
        setNoti(res.messages ?? []);
      });
  };

  return (
    <>
      <Head>
        <title>Trang chủ</title>
      </Head>
      <Card className="p-3 border-0 shadow-sm">
        <div className={styles.page_title}>
          <h1 className={styles.title}>
            <Image src="/images/icon.svg" width={30} height={30} alt="" />
            VIAFB.VN - VIA FACEBOOK UY TÍN, CHẤT LƯỢNG
            <Image src="/images/icon.svg" width={30} height={30} alt="" />
          </h1>
          <h3 className={styles.subtitle}>
            GIAO DỊCH HOÀN TOÀN TỰ ĐỘNG 24/7 - NẠP TIỀN THANH TOÁN 5s BẤT KỂ
            NGÀY ĐÊM
          </h3>
          <h3 className={styles.subtitle}>
            <Image src="/images/icon2.svg" width={15} height={12} alt="" />
            SUPPORT DEPOSIT USDTRC20 - Inbox Admin: <a href="./">Click Here</a>
            <Image src="/images/icon2.svg" width={15} height={12} alt="" />
          </h3>
        </div>
        <div>
          <h3 className={styles.title_noti}>Thông Báo Quan Trọng</h3>
          <VerticalTimeline
            layout={"1-column-left"}
            className={styles.time_line}
          >
            {Array.isArray(noti) &&
              noti.map((item, i) => (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#FFEDF0", color: "#000" }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #F3F0F8",
                  }}
                  iconStyle={{
                    background: "#FC2E53",
                    color: "#fff",
                    width: "13px",
                    height: "13px",
                    left: "14px",
                    borderSpacing: "20px",
                    borderWidth: "1px",
                  }}
                  key={i}
                >
                  <p>{item}</p>
                </VerticalTimelineElement>
              ))}
          </VerticalTimeline>
        </div>
      </Card>
      <div className="mt-5">
        <Row>
          <Col xs={12} sm={12} lg={9}>
            {Array.isArray(categories) &&
              categories.map((category, index) => (
                <ProductByCategory
                  key={index}
                  category={category}
                  products={category.products}
                />
              ))}
          </Col>
          <Col xs={12} sm={12} lg={3}>
            {/* <Card className="border-0 shadow-sm rounded"> */}
            <History histories={histories} />
            {/* </Card> */}
          </Col>
        </Row>
      </div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(getListCategory);
  if (!res.ok) {
    return {
      notFound: true,
    };
  }
  let categories = await res.json();

  categories = await Promise.all(
    categories.map(async (item) => {
      let products = await fetch(getProductInCategory(item.id));
      if (!products.ok) {
        products = [];
      }
      products = await products.json();
      products = await Promise.all(
        products.map(async (item1) => {
          let stt = await fetch(getStatusProduct(item1.id));
          if (!stt.ok) {
            stt = [];
          }
          stt = await stt.json();
          return {
            ...item1,
            max_amount: stt?.stock ?? 0,
          };
        })
      ).then((res) => res);
      return {
        ...item,
        products,
      };
    })
  ).then((res) => res);

  const resHistory = await fetch(getHistory);

  if (!resHistory.ok) {
    return {
      notFound: true,
    };
  }

  let histories = await resHistory.json();

  histories = await Promise.all(
    histories.map(async (item) => {
      let product = await fetch(getAProduct(item.product));
      if (!product.ok) {
        product = {};
      }
      product = await product.json();
      return {
        ...item,
        product: product?.title ?? "title",
      };
    })
  ).then((res) => res);
  // Pass data to the page via props
  return { props: { categories, histories } };
}
