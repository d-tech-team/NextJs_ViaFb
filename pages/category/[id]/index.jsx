import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../../../components/Product";
import ProductAndHistory from "../../../components/ProductAndHistory";
import { getProductInCategory } from "../../api/listRouteApi";


function Category({ products }) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>
      <ProductAndHistory
        products={products}
        histories={[
          {
            username: "vo luu binh",
            product: "Via Philipines Cổ",
            price: "69,000",
          },
          {
            username: "vo luu binh",
            product: "Via Philipines Cổ",
            price: "69,000",
          },
          {
            username: "vo luu binh",
            product: "Via Philipines Cổ",
            price: "69,000",
          },
          {
            username: "vo luu binh",
            product: "Via Philipines Cổ",
            price: "69,000",
          },
          {
            username: "vo luu binh",
            product: "Via Philipines Cổ",
            price: "69,000",
          },
        ]}
      />
    </>
  );
}

export default Category;

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  console.log(context);
  const { id } = context.query;
  const res = await fetch(getProductInCategory(id));
  console.log(res);
  if (!res.ok) {
    return {
      notFound: true,
    };
  }
  const products = await res.json();


  // Pass data to the page via props
  return { props: { products } };
}
