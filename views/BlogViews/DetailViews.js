import React, { useContext, useEffect, useState } from "react";
import cx from "classnames";
import { useRouter } from "next/router";

import BlogContext from "context/BlogContext";

export default function DetailViews({ id }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  const router = useRouter();

  const context = useContext(BlogContext);

  const [data, setData] = useState({});

  const handleGoBack = () => {
    router.back();
  };

  useEffect(() => {
    setData(context.data.find((item) => item.id === Number(id)));
  }, [data, id, context.data]);

  return (
    <>
      <div className={cx("bg-white rounded shadow-lg relative  p-4")}>
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <button onClick={handleGoBack}>
              <i className={"fas fa-chevron-left mr-2 text-sm "}></i>{" "}
            </button>
            <h2 className="ml-2 text-xl font-medium">Detail</h2>
          </div>
          <div className="flex items-center">
            <button
              className={`px-4 py-2 text-white ${
                isEnglish ? "bg-blueGray-400" : "bg-emerald-500"
              } rounded-md mx-2`}
              onClick={() => setIsEnglish(false)}
            >
              Indonesia
            </button>
            <button
              className={`px-4 py-2 text-white ${
                isEnglish ? "bg-emerald-500" : "bg-blueGray-400"
              } rounded-md`}
              onClick={() => setIsEnglish(true)}
            >
              English
            </button>
          </div>
        </div>
        <div className="p-4">
          <h1 className="font-bold text-2xl inline leading-snug">
            {isEnglish ? data?.titleEnglish : data?.judul}
          </h1>
          {data?.statusPublikasi === "Publikasikan" ||
          data?.statusPublikasi === "Published" ? (
            <span className="bg-green-500 font-medium text-white rounded-md px-3 py-1 text-lg mx-2 tracking-wider">
              {"Published"}
            </span>
          ) : (
            <span className="bg-blue-500 font-medium text-white rounded-md px-3 py-1 text-lg mx-2 tracking-wider ">
              {"Draft"}
            </span>
          )}
          <p className="text-gray-400 my-2 ">
            <i className={"fas fa-user text-sm "}></i> {data?.penulis}
            <i className={"fas fa-calendar ml-3 text-sm "}></i>{" "}
            {data?.publishDate}
            {data?.kategori && data.kategori.length > 0 ? (
              <>
                <i className="fas fa-tags ml-3 mr-1 text-sm"></i>
                {data.kategori.map((k, index) => (
                  <span key={k}>
                    {k}
                    {index !== data.kategori.length - 1 && ", "}
                  </span>
                ))}
              </>
            ) : (
              ""
            )}
          </p>
          {data?.gambar ? (
            <img
              src={data?.gambar}
              alt={data?.judul}
              className="mx-auto my-6 border border-gray-300"
            />
          ) : (
            <img
              src="/img/image-error.png"
              alt="error"
              className="mx-auto my-6 border border-gray-300"
            />
          )}
          <div className="">
            {/* {data?.isi?.split("\n").map((value) => {
              return <p className="my-3">{value}</p>;
            })} */}
            {console.log(data?.isi)}
            <div
              dangerouslySetInnerHTML={{
                __html: isEnglish ? data?.bodyEnglish : data?.isi,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
