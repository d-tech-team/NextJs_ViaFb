import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Auth.module.scss";
import DefaultLayout from "../components/defaultLayout";
import Head from "next/head";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { login } from "./api/listRouteApi";
import axios from "axios";

function Login() {
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState({});
  const router = useRouter();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      onSubmit();
    }
    setValidated(true);
  };

  const onInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      // const response = await axios.post(login, value);
      // const { data } = response;
      if (200 == 200) {
        showAlert("Thành công", "Đăng nhập thành công", "success");
        //localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        showAlert("Thất bại", response.data.message, "error");
      }
    } catch (error) {
      showAlert("Thất bại", "Có lỗi xảy ra", "error");
    }
  };

  const showAlert = (title, message, type) => {
    Swal.fire({
      title,
      text: message,
      icon: type,
      confirmButtonText: "Ok",
    });
  };
  return (
    <Container fluid className={`${styles.wrapper} p-0`}>
      <Head>
        <title>Đăng nhập</title>
      </Head>
      <Row>
        <Col md={4} className={[styles.left, "mx-auto mt-5"].join("")}>
          <Image src="/images/logo.png" alt="Logo" width={30} height={30} />
          <h2 className="font-weight-bold">VIAFB.VN</h2>
          <p className={styles.title_des}>Hãy đăng nhập để mua VIA nhé!</p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label className={styles.label}>Tên đăng nhập</Form.Label>
              <Form.Control
                className={styles.input}
                type="text"
                placeholder="Tên đăng nhập"
                required
                onChange={onInput}
                name="username"
              />
              <Form.Control.Feedback type="invalid" className={styles.feedback}>
                Please enter a username.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label className={styles.label}>Mật khẩu</Form.Label>
              <Form.Control
                className={styles.input}
                type="password"
                placeholder="Mật khẩu"
                required
                onChange={onInput}
                name="password"
              />
              <Form.Control.Feedback type="invalid" className={styles.feedback}>
                Please enter a password.
              </Form.Control.Feedback>
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

Login.Layout = DefaultLayout;

export default Login;
