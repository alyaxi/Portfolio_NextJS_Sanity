import React from "react";
import TypeAnimation from "react-type-animation";
const Header = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-8"
      style={{ backgroundImage: `url(/assets/img/hero-bg.jpg)` }}
    >
      
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-cyan-500 to-blue-500 bg-cover bg-center bg-no-repeat opacity-80 "></div>

      <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
     
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="rounded-b-full hover:animate-pulse hover:grayscale  border-8 bg-[#0078AA] border-[#e6e6e6] shadow-xl shadow-black">
         
            <img
              src="/assets/img/pic-trans.png"
              className="h-48 rounded-full sm:h-56 "
              alt="author"
              />
           
  
     
          </div>
          <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0 min-w-[650px]">
         
            <span className="bg-blue-100 text-blue-800 text-sm font-medium  px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              Developer
            </span>
            <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
              <TypeAnimation
                cursor={false}
                repeat={Infinity}
                sequence={[
                  "Hello,I am Sayed Ali Z.",
                  5000,
                  "A full stack developer",
                ]}
                wrapper="p"
              />
            </h1>
            <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
              <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                <p className="font-body text-2xl uppercase text-white">
                  Creativity never dies
                </p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
