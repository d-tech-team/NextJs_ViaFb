import Image from "next/image";
import React, { useState } from "react";
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

function Deposit() {
  const [key, setKey] = useState("bank");

  return (
    <div className="custom_container">
      <Head>
        <title>Nạp tiền</title>
      </Head>
      <Tabs id="" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab
          className={styles.tab1}
          eventKey="bank"
          title={<TabIcon icon="/images/acb.png" />}
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
                      <p className="text-black">
                        Mở App Ngân hàng quét mã QRCode và nhập số tiền cần
                        chuyển
                      </p>
                      <img
                        src="/images/bank_qr.png"
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
                        <td>ĐỖ XUÂN PHÚC</td>
                      </tr>
                      <tr>
                        <td>Số Tài khoản:</td>
                        <td>1138181818</td>
                      </tr>
                      <tr>
                        <td>Nội dung:</td>
                        <td>Viafb 5234</td>
                      </tr>
                      <tr>
                        <td>Ngân hàng:</td>
                        <td>Á Châu (ACB)</td>
                      </tr>
                    </tbody>
                  </Table>
                  <p>* Nội dung phải có khoảng cách ở giữa</p>
                  <p>
                    <small>Chú ý:</small>{" "}
                    <span>Viết như này là sai (Viafb5234)</span>
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
        <Tab
          className={styles.tab1}
          eventKey="momo"
          title={<TabIcon icon="/images/momo.png" />}
        >
          <Card className="p-3 border-0 shadow-sm">
            <div>
              <Image src="/images/momo1.png" width="100" height="100" alt="" />
              <Table hover>
                <tbody>
                  <tr>
                    <td>Chủ tài khoản:</td>
                    <td>ĐỖ XUÂN PHÚC</td>
                  </tr>
                  <tr>
                    <td>Số:</td>
                    <td>0365866608</td>
                  </tr>
                  <tr>
                    <td>Nội dung:</td>
                    <td>Viafb 5234</td>
                  </tr>
                  <tr>
                    <td>Ngân hàng:</td>
                    <td>Á Châu (ACB)</td>
                  </tr>
                </tbody>
              </Table>
              <p>* Nội dung phải có khoảng cách ở giữa</p>
              <p>
                <small>Chú ý:</small>{" "}
                <span>Viết như này là sai (Viafb5234)</span>
              </p>
              <center>
                <span>Đang chờ chuyển khoản</span> <br></br>
                <img src="/images/loading.gif" width="70px" alt="" />
              </center>
            </div>
          </Card>
        </Tab>
        <Tab
          className={styles.tab1}
          eventKey="usdt"
          title={<TabIcon icon="/images/usdt.png" />}
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
                      <h5>1: QRCode USDTRC20</h5>
                      <p className="text-black">QRCode My Wallet USDTRC20</p>
                      <img src="/images/qrcodeusdt.png" width="165px" alt="" />
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
                  <h5>QRCode My Wallet USDTRC20</h5>
                  <center>
                    <img
                      src="/images/usdt.png"
                      width="100%"
                      style={{
                        maxWidth: "130px",
                      }}
                      alt=""
                      className="mt-3"
                    />
                  </center>

                  <Table hover className="mt-3">
                    <tbody>
                      <tr>
                        <td>1 USDT =</td>
                        <td>23.000 VNĐ</td>
                      </tr>
                      <tr>
                        <td>My Wallet:</td>
                        <td>TN7pKHoqtS3hmVsXcFFpruU6TsXu2xmXyS</td>
                      </tr>
                    </tbody>
                  </Table>
                  <h6 className="text-black">
                    After the transfer, please contact Admin <br></br>
                    <a href="https://t.me/r4z3nt" className="text-secondary">t.me/r4z3nt</a>
                    <br></br>
                    Or <br></br>
                    <a href="https://zalo.me/0338367365" className="text-secondary">zalo.me/0338367365</a>
                  </h6>
                  <center>
                    <span>Waiting...</span> <br></br>
                    <img src="/images/loading.gif" width="70px" alt="" />
                  </center>
                </div>
              </Card>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Deposit;
