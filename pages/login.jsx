import React from "react";
import { Container, Form, Label, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Login.module.css";

export default function Login() {
  return (
    <Container className={styles.wrapper}>
      <div>
        <Image src="/images/logo.png" alt="Logo" width={30} height={30} />
        <h2 className="">VIAFB.VN</h2>
        <p className={styles.title_des}>Hãy đăng nhập để mua VIA nhé!</p>
        <Form>
          <Form.Group>
            <Form.Label>Tên đăng nhập</Form.Label>
            <Form.Control
              className={styles.input_focus}
              type="text"
              placeholder="Tên đăng nhập"
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
              Đăng nhập
            </Button>
          </Form.Group>
        </Form>
        <p>
          Bạn chưa có tài khoản? <Link href={"/"}>Đăng ký </Link>
        </p>
      </div>
    </Container>
  );
}
