import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const MyProfile = () => {
  const [user, loading, haveerror] = useAuthState(auth);

  const handleUpdate = (event) => {
    event.preventDefault();

    const phone = event.target.phone.value;
    const fbUrl = event.target.fbUrl.value;
    const inUrl = event.target.inUrl.value;
    const address = event.target.address.value;

    const updateDocument = {
      phone,
      facebook: fbUrl,
      linkedin: inUrl,
      address,
    };

    fetch(`https://safe-savannah-43531.herokuapp.com/user/${user.email}`, {
      method: "PUT",
      body: JSON.stringify(updateDocument),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.success){
          toast.success("Update Successfully")
          event.target.reset();
        }else{
          toast.success("Something Wrong")
        }
      });
  };

  return (
    <div className="my-1 bg-green-200 w-[100vh] h-[100vh] mx-auto rounded-md shadow-lg">
      <div class="p-5">
        {/* Profile */}
        <div class="flex justify-center mb-4">
          <div>
            <div class="flex justify-center avatar">
              <div class="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <h2 className="font-bold mt-2 text-xl">{user?.displayName}</h2>
          </div>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="flex justify-center items-center">
            <input
              name="imageUrl"
              type="file"
              class="mt-2 block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100
                    "
            />
          </div>
          <div className="flex mt-4">
            <div className="form-control w-full max-w-xs mr-1">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                value={user?.email}
                disabled
                type="text"
                className="input w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                name="phone"
                type="text"
                className="input w-full max-w-xs"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="flex mt-4">
            <div className="form-control w-full max-w-xs mr-1">
              <label className="label">
                <span className="label-text">Facebook URL</span>
              </label>
              <input
                name="fbUrl"
                type="text"
                className="input w-full max-w-xs"
                placeholder="URL's"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Linkedin URL</span>
              </label>
              <input
                name="inUrl"
                type="text"
                className="input w-full max-w-xs"
                placeholder="URL's"
              />
            </div>
          </div>
          <textarea
            name="address"
            className="bg-gray-100 p-1 mt-4 rounded"
            placeholder="your address"
            cols="78"
            rows="5"
          ></textarea>{" "}
          <br />
          {/* Button */}
          <button className="btn btn-success mt-5">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
