import React from "react";

const Stats = () => {
  return (
    <div
      className="bg-fixed bg-top bg-repeat pb-16 md:py-16 lg:py-24"
      style={{ backgroundImage: `url(/assets/img/figure.png)` }}
      id="statistics"
    >
      <div className="container">
        <div className="mx-auto w-5/6 bg-gray-50 py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
          <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
            <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
              <div>
                <img
                  src="/assets/img/icon-project.svg"
                  className="mx-auto h-12 w-auto md:h-20"
                  alt="icon project"
                />
              </div>
              <div className="pt-5 md:pl-5 md:pt-0">
                <h1 className="font-body text-2xl font-bold text-[#0078AA] md:text-4xl">
                  42
                </h1>
                <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                  Finished Projects
                </h4>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
              <div>
                <img
                  src="/assets/img/icon-award.svg"
                  className="mx-auto h-12 w-auto md:h-20"
                  alt="icon award"
                />
              </div>
              <div className="pt-5 md:pl-5 md:pt-0">
                <h1 className="font-body text-2xl font-bold text-[#0078AA] md:text-4xl">
                  3
                </h1>
                <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                  Awards Won
                </h4>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
              <div>
                <img
                  src="/assets/img/icon-happy.svg"
                  className="mx-auto h-12 w-auto md:h-20"
                  alt="icon happy clients"
                />
              </div>
              <div className="pt-5 md:pl-5 md:pt-0">
                <h1 className="font-body text-2xl font-bold text-[#0078AA] md:text-4xl">
                  8
                </h1>
                <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                  Happy Clients
                </h4>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
              <div>
                <img
                  src="/assets/img/icon-puzzle.svg"
                  className="mx-auto h-12 w-auto md:h-20"
                  alt="icon puzzle"
                />
              </div>
              <div className="pt-5 md:pl-5 md:pt-0">
                <h1 className="font-body text-2xl font-bold text-[#0078AA] md:text-4xl">
                  99
                </h1>
                <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                  Bugs Fixed
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;