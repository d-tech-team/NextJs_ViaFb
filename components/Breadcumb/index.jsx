import Link from "next/link";
import React from "react";
import { Breadcrumb } from "react-bootstrap";
import styles from "./index.module.scss";

function PageTitle({ title }) {
  return (
    <div className={styles.pageTitle}>
      <h3>{title}</h3>
      <Breadcrumb>
        <Link href={"/"} passHref={true}>
          <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
        </Link>
        <Breadcrumb.Item active>{title}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default PageTitle;
