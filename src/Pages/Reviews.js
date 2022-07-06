import React from "react";
import { useQuery } from "react-query";

const Reviews = () => {
  const {
    isLoading,
    error,
    data: reviews,
    refetch,
  } = useQuery("reviews", () =>
    fetch("https://safe-savannah-43531.herokuapp.com/review").then(
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
      <h1 className="text-center mb-5 font-bold text-4xl">Reviews</h1>
      <div className="mt-3 grid grid-cols-1 lg:grid-cols-4 px-4 gap-3">
        {reviews.map((review) => (
          <div className="card lg:max-w-lg bg-base-200">
            <div className="card-body">
              <div className="avatar flex justify-center">
                <div className="w-24 rounded-full">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <h2 className="text-xl mb-0 font-bold text-center">{review.user}</h2>
              <h2 className="text-sm mt-0 italic text-center"><small>{review.email}</small></h2>
              <p className="text-center">
                Ratting:{" "}
                <span><span className="font-bold text-orange-500">{review.star}</span> out of 5</span>
              </p>
              <p className="mt-2 text-gray-400 text-center">
                {review.review.slice(0,200)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
