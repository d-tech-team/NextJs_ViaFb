import React, { useState, useRef } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Auth.module.scss";
import DefaultLayout from "../components/defaultLayout";
import Head from "next/head";
import axios from "axios";
import { url as baseUrl } from "./api/baseUrl";
import { register } from "./api/listRouteApi";

function Regsiter() {
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      onSubmit();
    }
    setValidated(true);
  };

  const onInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    //const res = await axios.post(`${baseUrl}${register}`, value);
    console.log(value);
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
                Please choose enter Name.
              </Form.Control.Feedback>
            </Form.Group>
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
              <Form.Label className={styles.label}>Email</Form.Label>
              <Form.Control
                className={styles.input}
                type="text"
                placeholder="Email"
                required
                onChange={onInput}
                name="email"
              />
              <Form.Control.Feedback className={styles.feedback} type="invalid">
                Please enter a Email.
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

Regsiter.Layout = DefaultLayout;

export default Regsiter;
