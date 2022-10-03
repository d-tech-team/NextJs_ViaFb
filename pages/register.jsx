import React from "react";
import { Container, Form, Label, Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Login.module.css";

export default function Register() {
  return (
    <Container className={[styles.wrapper,'justify-content-md-center'].join('')} >
      <Row>
        <Col md={6}>
          {/* <Image src="/images/logo.png" alt="Logo" width={30} height={30} /> */}
          <h2 className="">VIAFB.VN</h2>
          <p className={styles.title_des}>
            ViaFb.VN rất hân hạnh được Phục vụ khách hàng!
          </p>
          <Form>
            <Form.Group>
              <Form.Label>Họ và tên </Form.Label>
              <Form.Control
                className={styles.input_focus}
                type="text"
                placeholder="Họ và tên"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tên đăng nhập</Form.Label>
              <Form.Control
                className={styles.input_focus}
                type="text"
                placeholder="Tên đăng nhập"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                className={styles.input_focus}
                type="text"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control type="password" placeholder="Mật khẩu" />
            </Form.Group>
            <Form.Group>
              <Button
                variant="primary"
                type="submit"
                className={styles.color_button}
              >
                Đăng ký
              </Button>
            </Form.Group>
          </Form>
          <p>
            Bạn đã có tài khoản? <Link href={"/"}>Đăng nhập </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
