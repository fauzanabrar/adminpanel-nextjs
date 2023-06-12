import React  from "react";

import Admin from "layouts/Admin.js";
import DetailViews from "views/BlogViews/DetailViews";
import { useRouter } from "next/router";
import { BlogProvider } from "context/BlogContext";

export default function DetailBlog() {
  const router = useRouter();
  const { id } = router.query;
  
  return (
    <>
      <BlogProvider>
        <DetailViews id={id} />
      </BlogProvider>
    </>
  );
}

DetailBlog.layout = Admin;
