import { useState } from "react";

import ReactPaginate from "react-paginate";
import ProductListing from "../components/ProductListing";

const PaginateItems = ({ productsPerPage, products, status }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + productsPerPage;
  const currentProducts = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / productsPerPage);
  const handlePageClick = (e) => {
    const newOffset = e.selected * productsPerPage;
    setItemOffset(newOffset);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ProductListing currentProducts={currentProducts} status={status} />
      <ReactPaginate
        containerClassName="flex justify-center items-center mt-8 mb-8"
        pageClassName="border text-xl border-solid border-lightGray w-10 h-10 flex items-center justify-center rounded-full mr-2 hover:bg-red-100"
        activeClassName="bg-palette-primary text-palette-light hover:bg-palette-dark"
        breakLabel= {<p className="mx-2">...</p>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel={
          <button className="mr-3 rounded-full bg-slate-200 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M14.47 2.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H9a5.25 5.25 0 100 10.5h3a.75.75 0 010 1.5H9a6.75 6.75 0 010-13.5h10.19l-4.72-4.72a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        }
        nextLabel={
          <button className="mr-3 rounded-full bg-slate-200 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        }
        renderOnZeroPageCount={null}
        initialPage={0}
      />
    </>
  );
};

export default PaginateItems;
