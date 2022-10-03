import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Auth.module.scss";

export default function Regsiter() {
  return (
    <Container className={styles.wrapper}>
      <Row>
        <Col md={4} className={["mx-auto"].join("")}>
          {/* <Image src="/images/logo.png" alt="Logo" width={30} height={30} /> */}
          <h2 className="">VIAFB.VN</h2>
          <p className={styles.title_des}>
            ViaFb.VN rất hân hạnh được Phục vụ khách hàng!
          </p>
          <Form>
            <Form.Group>
              <Form.Label className={styles.label}>Họ và tên</Form.Label>
              <Form.Control
                className={styles.input}
                type="text"
                placeholder="Họ và tên"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className={styles.label}>Tên đăng nhập</Form.Label>
              <Form.Control
                className={styles.input}
                type="text"
                placeholder="Tên đăng nhập"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className={styles.label}>Email</Form.Label>
              <Form.Control
                className={styles.input}
                type="text"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className={styles.label}>Mật khẩu</Form.Label>
              <Form.Control
                className={styles.input}
                type="password"
                placeholder="Mật khẩu"
              />
            </Form.Group>
            <Form.Group>
              <Button variant="primary" type="submit" className={styles.button}>
                Đăng ký
              </Button>
            </Form.Group>
          </Form>
          <p>
            Bạn đã có tài khoản? <Link href={"/login"}>Đăng nhập </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
