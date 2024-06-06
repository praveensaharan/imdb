import { useState } from "react";
import React from "react";
import { Carousel, Input } from "antd";
import { ShareAltOutlined, StarOutlined } from "@ant-design/icons";
import MovieList from "../components/MovieList";

const { Search } = Input;

const image_src =
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image_src2 =
  "https://images.unsplash.com/photo-1559613671-dfe2fb6a7680?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image_src3 =
  "https://images.unsplash.com/photo-1535446937720-e4cad0145efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const image_src4 =
  "https://images.unsplash.com/photo-1599967094040-370dcf383e01?q=80&w=1866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const HomePage = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://wax-hushed-fold.glitch.me/api/movies"
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="relative">
        <Search
          placeholder="Search movies..."
          enterButton
          size="large"
          className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 w-3/4"
        />
        <Carousel autoplay style={{ width: "100%", height: "70vh" }}>
          <div className="h-50vh">
            <img
              className="w-full h-96"
              src={image_src2}
              alt="Carousel Image 1"
            />
          </div>
          <div className="h-50vh">
            <img
              className="w-full h-96"
              src={image_src}
              alt="Carousel Image 2"
            />
          </div>
          <div className="h-50vh">
            <img
              className="w-full  h-96"
              src={image_src3}
              alt="Carousel Image 3"
            />
          </div>
          <div className="h-50vh">
            <img
              className="w-full  h-96"
              src={image_src4}
              alt="Carousel Image 4"
            />
          </div>
        </Carousel>
      </div>

      <div className="text-center mb-6 mt-6">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg ">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-black">IMDb Charts</h2>
            <div className="flex items-center justify-center md:justify-start mt-4 border-l-8 border-yellow-400">
              <p className="text-4xl font-medium text-gray-700 ml-2">
                IMDb Top 250 Movies
              </p>
            </div>
            <p className="text-gray-400 mt-2 text-base">
              As rated by regular IMDb voters.
            </p>
          </div>
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <button
              className="text-gray-700 px-6 py-3 text-lg rounded-lg mt-2 md:mt-0 flex items-center focus:outline-none"
              onClick={copyToClipboard}
            >
              {copied ? "Copied!" : "Share"}
              <ShareAltOutlined className="ml-3" style={{ fontSize: "24px" }} />
            </button>
          </div>
        </div>
      </div>
      <MovieList />
    </div>
  );
};

export default HomePage;
