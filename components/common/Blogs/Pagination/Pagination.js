import React, { useState } from "react";

const Pagination = ({
  totalPages,
  activePage,
  onNextClick,
  onPreviousClick,
  onClick,
}) => {
  const [displayedPages, setDisplayedPages] = useState([]);

  const handlePageClick = (page) => {
    onClick(page);
  };

  const generatePagination = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            className={`px-3 py-2 ${
              activePage === i
                ? "bg-blueGray-700 rounded text-white"
                : "bg-white rounded text-blueGray-500"
            }`}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      if (activePage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pages.push(
            <button
              key={i}
              className={`px-3 py-2 ${
                activePage === i
                  ? "bg-blueGray-700 rounded text-white"
                  : "bg-white rounded text-blueGray-500"
              }`}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </button>
          );
        }
        pages.push(<span key="ellipsis1">...</span>);
        pages.push(
          <button
            key={totalPages}
            className={`px-3 py-2 ${
              activePage === totalPages
                ? "bg-blueGray-700 rounded text-white"
                : "bg-white rounded text-blueGray-500"
            }`}
            onClick={() => handlePageClick(totalPages)}
          >
            {totalPages}
          </button>
        );
      } else if (activePage >= totalPages - 2) {
        pages.push(
          <button
            key={1}
            className={`px-3 py-2 bg-white rounded text-blueGray-500
            `}
            onClick={() => handlePageClick(1)}
          >
            1
          </button>
        );
        pages.push(<span key="ellipsis2">...</span>);
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(
            <button
              key={i}
              className={`px-3 py-2 ${
                activePage === i
                  ? "bg-blueGray-700 rounded text-white"
                  : "bg-white rounded text-blueGray-500"
              }`}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </button>
          );
        }
      } else {
        pages.push(
          <button
            key={1}
            className={`px-3 py-2 bg-white rounded text-blueGray-500`}
            onClick={() => handlePageClick(1)}
          >
            1
          </button>
        );
        pages.push(<span key="ellipsis3">...</span>);
        for (let i = activePage - 1; i <= activePage + 1; i++) {
          pages.push(
            <button
              key={i}
              className={`px-3 py-2 ${
                activePage === i
                  ? "bg-blueGray-700 rounded text-white"
                  : "bg-white rounded text-blueGray-500"
              }`}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </button>
          );
        }
        pages.push(<span key="ellipsis4">...</span>);
        pages.push(
          <button
            key={totalPages}
            className={`px-3 py-2 bg-white rounded text-blueGray-500`}
            onClick={() => handlePageClick(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      <button
        className="px-2 py-1 text-blueGray-800"
        onClick={onPreviousClick}
        hidden={activePage === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
            fill="currentColor"
          />
        </svg>
      </button>
      {generatePagination()}
      <button
        className="px-2 py-1 text-blueGray-800"
        onClick={onNextClick}
        disabled={activePage === totalPages}
        hidden={activePage === totalPages}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
