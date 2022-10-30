import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import History from "../../../components/History";
import ProductByCategory from "../../../components/ProductByCategory";
import {
  getACategory,
  getProductInCategory,
  getHistory,
  getStatusProduct,
  getAProduct,
} from "../../api/listRouteApi";

function Category({ products, category, histories }) {
  return (
    <>
      <Head>
        <title>{(category && category?.title) || "Tiêu đề"}</title>
      </Head>
      <Row>
        <Col xs={12} sm={12} lg={9}>
          <ProductByCategory category={category} products={products} />
        </Col>
        <Col xs={12} sm={12} lg={3}>
          {/* <Card className="border-0 shadow-sm rounded"> */}
          <History histories={histories} />
          {/* </Card> */}
        </Col>
      </Row>
    </>
  );
}

export default Category;

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const { id } = context.query;
  const res = await fetch(getProductInCategory(id), {
    headers: {
      Authorization: `Bearer ${context.req.cookies.token}`,
    },
  });
  if (!res.ok) {
    return {
      notFound: true,
    };
  }
  let products = await res.json();

  products = await Promise.all(
    products.map(async (item) => {
      let stt = await fetch(getStatusProduct(item.id));
      stt = await stt.json();

      return {
        ...item,
        max_amount: stt ? stt.stock : 0,
      };
    })
  ).then((res) => res);

  //console.log(cc);

  // Category
  const resCategory = await fetch(getACategory(id));

  if (!resCategory.ok) {
    return {
      notFound: true,
    };
  }
  const category = await resCategory.json();

  const resHistory = await fetch(getHistory);

  if (!resHistory.ok) {
    return {
      notFound: true,
    };
  }

  let histories = await resHistory.json();

  histories = await Promise.all(
    histories.map(async (item) => {
      let product = await fetch(getAProduct(item.product));
      product = await product.json();
      return {
        ...item,
        product: product ? product.title : "title",
      };
    })
  ).then((res) => res);

  // console.log("histories", histories);

  // Pass data to the page via props
  return { props: { products, category, histories } };
}
