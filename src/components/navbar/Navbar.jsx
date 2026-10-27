import React, { Fragment } from "react";
import Layout from "../layout/layout";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openEmployeePopup } from "../../reduxToolkit/features/popupSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div   className="sticky top-0 z-10">
    <Layout>
      <div className="navbar bg-base-100  shadow-sm">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Employees</a>
        </div>
        <div className="navbar-end">
          <button onClick={() => dispatch(openEmployeePopup())} className="btn btn-ghost btn-circle">
            <FaPlus   className="size-[1.2em]"/>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
               <svg aria-label="Favorite" className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </Layout>
    </div>
  );
};

export default Navbar;
