import React from "react";
import Admin from "layouts/Admin.js";
import {BlogProvider} from 'context/BlogContext';
import BlogViews from "views/BlogViews/BlogViews";

const Blogs = () => {

  return (
    <>
      <BlogProvider>
        <BlogViews />
      </BlogProvider>
    </>
  );
};

Blogs.layout = Admin;

export default Blogs;

