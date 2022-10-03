import React from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../../../styles/Tool.module.scss";


export default function Create() {
    return (
        <Card className={styles.create} >
            <Card.Text as={"h3"}>Phôi Cali</Card.Text>
            <center>
                <img src="/images/phoi.png" alt="img false" style={{
                    width: "350px", height: "270px"
                }} /></center>
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className={styles.label}>Họ</Form.Label>
                            <Form.Control
                                placeholder="Họ"
                                type="text"
                                className={styles.input}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label className={styles.label}>Tên</Form.Label>
                            <Form.Control
                                placeholder="Tên"
                                type="text"
                                className={styles.input}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label className={styles.label}>Link Ảnh:</Form.Label>
                            <Form.Control
                                placeholder="Link Ảnh:"
                                type="text"
                                className={styles.input}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label className={styles.label}>Ngày sinh:</Form.Label>
                            <Form.Control
                                placeholder="Ngày sinh:"
                                type="number"
                                className={styles.input}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label className={styles.label}>Tháng sinh:</Form.Label>
                            <Form.Control
                                placeholder="Tháng sinh:"
                                type="number"
                                className={styles.input}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label className={styles.label}>Năm sinh:</Form.Label>
                            <Form.Control
                                placeholder="Năm sinh:"
                                type="number"
                                className={styles.input}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label className={styles.label}>Giới tính:</Form.Label>
                            <Form.Select className={styles.input} >
                                <option value="1">Nữ</option>
                                <option value="2">Nam</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <Row className={`${styles.notice} mt-3`}>
                <Col className="pr-0 pl-0">
                    <center>
                        Vui lòng nạp ít nhất 1000 VNĐ Momo để sử dụng dịch vụ!
                    </center>
                </Col>
            </Row>

            <center>
                <Button disabled className={styles.button}>Tạo phôi</Button>
            </center>
        </Card>
    )
}