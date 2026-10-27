import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeEmployeePopup } from "../../reduxToolkit/features/popupSlice";
import { editEmployees, postEmployees } from "../../reduxToolkit/features/employeeThunk";

const EmployeePopup = () => {
  const [formData, setformData] = useState({
    profileUrl: "",
    name: "",
    email: "",
    bio: "",
    highlights: false,
  });

  const dispatch = useDispatch();
  
  const popup = useSelector((state) => state.popup.employeePopup);

 

  const handleInput = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(popup.id){
      dispatch(editEmployees({ Data: formData, id: popup.id }));
    } else {
      dispatch(postEmployees(formData));
    }
    console.log(formData);
    dispatch(closeEmployeePopup());
  };

    useEffect(() => {
    if (!popup) {
      setformData({
        profileUrl: "",
        name: "",
        email: "",
        bio: "",
        highlights: false,
      });
    } else if (popup.id) {
      setformData({
        profileUrl: popup.profileUrl,
        name: popup.name,
        email: popup.email,
        bio: popup.bio,
        highlights: popup.highlights,
      });
    }
  }, [popup]);

  if (!popup) {
    return null;
  }
  return (
    <div
      onClick={() => dispatch(closeEmployeePopup())}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <fieldset
        onClick={(e) => e.stopPropagation()}
        className=" fieldset bg-base-200 border-base-300 w-xs rounded-box border p-4 "
      >
        <legend className="fieldset-legend text-lg font-bold pt-15 ">
          Employee Details
        </legend>

        <label className="label">Profile URL</label>
        <input
          type="text"
          name="profileUrl"
          className="input"
          placeholder="Profile URL"
          value={formData.profileUrl}
          onChange={handleInput}
        />

        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Name "
          value={formData.name}
          onChange={handleInput}
        />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          value={formData.email}
          onChange={handleInput}
        />

        <label className="label">Your bio</label>
        <textarea
          name="bio"
          className="textarea h-24"
          placeholder="Bio"
          value={formData.bio}
          onChange={handleInput}
        ></textarea>

        <button onClick={handleSubmit} className="btn btn-neutral mt-4">
          Submit
        </button>
      </fieldset>
    </div>
  );
};

export default EmployeePopup;
