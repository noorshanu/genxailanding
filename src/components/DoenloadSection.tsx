import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const DownloadSection: React.FC = () => {
  return (
    <div className="bg-bg1">
      <div
        className="mx-auto max-w-7xl mobile:px-m px-xl smooth_style relative mobile:py-6 tablet:py-16 py-20"
      
      >
            <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-12">
          Our Products
        </h2>
        <div className="flex flex-col sm:flex-row gap-[80px] mobile:flex-col mobile:gap-xl tablet:gap-m">
          <div className="will-change-transform service-card border-[#757575] border py-4 px-6 rounded-xl nft no-transition">
            <img
              src="images/ondemand.png"
              alt=""
              className=" mx-auto rounded-xl h-[100px]"
            />
            <h2 className=" text-center text-xl font-manbold font-extrabold text-white font-sf  pb-2">
              AI Token Gen
            </h2>

            <p className=" text-start pb-1 font-light text-white font-sf text-base">
              Simplify token creation and project generation with GenX AI.
              Whether using our manual tools or advanced AI-powered mode,
              launching tokens has never been this effortless.
            </p>
          </div>

          <div className="will-change-transform service-card border-[#757575] border py-4 px-6 rounded-xl nft no-transition">
            <img
              src="images/ondemand.png"
              alt=""
              className=" mx-auto rounded-xl h-[100px]"
            />
            <h2 className=" text-center text-xl font-manbold font-bold text-prime pb-2">
              AI NFT Creation
            </h2>

            <p className=" text-start pb-1 font-light">
              Design and launch your own NFT collections with ease. Simply
              provide insights to our AI, and we’ll help you create and launch
              your NFTs on any blockchain using our integrated launchpad.
            </p>
          </div>

          <div className="will-change-transform service-card border-[#757575] border py-4 px-6 rounded-xl nft no-transition">
            <img
              src="images/ondemand.png"
              alt=""
              className=" mx-auto rounded-xl h-[100px]"
            />
            <h2 className=" text-center text-xl font-manbold font-bold text-prime pb-2">
              Build on Multi-Chain
            </h2>

            <p className=" text-start pb-1 font-light">
              Tap into a $500 billion market with GenX AI’s multi-chain
              technology. Our platform expands your reach to millions of users
              across multiple blockchain networks.
            </p>
          </div>

          <div className="">
            <div className="will-change-transform service-card border-[#757575] border py-4 px-6 rounded-xl nft no-transition">
              <img
                src="images/ondemand.png"
                alt=""
                className=" mx-auto rounded-xl h-[100px]"
              />
              <h2 className=" text-center text-xl font-manbold font-bold text-prime pb-2">
                Easy To Use
              </h2>

              <p className=" text-start pb-1 font-light">
                Generate, create, and launch NFT and token projects
                effortlessly. With AI modules powered by GenX AI, simply input
                prompts just like ChatGPT and watch your ideas come to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
