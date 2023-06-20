import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import Add from "../ActionButton/Add";
import { Search } from "../Search";
import Pagination from "../Pagination/Pagination";
import DeleteModal from "../Modals/DeleteModals";
import styles from "./BlogTable.module.css";

export default function BlogTable({
  color,
  titleTable,
  tbody,
  handleDetails = () => {},
  handleEdit = () => {},
  handleDelete = () => {},
  handleAdd = () => {},
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setselectedItem] = useState("");
  const [activePage, setActivePage] = useState(1);

  const [tableData, setTableData] = useState(tbody);

  const paginationRef = useRef();

  const itemsPerPage = 5;

  useEffect(() => {
    setTableData(tbody);
  }, [tbody]);

  useEffect(() => {
    if (paginationRef.current) {
      paginationRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activePage]);

  const handlePageChange = (page) => {
    setActivePage(page);
    paginationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onNextClick = () => {
    setActivePage((prevPage) => prevPage + 1);
    paginationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onPreviousClick = () => {
    setActivePage((prevPage) => prevPage - 1);
    paginationRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onDelete = (id) => {
    setIsModalOpen(true);
    setselectedItem(id);
  };

  const handleSearch = (e) => {
    const searchInput = e.target.value;
    setSearchValue(searchInput);
  };

  useEffect(() => {
    // Mencari di seluruh tableData berdasarkan searchValue
    const filteredData = tbody.filter((data) =>
      data.judul
        ? data.judul.toLowerCase().includes(searchValue.toLowerCase())
        : true
    );

    // Menetapkan hasil pencarian ke tableData
    setTableData(filteredData);

    // Mengatur halaman saat ini kembali ke halaman pertama setelah pencarian
    setActivePage(1);

    if (searchValue === "") {
      setTableData(tbody);
      return;
    }
  }, [searchValue, tbody]);

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedTbody = tableData ? tableData.slice(startIndex, endIndex) : [];

  return (
    <>
      {isModalOpen && (
        <div className="">
          <DeleteModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onDelete={() => {
              const updatedTbody = tableData.filter(
                (data) => data.id !== selectedItem
              );
              setTableData(updatedTbody);
              handleDelete(selectedItem);
            }}
          />
        </div>
      )}
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg text-blueGray-700 pt-4">
                {titleTable}
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full overflow-x-auto justify-between pl-8 pb-4">
          <Add handleAdd={handleAdd} />
          <Search
            placeholder={"Cari Judul...."}
            onChange={(e) => handleSearch(e)}
            onClick={() => {}}
            ref={null}
          />
        </div>
        <div className="block w-full overflow-x-auto flex-1">
          <table className={styles.table}>
            <thead className="sticky top--1">
              <tr>
                <th
                  style={{ width: "6%" }}
                  className=" align-middle text-center  border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                >
                  No.
                </th>
                <th
                  style={{ width: "10%" }}
                  className="px-6 align-middle text-center  border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                >
                  Gambar
                </th>
                <th
                  // style={{ width: "auto" }}
                  className="align-middle w-auto text-center border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                >
                  Judul
                </th>
                <th
                  style={{ width: "10%" }}
                  className="align-middle text-center  border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                >
                  Penulis
                </th>
                <th
                  style={{ width: "10%" }}
                  className="align-middle text-center  border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                >
                  Publish Date
                </th>
                <th
                  style={{ width: "9%" }}
                  className="align-middle text-center  border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                >
                  Status Publikasi
                </th>
                <th
                  style={{ width: "10%" }}
                  className="align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-blueGray-600 text-blueGray-200 border-blueGray-500"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedTbody?.length > 0 ? (
                displayedTbody?.map((data, index) => {
                  return (
                    <tr className="hover:bg-blueGray-300" key={index}>
                      <td className="border-t-0 text-center align-middle border-l-0 border-r-0 text-xs p-4 ">
                        {index + 1 + (activePage - 1) * itemsPerPage}
                      </td>
                      <td className="border-t-0 align-middle text-center border-l-0 border-r-0 text-xs whitespace-normal p-2">
                        {data.gambar ? (
                          <img
                            src={data.gambar}
                            alt={data.judul}
                            className="h-24 mx-auto"
                          />
                        ) : (
                          <img src="/img/image-error.png" alt="error" />
                        )}
                      </td>
                      <td className="border-t-0 pl-4 align-middle border-l-0 border-r-0 text-sm whitespace-normal">
                        {data.judul}
                      </td>
                      <td className="border-t-0  align-middle text-center border-l-0 border-r-0 text-xs whitespace-normal p-2">
                        {data.penulis}
                      </td>
                      <td className="border-t-0  align-middle text-center border-l-0 border-r-0 text-xs  p-4">
                        {data.publishDate}
                      </td>
                      <td className="border-t-0  align-middle text-center border-l-0 border-r-0 text-xs whitespace-normal p-4">
                        {data.statusPublikasi}
                      </td>
                      <td
                        className={cx(
                          "border-t-0 pl-3 align-middle border-l-0 border-r-0 text-xs p-4",
                          {
                            hidden: !(
                              handleDetails ||
                              handleEdit ||
                              handleDelete
                            ),
                          }
                        )}
                      >
                        {handleDetails && (
                          <button
                            className="w-full flex align-middle justify-start bg-emerald-500 text-white active:bg-emerald-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => handleDetails(data.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="inline mr-2"
                              style={{ width: "1rem" }}
                            >
                              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                              <path
                                fillRule="evenodd"
                                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                                clipRule="evenodd"
                              />
                            </svg>

                            <span>Detail</span>
                          </button>
                        )}
                        {handleEdit && (
                          <button
                            className="w-full flex align-middle justify-start bg-orange-500 text-white active:bg-orange-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => handleEdit(data.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="inline mr-2"
                              style={{ width: "1rem" }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                            Edit
                          </button>
                        )}
                        {handleDelete && (
                          <button
                            className="w-full flex align-middle justify-start bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {
                              onDelete(data.id);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="inline mr-2"
                              style={{ width: "1rem" }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                            Delete
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="">
                  <td
                    colSpan={7}
                    className="mx-auto text-center h-24 text-lg font-medium"
                  >
                    Not Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div
          className="flex flex-row w-full overflow-x-auto justify-center p-4 bg-blueGray-200"
          ref={paginationRef}
        >
          <Pagination
            activePage={activePage}
            totalPages={Math.ceil(
              tableData ? tableData.length / itemsPerPage : 1
            )}
            onClick={handlePageChange}
            onNextClick={onNextClick}
            onPreviousClick={onPreviousClick}
          />
        </div>
      </div>
    </>
  );
}

BlogTable.defaultProps = {
  color: "light",
};

BlogTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
