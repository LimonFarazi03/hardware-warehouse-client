import React from 'react';

const Reviews = () => {
  return (
    <div className="mb-28">
      <h1 className="text-center mb-4 font-bold text-4xl">Reviews</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 px-4 gap-3">

      <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">

  <div class="avatar flex justify-center">
  <div class="w-24 rounded-full">
    <img src="https://placeimg.com/192/192/people" />
  </div>
</div>

    <h2 class="text-xl font-bold text-center">Limon Farazi</h2>
    <p className="text-center">Ratting: <span class="font-bold text-orange-500">5 out of 5</span></p>
    <p className="text-gray-400">If a dog chews shoes whose shoes does he choose?</p>
  </div>
</div>
      <div class="card lg:max-w-lg  bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      <div class="card lg:max-w-lg  bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      <div class="card lg:max-w-lg  bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      </div>

    </div>
  );
};

export default Reviews;