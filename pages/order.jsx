import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Table } from "react-bootstrap";
import PageTitle from "../components/Breadcumb";
import styles from "../styles/Order.module.scss";
import moment from "moment";
import { getListOrder, getAProduct, getDataOrder } from "./api/listRouteApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Order() {
  const [histories, setHistory] = useState([]);
  const token = cookies.get("token");

  useEffect(() => {
    const getHistory = async () => {
      let list = await fetch(getListOrder(1, 10), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!list.ok) {
        list = { data: [] };
      }

      list = await list.json();

      return await Promise.all(
        Array.isArray(list.data) &&
          list.data.map(async (item) => {
            let product = await fetch(getAProduct(item.product));
            if (!product.ok) {
              product = [];
            }
            product = await product.json();
            return {
              ...item,
              product: product?.title || "",
            };
          })
      ).then((res) => res);
    };

    getHistory().then((res) => setHistory(res));
  }, []);

  const handleDownload = (id) => {
    console.log(id);
    if (id && token) {
      fetch(getDataOrder(id), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          return res.blob();
        })
        .then((res) => {
          const url = window.URL.createObjectURL(new Blob([res]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `order-${id}.pdf`);
          document.body.appendChild(link);
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Head>
        <title>Lịch sử mua hàng</title>
      </Head>
      <PageTitle title="Lịch sử mua hàng"></PageTitle>
      <Row className={styles.wrapper}>
        <Col xs={12} md={12}>
          <Card className={"rounded border-0 shadow-sm"}>
            <Card.Header className="p-3 bg-white" as={"h6"}>
              Kéo Sang Trái Để Xem Tài Khoản Facebook
            </Card.Header>
            <Card.Body className="p-4">
              <Table bordered className="table text-center">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Sản Phẩm</th>
                    <th>Số Lượng</th>
                    <th>Giá</th>
                    <th>Thời Gian</th>
                    <th>Thao Tác</th>
                  </tr>
                </thead>
                <tbody>
                  {histories.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.product}</td>
                        <td>{item.amount}</td>
                        <td>{item.price}</td>
                        <td>
                          {moment(item.timestamp).format("h:m:s DD-MM-YYYY")}
                        </td>
                        <td>
                          <a href="#">
                            <FontAwesomeIcon
                              icon={faDownload}
                              onClick={() => handleDownload(item.id)}
                            />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
