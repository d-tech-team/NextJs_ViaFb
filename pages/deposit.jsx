import Image from 'next/image'
import React, { useState } from 'react'
import { Col, ListGroup, Nav, Row, Tab, Table, Tabs } from 'react-bootstrap'
import TabIcon from '../components/TabIcon'
import styles from '../styles/Deposit.module.scss'

function Deposit() {
    const [key, setKey] = useState('bank');

    return (
        <div className='custom_container'>
            <Tabs
                id=""
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="bank" title={<TabIcon icon="/images/acb.png" />}>
                    <Row>
                        <Col xs={12} md={6}>
                            <div>
                                <h3>Cách 1: QRCode</h3>
                                <p>Mở App Ngân hàng quét mã QRCode và nhập số tiền cần chuyển</p>
                                <Image src="/images/bank_qr.png" width='100%' height="100%" layout='responsive' alt="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div>
                                <h3>Cách 2: Chuyển Khoản Thủ Công</h3>
                                <Table hover >
                                    <tbody>
                                        <tr>
                                            <td>Chủ tài khoản:</td>
                                            <td>ĐỖ XUÂN PHÚC</td>
                                        </tr>
                                        <tr>
                                            <td>Số Tài khoản:</td>
                                            <td>1138181818</td>
                                        </tr>
                                        <tr>
                                            <td>Nội dung:</td>
                                            <td>Viafb 5234</td>
                                        </tr>
                                        <tr>
                                            <td>Ngân hàng:</td>
                                            <td>Á Châu (ACB)</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <p>* Nội dung phải có khoảng cách ở giữa</p>
                                <p><small>Chú ý:</small> Viết như này là sai (Viafb5234)</p>
                            </div>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="momo" title={<TabIcon icon="/images/momo.png" />}>
                    <div>
                        <Image src="/images/momo1.png" width="150" height="150" alt="" />
                        <Table hover >
                            <tbody>
                                <tr>
                                    <td>Chủ tài khoản:</td>
                                    <td>ĐỖ XUÂN PHÚC</td>
                                </tr>
                                <tr>
                                    <td>Số:</td>
                                    <td>0365866608</td>
                                </tr>
                                <tr>
                                    <td>Nội dung:</td>
                                    <td>Viafb 5234</td>
                                </tr>
                                <tr>
                                    <td>Ngân hàng:</td>
                                    <td>Á Châu (ACB)</td>
                                </tr>
                            </tbody>
                        </Table>
                        <p>* Nội dung phải có khoảng cách ở giữa</p>
                        <p><small>Chú ý:</small> Viết như này là sai (Viafb5234)</p>
                    </div>
                </Tab>
                <Tab eventKey="usdt" title={<TabIcon icon="/images/usdt.png" />} >
                    <Row>
                        <Col xs={12} md={6}>
                            <div>
                                <h3>Cách 1: QRCode</h3>
                                <p>Mở App Ngân hàng quét mã QRCode và nhập số tiền cần chuyển</p>
                                <Image src="/images/qrcodeusdt.png" width='100%' height="100%" layout='responsive' alt="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div>
                                <h3>Cách 2: Chuyển Khoản Thủ Công</h3>
                                <Table hover >
                                    <tbody>
                                        <tr>
                                            <td>Chủ tài khoản:</td>
                                            <td>ĐỖ XUÂN PHÚC</td>
                                        </tr>
                                        <tr>
                                            <td>Số Tài khoản:</td>
                                            <td>1138181818</td>
                                        </tr>
                                        <tr>
                                            <td>Nội dung:</td>
                                            <td>Viafb 5234</td>
                                        </tr>
                                        <tr>
                                            <td>Ngân hàng:</td>
                                            <td>Á Châu (ACB)</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <p>* Nội dung phải có khoảng cách ở giữa</p>
                                <p><small>Chú ý:</small> Viết như này là sai (Viafb5234)</p>
                            </div>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </div>
    )

}

export default Deposit