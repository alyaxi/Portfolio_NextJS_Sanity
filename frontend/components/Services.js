import React from "react";

const Services = () => {
  return (
    <div className="container py-16 md:py-20" id="services">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-[#0078AA] sm:text-5xl lg:text-6xl">
        I'm good at
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        These are the services I offer
      </h3>

      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        <div className="group rounded px-8 py-12 shadow hover:bg-[#0078AA]">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src="/assets/img/coding.png" alt="development icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src="/assets/img/coding.png" alt="development icon" />
            </div>
          </div>
          <div className="text-center h">
            <h3 className="pt-8 text-lg font-semibold uppercase text-[#0078AA] group-hover:text-yellow lg:text-xl">
              WEB DEVELOPMENT
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-[#0078AA]">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="/assets/img/payment-gateway.png"
                alt="content marketing icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="/assets/img/payment-gateway.png"
                alt="content marketing icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-[#0078AA] group-hover:text-yellow lg:text-xl">
              Payment Gateway
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-[#0078AA]">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="/assets/img/app-development.png"
                alt="Mobile Application icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="/assets/img/app-development.png"
                alt="Mobile Application icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-[#0078AA] group-hover:text-yellow lg:text-xl">
              Mobile Development
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-[#0078AA]">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img
                src="/assets/img/online-shop.png"
                alt="Email Marketing icon"
              />
            </div>
            <div className="block group-hover:hidden">
              <img
                src="/assets/img/online-shop.png"
                alt="Email Marketing icon"
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-[#0078AA] group-hover:text-yellow lg:text-xl">
              Ecommerce Development
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-[#0078AA]">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src="/assets/img/illustration.png" alt="Theme Design icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src="/assets/img/illustration.png" alt="Theme Design icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-[#0078AA] group-hover:text-yellow lg:text-xl">
              Graphic Design
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="group rounded px-8 py-12 shadow hover:bg-[#0078AA]">
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src="/assets/img/web-design.png" alt="Graphic Design icon" />
            </div>
            <div className="block group-hover:hidden">
              <img src="/assets/img/web-design.png" alt="Graphic Design icon" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-[#0078AA] group-hover:text-yellow lg:text-xl">
              Web Design
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
