import React from "react";
import { useQuery } from "react-query";
import Service from "./Service";

const Items = () => {
  const {
    isLoading,
    error,
    data: services,
  } = useQuery("services", () =>
    fetch("https://safe-savannah-43531.herokuapp.com/services").then((res) => res.json())
  );
  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <button className="btn loading">Loading</button>
      </div>
    );
  }
  if (services.length) {
    services.length = 4;
  }
  return (
    <div className="my-28 px-4">
      <h2 className="text-center text-4xl mb-5">Services</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <Service service={service} key={service._id} />
        ))}
      </div>
    </div>
  );
};

export default Items;
