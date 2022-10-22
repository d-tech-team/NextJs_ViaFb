import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../../../components/Product";
import ProductAndHistory from "../../../components/ProductAndHistory";
import { getProductInCategory } from "../../api/listRouteApi";

function Category({ products }) {
  const router = useRouter();
  const { title } = router.query;

  useEffect(() => {
    console.log(products);
  }, []);
  return (
    <>
      <Head>
        <title>{products[0].title}</title>
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

const getDefaultData = () => [
  {
    images: ["https:example.com/example.jpg", "https:example.com/example.jpg"],
    updated_at: "2000-01-23T04:56:07.000+00:00",
    price: 1000,
    min_amount: 6,
    description: "description",
    max_amount: 1,
    created_at: "2000-01-23T04:56:07.000+00:00",
    id: "000000000000000000000000",
    title: "title",
    type: 5,
  },
];

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  console.log(context);
  const { id } = context.query;
  const res = await fetch(getProductInCategory(id));
  if (!res.ok) {
    return {
      notFound: true,
    };
  }
  const products = await res.json();

  // const products = getDefaultData();

  // Pass data to the page via props
  return { props: { products } };
}
