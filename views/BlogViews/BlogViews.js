import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Admin from "layouts/Admin.js";

import BlogContext from "context/BlogContext";
import ToasterContext from "context/ToasterContext";

import Toaster from "components/common/Blogs/Toaster/Toaster";
import { MyTable } from "components/common/Blogs/MyTable";

const BlogViews = () => {
  const router = useRouter();

  const context = useContext(BlogContext);
  const [tableData, setTableData] = useState(context.data);
  const toasterContext = useContext(ToasterContext);
  const [showToaster, setShowToaster] = useState(
    toasterContext.data.toaster.showToaster
  );
  const [toasterMessage, setToasterMessage] = useState(
    toasterContext.data.toaster.toasterMessage
  );

  useEffect(() => {
    const newData = context.data;
    setTableData(newData);
  }, [context, tableData]);

  useEffect(() => {
    if (showToaster) {
      const timeout = setTimeout(() => {
        setShowToaster(false);
        setToasterMessage("");
        toasterContext.updateData({
          toaster: {},
        });
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [showToaster, toasterContext]);

  const handleDelete = (id) => {
    const newData = context.data.filter((item) => item.id !== id);
    context.updateData(newData);
    setTableData(context.data);

    const successToaster = {
      showToaster: true,
      toasterMessage: "Success menghapus data!",
    };

    toasterContext.updateData({
      toaster: successToaster,
      ...toasterContext,
    });

    setShowToaster(successToaster.showToaster);
    setToasterMessage(successToaster.toasterMessage);
  };

  return (
    <>
      {showToaster && <Toaster message={toasterMessage} status={"success"} />}
      <MyTable
        titleTable="Blogs Table"
        tbody={tableData}
        handleDetails={(data) => router.push(`blogs/detail?id=${data}`)}
        handleEdit={(data) => router.push(`blogs/edit?id=${data}`)}
        handleAdd={() => router.push(`blogs/add`)}
        handleDelete={handleDelete}
      />
    </>
  );
};

BlogViews.layout = Admin;

export default BlogViews;
