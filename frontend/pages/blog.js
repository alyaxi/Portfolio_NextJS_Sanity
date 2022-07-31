import React from "react";
import Image from "next/image";
import sanityClient from "../client.js";
import PortableText from "react-portable-text";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "../components/Navbar.js";
const Blog = ({ blogs }) => {
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  return (
    <div>
      <Navbar />
      <div className="bg-grey-50" id="blog">
        <div className="container mx-auto py-16 md:py-20 ">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-[#0078AA] sm:text-5xl lg:text-6xl">
            My Blogs
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my all Blogs!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
            {blogs.map((blog, index) => (
              <div key={blog.slug.current}>
                <a href={`blog/${blog.slug.current}`} className="shadow">
                  <div
                    style={{
                      backgroundImage: `url(${
                        urlFor(blog.image).width(200).url() ||
                        `/assets/img/post-01.png`
                      })`,
                    }}
                    className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                  >
                    <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                    <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                      Read More
                    </span>
                  </div>
                  <div className="bg-white py-6 px-5 xl:py-8">
                    <span className="block font-body text-lg font-semibold text-black">
                      {blog.title}
                    </span>
                    <span className="block pt-2 font-body text-grey-20">
                      {blog.meta}
                    </span>
                  </div>
                </a>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <PortableText
                    // Pass in block content straight from Sanity.io
                    content={blog.content}
                    projectId= 'w07hcwxg' // you can find this in sanity.json
                    dataset= 'production'
                    // Optionally override marks, decorators, blocks, etc. in a flat
                    // structure without doing any gymnastics
                    serializers={{
                      h1: (props) => <h1 {...props} />,
                      li: ({ children }) => <li className="special-list-item">{children}</li>
                    }}

                /> */
}

export default Blog;
export async function getServerSideProps() {
  const query = `*[_type == "blog"]`;
  const blogs = await sanityClient.fetch(query);
  return {
    props: {
      blogs,
    },
  };
}
