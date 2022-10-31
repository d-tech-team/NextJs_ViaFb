import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Auth.module.scss";
import DefaultLayout from "../components/defaultLayout";
import Head from "next/head";
import axios from "axios";
import { register } from "./api/listRouteApi";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

function Register() {
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
      const response = await axios.post(register, value);
      const { status } = response;
      if (status == 201) {
        showAlert("Thành công", "Đăng ký thành công", "success");
        setTimeout(() => {
          router.push("/login");
          Swal.close();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      showAlert("Thất bại", error.response.data.message, "error");
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
        <title>Đăng ký</title>
      </Head>
      <Row>
        <Col md={4} className={["mx-auto"].join("")}>
          {/* <Image src="/images/logo.png" alt="Logo" width={30} height={30} /> */}
          <h2 className="mt-5">VIAFB.VN</h2>
          <p className={styles.title_des}>
            ViaFb.VN rất hân hạnh được Phục vụ khách hàng!
          </p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label className={styles.label}>Họ và tên</Form.Label>
              <Form.Control
                className={styles.input}
                type="text"
                placeholder="Họ và tên"
                required
                onChange={onInput}
                name="name"
              />
              <Form.Control.Feedback type="invalid" className={styles.feedback}>
                Tên không được để trống
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label className={styles.label}>Tên đăng nhập</Form.Label>
              <Form.Contro
                className={styles.input}
                type="text"
                placeholder="Tên đăng nhập"
                required
                onChange={onInput}
                name="username"
              />
              <Form.Control.Feedback type="invalid" className={styles.feedback}>
                Username không được để trống
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label className={styles.label}>Email</Form.Label>
              <Form.Control
                className={styles.input}
                type="email"
                placeholder="Email"
                required
                onChange={onInput}
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
              <Form.Control.Feedback className={styles.feedback} type="invalid">
                Email không hợp lệ
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
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              />
              <Form.Control.Feedback type="invalid" className={styles.feedback}>
                Mật khẩu chưa đủ mạnh
              </Form.Control.Feedback>
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

Register.Layout = DefaultLayout;

export default Register;
