import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row, Table } from "react-bootstrap";
import PageTitle from "../components/Breadcumb";
import styles from "../styles/Order.module.scss";
import moment from "moment";
import { getListOrder } from "./api/listRouteApi";

export default function Order() {
  const [data, setData] = useState([]);

  const getDefaultData = () => [
    {
      amount: 6,
      price: 0,
      order_id: "000000000000000000000000",
      product_title: "product_title",
      timestamp: "2000-01-23T04:56:07.000+00:00",
    },
    {
      amount: 6,
      price: 0,
      order_id: "000000000000000000000000",
      product_title: "product_title",
      timestamp: "2000-01-23T04:56:07.000+00:00",
    },
  ];

  useEffect(() => {
    try {
      setData(getDefaultData());

      return;
      const response = axios.get(
        getListOrder(25, 10),
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      const { data } = response;
      if (data.code === 200) {
        setData(data.data);
      }
    } catch (error) {
      setData(getDefaultData());
    }
  }, []);

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
              <Table bordered className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Mã Giao Dịch</th>
                    <th>Sản Phẩm</th>
                    <th>Số Lượng</th>
                    <th>Giá</th>
                    <th>Thời Gian</th>
                    <th>Thao Tác</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.order_id}</td>
                        <td>{item.product_title}</td>
                        <td>{item.amount}</td>
                        <td>{item.price}</td>
                        <td>
                          {moment(item.timestamp).format("h:m:s DD-MM-YYYY")}
                        </td>
                        <td>
                          <a href="#">Xem Chi Tiết</a>
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
