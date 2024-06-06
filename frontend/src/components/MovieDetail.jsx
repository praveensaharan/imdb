import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { StarOutlined, InfoCircleOutlined } from "@ant-design/icons";
const { Meta } = Card;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [showFullSummary, setShowFullSummary] = useState(false);

  const toggleShowFullSummary = () => {
    setShowFullSummary(!showFullSummary);
  };
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://wax-hushed-fold.glitch.me/api/movies/${id}`
        );
        setMovie(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!movie) {
    return (
      <div className="container mx-auto p-4 pt-6 text-center text-gray-700">
        <h2 className="text-3xl font-bold mb-4">Movie not found</h2>
        <p className="text-lg">
          Sorry, the movie you are looking for is not available.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 pt-6">
      <h2 className="text-3xl font-bold mb-4 md:text-4xl">{movie.title}</h2>
      <div className="flex flex-col items-center">
        <div className="w-60 h-96 md:w-80 md:h-96 rounded-lg shadow-lg relative overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={movie.image_src}
            alt={movie.title}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
        </div>
        <div className="flex mt-6">
          <a
            href={movie.url}
            className="flex items-center justify-center text-sm text-white bg-yellow-500 rounded-full py-2 px-4 mr-4 hover:bg-yellow-600 transition-colors duration-300"
          >
            <span className="mr">IMDb</span>
          </a>
          <a
            href={movie.wiki_page}
            className="flex items-center justify-center text-gray-600 text-sm hover:text-blue-500 transition-colors duration-300"
          >
            <InfoCircleOutlined
              style={{ fontSize: "20px", color: "#08c" }}
              className="mr-2 hover:text-blue-500 transition-colors duration-300"
            />
            <span>Wikipedia</span>
          </a>
        </div>
        <Link
          to="/"
          className="mt-10 relative inline-flex items-center justify-center p-2 px-6 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-2xl shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-300 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            Back
          </span>
          <span className="relative invisible">Back</span>
        </Link>

        <div className="w-4/5 mt-10 border-2 py-4 px-6 rounded-xl bg-blue-50 relative mb-16 pb-6">
          <p className="text-gray-700 text-base">
            {showFullSummary
              ? movie.summary
              : movie.summary.length > 1500
              ? movie.summary.substring(0, 1500) + "..."
              : movie.summary}
          </p>
          {movie.summary.length > 1500 && (
            <button
              onClick={toggleShowFullSummary}
              className="absolute bottom-2 right-16 px-3 py-1 bg-purple-400 text-white rounded-md hover:bg-purple-600 transition-colors duration-300"
            >
              {showFullSummary ? "Read Less" : "Read More...."}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
