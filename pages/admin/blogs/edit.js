import React from "react";

import Admin from "layouts/Admin.js";
import EditViews from "views/BlogViews/EditViews";
import { useRouter } from "next/router";
import { BlogProvider } from "context/BlogContext";

export default function EditBlog() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <BlogProvider>
        <EditViews id={id} />
      </BlogProvider>
    </>
  );
}

EditBlog.layout = Admin;
