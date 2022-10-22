import Image from "next/image";
import ProductAndHistory from "../components/ProductAndHistory";
import styles from "../styles/Home.module.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Card } from "react-bootstrap";
import Head from "next/head";
export default function Home({ products }) {
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
            >
              <h6>
                <u className="text-primary">ViaFB.VN</u> -{" "}
                <strong className="text-danger">
                  HỆ THỐNG MUA BÁN VIA FACEBOOK UY TÍN, CHẤT LƯỢNG
                </strong>
              </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work mt-1"
              contentStyle={{ background: "#F3F0F8", color: "#000" }}
              contentArrowStyle={{
                borderRight: "7px solid  #F3F0F8",
              }}
              iconStyle={{
                background: "rgb(69,27,155)",
                color: "#fff",
                width: "13px",
                height: "13px",
                left: "14px",
                borderSpacing: "20px",
                borderWidth: "1px",
              }}
            >
              <h6>
                * TÀI KHOẢN SAU KHI KHÁCH MUA THÌ KHÁCH TỰ BẢO QUẢN (ĐỔI PASS FB
                VÀ CẢ PASSMAIL). CHÚNG TÔI KHÔNG CHỊU TRÁCH NHIỆM HÀNG BỊ BACK
                VỀ SAU. VÌ HÀNG SHOP NHẬP TỪ NHIỀU NGUỒN KHÁC NHAU NÊN KHÔNG THỂ
                ĐẢM BẢO ĐƯỢC LÀ CÓ BỊ ĐẦU NGUỒN BACK HÀNG HAY KHÔNG. TỐT NHẤT
                KHÁCH NÊN TỰ BẢO QUẢN TÀI SẢN THUỘC QUYỀN SỞ HỮU CỦA MÌNH. XIN
                CẢM ƠN
              </h6>
            </VerticalTimelineElement>
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
            >
              <h6 className="text-danger">ANH EM CHÚ Ý:</h6>
              <h6>
                Đọc kĩ <strong>Quy trình Đăng Nhập</strong> để tránh việc bị
                Checkpoint{" "}
                <a href="">
                  <strong>ẤN ĐỂ XEM NGAY</strong>
                </a>
              </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#67F890", color: "#000" }}
              contentArrowStyle={{
                borderRight: "7px solid  #F3F0F8",
              }}
              iconStyle={{
                background: "#09BD3C",
                color: "#fff",
                width: "13px",
                height: "13px",
                left: "14px",
                borderSpacing: "20px",
                borderWidth: "1px",
              }}
            >
              <h6 className="text-danger">CHÚ Ý ĐĂNG NHẬP:</h6>
              <h6>
                + Vui lòng đăng nhập bằng link{" "}
                <a href="https://mbasic.facebook.com/">
                  https://mbasic.facebook.com/
                </a>{" "}
                để tránh checkpoint.
              </h6>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </Card>
      <div className="mt-5">
        <ProductAndHistory
          products={products}
          histories={[
            {
              username: "vo luu binh",
              product: "Via Philipines Cổ",
              price: "69,000",
            },
            {
              username: "vo luu binh",
              product: "Via Philipines Cổ",
              price: "69,000",
            },
            {
              username: "vo luu binh",
              product: "Via Philipines Cổ",
              price: "69,000",
            },
            {
              username: "vo luu binh",
              product: "Via Philipines Cổ",
              price: "69,000",
            },
            {
              username: "vo luu binh",
              product: "Via Philipines Cổ",
              price: "69,000",
            },
          ]}
        />
      </div>
    </>
  );
}

// This gets called on every request
// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch("http://localhost:3000/api/categories/1/products");
  if (!res.ok) {
    return {
      notFound: true,
    };
  }
  // const products = await res.json();

  const products = [];

  // Pass data to the page via props
  return { props: { products } };
}
