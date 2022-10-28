import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Col, Row } from "react-bootstrap";
import History from "../../../components/History";
import ProductByCategory from "../../../components/ProductByCategory";
import { getACategory, getProductInCategory } from "../../api/listRouteApi";

function Category({ products, category, histories }) {
  const router = useRouter();
  const { id } = router.query;

  // useEffect(async() => {
  //   if(id) {
  //     axios.get(getACategory(id),{},{
  //       headers: {
  //         "Authorization": `Bearer ${token}`
  //       }
  //     })
  //   }
  // }, [id]);

  return (
    <>
      <Head>
        <title>{(category && category?.title) || "Tiêu ddeef"}</title>
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

const getDefaultCategory = () => ({
  image: "image",
  updated_at: "2000-01-23T04:56:07.000+00:00",
  description: "description",
  created_at: "2000-01-23T04:56:07.000+00:00",
  id: "000000000000000000000000",
  title: "title1",
});

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const { id } = context.query;
  const res = await fetch(
    getProductInCategory(id),
    {},
    {
      headers: {
        Authorization: `Bearer ${typeof window !== "undefined" ? localStorage.getItem("token") : null
          }`,
      },
    }
  );
  if (!res.ok) {
    return {
      notFound: true,
    };
  }
  const products = await res.json();
  // const products = getDefaultData();

  // Category
  const resCategory = await fetch(getACategory(id));
  console.log(resCategory);

  if (!resCategory.ok) {
    return {
      notFound: true,
    };
  }
  const category = await resCategory.json();

  // const category = getDefaultCategory();
  const histories = [
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
  ]

  // Pass data to the page via props
  return { props: { products, category, histories } };
}
