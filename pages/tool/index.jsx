import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import styles from "../../styles/Tool.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Tool() {
  return (
    <Row className={styles.wrapper}>
      <Col md={12}>
        <Card className={styles.card}>
          <Card.Body>
            <h6>Thông Báo Quan Trọng</h6>
            <ul>
              <li>
                <FontAwesomeIcon icon={faBolt} /> Hệ thống chỉ duyệt cho những
                tài khoản
                <strong
                  style={{
                    color: "red",
                  }}
                >
                  ĐÃ TỪNG NẠP TIỀN
                </strong>{" "}
                mới có thể tạo Phôi
              </li>
              <li>
                <FontAwesomeIcon icon={faBolt} />
                <span
                  style={{
                    color: "red",
                  }}
                >
                  {" "}
                  Hình ảnh tạo ra không có thật và chỉ sử dụng với mục đích gửi
                  Xác Minh Danh Tính (Facebook).
                </span>
              </li>
              <li>
                <FontAwesomeIcon icon={faBolt} />
                <span
                  style={{
                    color: "red",
                  }}
                >
                  {" "}
                  LƯU Ý: BQT sẽ không chịu trách nhiệm cho viêc sử dụng tạo phôi
                  sữ dụng trái mục đích và vi phạm pháp luật của thành viên! .
                </span>
              </li>
              <li>
                <FontAwesomeIcon icon={faBolt} /> Video hướng dẫn tạo phôi -
                nhưng chưa làm đc, đợi tối làm nhé :)
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}  className='mt-3'>
        <Card className={styles.card}>
          <Card.Header
            as={"h5"}
            className={`${styles.title} bg-primary text-white`}
          >
            <p>Tạo Phôi gỡ checkpoint hoặc XMDT cho mọi loại via</p>
          </Card.Header>
          <Card.Body className={styles.body}>
            {/* <Image src="/images/phoi.png" width={"100%"} height={"100%"} /> */}
            <img src="/images/phoi.png" alt="img false" width={"100%"} />
            <p className="mt-2">
              Dùng để gỡ Checkpoint (956 và 282) hoặc XMDT cho via mọi loại via
              🔥.
            </p>
            <Link href={"/tool/create"}>
              <Button className={styles.button}>Tạo phôi</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
