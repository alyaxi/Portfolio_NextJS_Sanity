import React from "react";



const About = () => {
  return (
    <div className="bg-grey-50" id="about">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header text-4xl font-semibold uppercase text-[#0078AA] sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I'm Sayed Ali Z., Web and Mobile App Developer
          </h4>
          <p className="pt-6 font-body leading-relaxed text-grey-20">
            i'm Sayed Ali Z, earned a bachelor's degree in Computer Science.i've
            been coding nearly 2 years, i'm full stack Developer who loves
            building full stack applications with different technologies while
            development and i have also done many project in Top-Notch
            frameworks. i have a passion for learning new technologies and i'm
            always trying to learn new things.
          </p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p className="font-body text-lg font-semibold uppercase text-grey-20">
                Connect with me
              </p>
              <div className="hidden sm:block">
                <i className="bx bx-chevron-right text-2xl text-[#0078AA]"></i>
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              <a href="/">
                <i className="bx bxl-facebook-square text-2xl text-[#0078AA] hover:text-yellow"></i>
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-github text-2xl text-[#0078AA] hover:text-yellow"></i>
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-twitter text-2xl text-[#0078AA] hover:text-yellow"></i>
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-dribbble text-2xl text-[#0078AA] hover:text-yellow"></i>
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-linkedin text-2xl text-[#0078AA] hover:text-yellow"></i>
              </a>
              <a href="/" className="pl-4">
                <i className="bx bxl-instagram text-2xl text-[#0078AA] hover:text-yellow"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                HTML and CSS
              </h4>
              <h3 className="font-body text-3xl font-bold text-[#0078AA]">
                85%
              </h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-[#0078AA]"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Cross-Platform
              </h4>
              <h3 className="font-body text-3xl font-bold text-[#0078AA]">
                50%
              </h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-[#0078AA]"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Mern Stack Development
              </h4>
              <h3 className="font-body text-3xl font-bold text-[#0078AA]">
                75%
              </h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-[#0078AA]"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                JamStack Development
              </h4>
              <h3 className="font-body text-3xl font-bold text-[#0078AA]">
                80%
              </h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-[#0078AA]"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
