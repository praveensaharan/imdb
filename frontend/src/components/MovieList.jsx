import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { StarOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Pagination } from "antd";

import Loading from "./Loading";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  const pageSize = 40; // Set default page size

  useEffect(() => {
    const fetchMovies = async (page) => {
      try {
        const response = await axios.get(
          `https://wax-hushed-fold.glitch.me/api/movies?page=${page}&pageSize=${pageSize}`
        );
        setMovies(response.data.movies); // Assuming the response contains a "movies" array
        setTotalMovies(response.data.total); // Assuming the response contains a "total" count
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchMovies(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setLoading(true);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4 pt-6">
      <ul
        className="divide-y divide-gray-200 border-2 border-gray-100 rounded-lg p-2 w-4/6"
        style={{ maxWidth: "800px" }}
      >
        {movies.map((movie, index) => (
          <li key={movie._id} className="py-4">
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="h-32 w-24 rounded-lg object-cover"
                  src={movie.image_src}
                  alt={movie.title}
                />
              </div>
              <div className="flex">
                <div className="flex flex-col">
                  <Link
                    to={`/movies/${movie._id}`}
                    className="text-lg font-bold text-gray-900"
                  >
                    {(currentPage - 1) * pageSize + index + 1}. {movie.title}
                  </Link>

                  <p className="text-gray-500 text-sm mt-1 w-5/6">
                    {movie.summary.length > 200
                      ? movie.summary.substring(0, 200) + "..."
                      : movie.summary}
                  </p>
                  <a
                    href={movie.url}
                    className="flex items-center text-blue-600 text-sm mt-1"
                  >
                    <StarOutlined
                      className="mr-2 hover:bg-blue-50"
                      style={{ color: "#2563eb" }}
                    />
                    Rate
                  </a>
                </div>
                <a
                  href={movie.wiki_page}
                  className="my-auto mx-auto pr-5 flex items-center text-gray-600 text-sm "
                >
                  <InfoCircleOutlined
                    style={{ fontSize: "20px", color: "#08c", hover: "blue" }}
                    className="hover:bg-blue-50"
                  />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-6">
        <Pagination
          current={currentPage}
          total={totalMovies}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default MovieList;
