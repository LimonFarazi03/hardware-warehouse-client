import React from "react";

const AddReview = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div class="flex items-center my-3">
          <div class="avatar mr-2">
            <div class="w-12 rounded-full mr-2">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div>
          <h2 class="text-xl">Limon Farazi</h2>
            <p class="text-gray-400">Add Rate & review</p>
          </div>
          </div>
          <form className="grid grid-cols-1">
            <textarea className="bg-gray-100 p-1 mt-2 rounded" placeholder="your say.." cols="25" rows="5"></textarea>
            <input class="btn btn-success mt-4" type="submit" value="Post Review" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddReview;
