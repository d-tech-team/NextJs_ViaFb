import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Col,
  ListGroup,
  Nav,
  Row,
  Tab,
  Table,
  Tabs,
  Card,
} from "react-bootstrap";
import TabIcon from "../components/TabIcon";
import styles from "../styles/Deposit.module.scss";
import Head from "next/head";
import { getPayment, getTransaction } from "./api/listRouteApi";
import axios from "axios";
import moment from "moment";

function Deposit({ payments, history }) {
  const [key, setKey] = useState("bank");

  useEffect(() => {
    console.log(history);
  }, []);

  const getType = (type) => {
    switch (type) {
      case 0:
        return "Order";
      case 1:
        return "Deposit";
      case 2:
        return "Deposit";
      case 3:
        return "Admin";
      case 4:
        return "System";
    }
  };

  return (
    <div>
      <Card className="p-3 border-0 pb-5 shadow-sm">
        <Head>
          <title>Nạp tiền</title>
        </Head>
        <h5>Nạp tiền qua Ngân Hàng 24/7</h5>
        <p
          className="text-secondary"
          style={{
            fontSize: "12px",
          }}
        >
          Vui lòng chuyển khoản vào tài khoản với nội dung bên dưới
        </p>
        <Tabs
          id=""
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          {payments.map((payment) => (
            <Tab
              className={styles.tab1}
              eventKey="bank"
              title={<TabIcon icon={payment.icon} />}
            >
              <Row>
                <Col xs={12} md={6}>
                  <Row>
                    <Col xs={12} md={9} className="mx-auto">
                      <Card
                        className="p-3 border-0 shadow-sm"
                        style={{
                          minHeight: "450px",
                        }}
                      >
                        <div>
                          <h5>Cách 1: QRCode</h5>
                          <p className="text-black">{payment.description}</p>
                          <img
                            src={payment.image}
                            width="100%"
                            alt=""
                            style={{
                              maxWidth: "200px",
                            }}
                            className="rounded"
                          />
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} md={6}>
                  <Card
                    className="p-3 border-0 shadow-sm"
                    style={{
                      minHeight: "450px",
                    }}
                  >
                    <div>
                      <h5>Cách 2: Chuyển Khoản Thủ Công</h5>
                      <Table hover>
                        <tbody>
                          <tr>
                            <td>Chủ tài khoản:</td>
                            <td>{payment.owner_name}</td>
                          </tr>
                          <tr>
                            <td>Số Tài khoản:</td>
                            <td>{payment.account_number}</td>
                          </tr>
                          <tr>
                            <td>Nội dung:</td>
                            <td>{payment.transfer_note}</td>
                          </tr>
                          <tr>
                            <td>Ngân hàng:</td>
                            <td>{payment.bank_name}</td>
                          </tr>
                        </tbody>
                      </Table>
                      <p>* Nội dung phải có khoảng cách ở giữa</p>
                      <p>
                        <small>Chú ý:</small>{" "}
                        <span>
                          Viết như này là sai ({payment.transfer_note})
                        </span>
                      </p>
                      <center>
                        <span>Đang chờ chuyển khoản</span> <br></br>
                        <img src="/images/loading.gif" width="70px" alt="" />
                      </center>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Tab>
          ))}
        </Tabs>
      </Card>
      <Card className="p-3 border-0 shadow-sm mt-3">
        <Card.Header className="bg-white">
          <Card.Text className="text-black">Lịch Sử Nạp Tiền</Card.Text>
        </Card.Header>
        <Card.Body className={styles.history}>
          <Table bordered className="text-center">
            <thead>
              <tr>
                <th>Id</th>
                <th>Mã giao dịch</th>
                <th>Số Tiền</th>
                <th>Loại</th>
                <th>Thời gian</th>
              </tr>
            </thead>
            <tbody>
              {history.map((item, index) => (
                <tr>
                  <td>{++index}</td>
                  <td>{item.description}</td>
                  <td>{item.amount}</td>
                  <td>{getType(item.type)}</td>
                  <td>{ moment(item.created_at).format('HH:mm:ss DD/MM/yyyy')}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Deposit;

export async function getServerSideProps(context) {
  const res = await fetch(getPayment, {
    headers: {
      Authorization: `Bearer ${context.req.cookies.token}`,
    },
  });
  const payments = await res.json();

  const historyTransaction = await fetch(getTransaction, {
    headers: {
      Authorization: `Bearer ${context.req.cookies.token}`,
    },
  });

  let history = await historyTransaction.json();

  history = history.data ?? [];
  return {
    props: {
      payments,
      history,
    },
  };
}
