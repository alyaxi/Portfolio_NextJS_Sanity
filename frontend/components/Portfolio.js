import React from "react";

const Portfolio = () => {
  return (
    <div className="container py-16 md:py-10 -mb-20"  id="portfolio">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-[#0078AA] sm:text-5xl lg:text-6xl">
        My Portfolio
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here's what I have done with the past
      </h3>
      <div className="flex container gap-4 justify-around flex-wrap my-20 ">
        <div className="max-w-lg mt-5 bg-white rounded-lg border border-gray-200 shadow-md bg-gray-50 border-gray-100 ">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/assets/img/tiktok.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              TIK TIK APPLICATION

              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 text-gray-400">
            TIK TIK App is a social media platform application where we can upload videos and comments and like videos as like tiktok application.
            </p>
            <a
              href="#"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              View Project
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            
             <a href="/"  className="inline-flex items-center justify-end p-1 px-3 text-sm font-medium text-center text-white ml-2 bg-gray-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-gray-600 focus:ring-blue-800">Github
            
            <i className="bx bxl-github text-2xl text-white hover:text-yellow"></i>
          
             </a>
          </div>
        </div>
        
        
     
        
        
        
   
      </div>
     
     
    </div>
  );
};

export default Portfolio;
