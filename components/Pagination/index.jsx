import { Pagination } from "react-bootstrap";

export const Paginate = ({ page, pages, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x, i) => (
          <Pagination.Item key={i} active={x + 1 === page}>
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};
