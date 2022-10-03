import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Auth.module.scss";

export default function Login() {
  return (
    <Container className={styles.wrapper}>
      <Row>
        <Col md={4} className={[styles.left, "mx-auto"].join("")}>
          <Image src="/images/logo.png" alt="Logo" width={30} height={30} />
          <h2 className="font-weight-bold">VIAFB.VN</h2>
          <p className={styles.title_des}>Hãy đăng nhập để mua VIA nhé!</p>
          <Form>
            <Form.Group>
              <Form.Label className={styles.label}>Tên đăng nhập</Form.Label>
              <Form.Control
                className={styles.input}
                type="text"
                placeholder="Tên đăng nhập"
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
                Đăng nhập
              </Button>
            </Form.Group>
          </Form>
          <p>
            Bạn chưa có tài khoản? <Link href={"/register"}>Đăng ký </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
