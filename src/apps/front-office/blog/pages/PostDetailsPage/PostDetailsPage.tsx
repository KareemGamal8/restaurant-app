import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import { Link } from "@mongez/react-router";
import Breadcrumb from "apps/front-office/design-system/layouts/Breadcrumb";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import { TbQuote } from "react-icons/tb";
import { allBlogData, getBlogDetailsData } from "../BlogPage/data/blogData";
import BlogSidebar from "./BlogSidebar";

export default function PostDetailsPage({ params }: { params: any }) {
  const [blogData, setBlogData] = useState<any>({});
  useOnce(() => {
    getBlogDetailsData(params.id).then(response => setBlogData(response));
  });
  const currentIndex = allBlogData.indexOf(blogData);
  const prevBlog = allBlogData[currentIndex - 1];
  const nextBlog = allBlogData[currentIndex + 1];

  return (
    <>
      <Helmet title={blogData.title} />
      <Breadcrumb
        title={blogData.title}
        navItems={[
          { name: "blog", url: URLS.blog.list },
          { name: `${blogData.title}` },
        ]}
      />
      <div className="w-[95%] mx-auto mt-8">
        <div className="flex justify-between">
          <div className=" w-[100%] lg:w-[75%]">
            <div className="w-[100%]  rounded-lg flex flex-col gap-2  border border-gray-300  mb-10">
              <div className="w-full h-[450px]">
                <img
                  src={blogData.img}
                  alt={blogData.title}
                  className="w-full h-full rounded-tr-lg rounded-tl-lg  "
                />
              </div>
              <div className="p-5 pb-10 flex flex-col gap-2">
                <h2 className="font-bold text-3xl w-fit hover:text-primary-hover transition duration-150 cursor-pointer">
                  {blogData.title}
                </h2>
                <p className="text-gray-400">
                  Post By{blogData.postBy} / {blogData.date}
                </p>
                <p className="text-gray-400 text-md">{blogData.description}</p>
                <div className="flex gap-2 items-center">
                  <TbQuote className="text-primary-main" size={"4rem"} />
                  <h3 className="font-bold">{blogData.quote}</h3>
                </div>
                <p className="text-gray-400 text-md">{blogData.description}</p>
              </div>
            </div>
            <div className="my-4 flex p-5 justify-between bg-[#F7F4EF] rounded-lg">
              {prevBlog && (
                <Link to={URLS.blog.viewPost(prevBlog)}>
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-500">{trans("prevPost")}</p>
                    <h3 className=" hover:text-primary-hover transition duration-150 cursor-pointer">
                      {prevBlog.title}
                    </h3>
                  </div>
                </Link>
              )}
              {nextBlog && (
                <Link to={URLS.blog.viewPost(nextBlog)}>
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-500">{trans("nextPost")}</p>
                    <h3 className=" hover:text-primary-hover transition duration-150 cursor-pointer">
                      {nextBlog.title}
                    </h3>
                  </div>
                </Link>
              )}
            </div>
          </div>
          <BlogSidebar blogData={blogData} />
        </div>
      </div>
    </>
  );
}
