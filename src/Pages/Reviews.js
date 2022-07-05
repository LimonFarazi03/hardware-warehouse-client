import React from "react";
import { useQuery } from "react-query";

const Reviews = () => {
  const {
    isLoading,
    error,
    data: reviews,
    refetch,
  } = useQuery("reviews", () =>
    fetch("http://localhost:5000/review").then(
      (res) => res.json()
    )
  );
  if(reviews){
    reviews.length = 6
  };
  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <button className="btn loading">Please Wait</button>
      </div>
    );
  }
  return (
    <div className="mb-28">
      <h1 className="text-center mb-4 font-bold text-4xl">Reviews</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-4 gap-3">
        {reviews.map((review) => (
          <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="avatar flex justify-center">
                <div className="w-24 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-center">Limon Farazi</h2>
              <p className="text-center">
                Ratting:{" "}
                <span className="font-bold text-orange-500">5 out of 5</span>
              </p>
              <p className="text-gray-400">
                If a dog chews shoes whose shoes does he choose?
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
