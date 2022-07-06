import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from 'react-query'
import { toast } from "react-toastify";
import auth from "../firebase.init";

const AddReview = () => {
  const [user, loading, haveError] = useAuthState(auth);
  const url = `http://localhost:5000/review`

  const postReview = (event) =>{
    event.preventDefault()
    const review = event.target.review.value;
    const star = event.target.star.value;

    if(star < 1){
      return toast.warn('Give review minimum 1');
    }else if(star > 5){
      return toast.warn('Give review under 1 to 5');
    };
    const reviewNow = {
      user: user.displayName,
      email: user.email,
      star,
      review
    }
      fetch(url, {
          method: 'POST',
          body: JSON.stringify(reviewNow),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      if(data.success){
        // console.log(data)
        toast.success('Thank you for your valuable review')
        event.target.reset();
      }else{
        toast.error("You have already a review 1 person can review 1 time")
      }
    });
  }
  if(loading){
    return <div className="flex h-screen justify-center items-center">
    <button className='btn loading'>Please Wait</button>
    </div>
   };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex items-center my-3">
          <div className="avatar mr-2">
            <div className="w-12 rounded-full mr-2">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div>
          <h2 className="text-xl font-bold">{user?.displayName}</h2>
            <p className="text-gray-400">Add Rate & review</p>
          </div>
          </div>
          <form onSubmit={postReview} className="grid grid-cols-1">
            <textarea required name="review" className="bg-gray-100 p-1 mt-4 rounded" placeholder="your say.." cols="25" rows="5"></textarea>
            <input name="star" required type="number" placeholder="your point under 5 Star" className="mt-2 input input-bordered w-full max-w-xs" />
            <input className="btn btn-success mt-4" type="submit" value="Post Review" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddReview;
