import React from "react";

import Admin from "layouts/Admin.js";
import AddViews from "views/BlogViews/AddViews";
import { BLOG_TBODY_MOCK } from "utils/mock-data";
import { useRouter } from "next/router";
import { BlogProvider } from "context/BlogContext";

export default function AddBlog() {
  const router = useRouter();

  const handleAddBlog = (data) => {
    const newBlog = {
      id: BLOG_TBODY_MOCK.length + 1,
      ...data,
    };

    BLOG_TBODY_MOCK.push(newBlog);

    router.push("/admin/blogs");
  };

  return (
    <>
      <BlogProvider>
        <AddViews onSubmit={handleAddBlog} />
        </BlogProvider>
    </>
  );
}

AddBlog.layout = Admin;
