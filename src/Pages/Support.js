import React from "react";
import supportImg from "../assets/Images/support.jpg";

const Support = () => {
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img src={supportImg} class="mr-3 max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Customer Support</h1>
            <p class="py-6 max-w-xl">
              Customer service is the support you offer your customers — both
              before and after they buy and use your products or services
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
