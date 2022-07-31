import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "../components/Navbar.js";
import Work from "../components/Work.js";
import Contact from "../components/Contact.js";
import Stats from "../components/Stats.js";
import Footer from "../components/Footer.js";
import Portfolio from "../components/Portfolio.js";
import Services from "../components/Services.js";
import About from "../components/About.js";
import Header from "../components/Header.js";
import KeepUpdate from "../components/KeepUpdate.js";
import BlogPost from "../components/Blog.js";
export default function Home({blogs}) {
  console.log(blogs);
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
   }
 
  return (
    <div className="overflow-hidden">
      <Navbar />

      <Header />

      <About />

      <Services />

      <Portfolio />

      <Work />

      <Stats />
      <div className="bg-grey-50" id="blog">
      <div className="container py-16 md:py-20">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-[#0078AA] sm:text-5xl lg:text-6xl">
          I also like to write
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          My latest Blogs!
        </h4>
        <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
          {blogs &&
            blogs.map((blog, index) => (
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
      <Contact />

      <KeepUpdate />

      <Footer />
    </div>
  );
}


export async function getServerSideProps(context) {
  const query = `*[_type == "blog"][0...3]`;
  const blogs = await sanityClient.fetch(query);
  console.log("Blogpost", blogs);
  return {
    props: {
      blogs,
    },
  };
}