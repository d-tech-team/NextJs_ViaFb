import Head from "next/head";
import React from "react";
import { Breadcrumb, Card, Col, Row } from "react-bootstrap";
import PageTitle from "../components/Breadcumb";
import styles from "../styles/Policy.module.scss";

function Policy() {
  return (
    <>
      <Head>
        <title>Chính sách bảo hành</title>
      </Head>
      <PageTitle title="Chính sách bảo hành"></PageTitle>
      <Row>
        <Col xs={12} md={6} className={styles.card_wrap}>
          <Card className={styles.card}>
            <Card.Header as={"h5"} className={`${styles.title} bg-primary`}>
              Chấp nhận bảo hành
            </Card.Header>
            <Card.Body className={styles.body}>
              <Card.Text className={styles.text}>
                <ol>
                  <li>
                    Tất cả Via/Clone được bảo hành trong 24h nếu login lần đầu
                    sai pass, checkpoint dạng xác nhận thiết bị.
                  </li>
                  <li>Bảo hành mất tích 24h đối với mua via XMDT</li>
                  <li>
                    Thông tin miêu tả Via không đúng với thông tin được ghi trên
                    website khi mua
                  </li>
                  <li>
                    Tất cả các via khi được mua đều được check live, hoàn 20%
                    nếu bị checkpoint 956 trong 20 đầu kể từ thời gian mua ở
                    website.
                  </li>
                 
                </ol>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className={styles.card_wrap}>
          <Card className={styles.card}>
            <Card.Header as={"h5"} className={`${styles.title}`} style={
              {
                background: "#FC2E53",
              }
            }>
              Từ Chối Bảo Hành
            </Card.Header>
            <Card.Body className={styles.body}>
              <Card.Text className={styles.text}>
                <>
                  <p>
                    Không bảo hành và chịu trách nhiệm với các trường hợp khách
                    hàng không Change và bị Back.
                  </p>
                  <ol>
                    <li>
                      Via zin ads có bảo hành HẠN CHẾ QC nếu die ads trước ngày
                      mua.
                    </li>
                    <li>
                      Via xmdt, 902 bảo hành Hạn Chế QC khi log, bao tick 5
                      ngày.
                    </li>
                    <li>Không bảo hành via xmdt khi vừa mà tự ý ấn kháng</li>
                    <li>
                      Không bảo hành via khi vừa mua về thay đổi thông tin mà
                      checkpoint.
                    </li>
                    <li>
                      Không bảo hành via khi vừa mua về không kiểm tra thông tin
                      via xem có đúng với mô tả hay không mà tự ý thay đổi thông
                      tin.
                    </li>
                  </ol>
                </>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Policy;
