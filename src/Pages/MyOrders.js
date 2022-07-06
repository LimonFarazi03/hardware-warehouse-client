import React from "react";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const MyOrders = () => {
  const [user, loading, haveError] = useAuthState(auth);

  const url = `https://safe-savannah-43531.herokuapp.com/myOrders?email=${user.email}`;
  const {
    isLoading,
    error,
    data: services,
    refetch,
  } = useQuery("myOrder", () => fetch(url).then((res) => res.json()));

  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <button className="btn loading">Please Wait</button>
      </div>
    );
  }
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure");
    if (confirm) {
      fetch(`https://safe-savannah-43531.herokuapp.com/booking/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("deleted Successfully");
            refetch();
          } else {
            toast.error("Something went Wrong");
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-2xl text-center mt-2 mb-5 font-bold">
        My Orders: {services.length}
      </h2>
      <div className="px-3">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>User Name</th>
                <th>Product Name</th>
                <th>Quality</th>
                <th>Address</th>
                <th>Payment Details</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr className="hover">
                  <th>{index + 1}</th>
                  <td>{user?.displayName}</td>
                  <td>{service.productName}</td>
                  <td className="font-bold">{service.quantity}</td>
                  <td>{service.address}</td>
                  <td>
                    <button className="btn btn-sm btn-success">Pay now</button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="btn btn-sm bg-red-500"
                    >
                      <AiFillDelete className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
