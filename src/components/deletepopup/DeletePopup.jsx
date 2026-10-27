import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { closeDeletePopup } from "../../reduxToolkit/features/popupSlice";
import { deleteEmployees } from "../../reduxToolkit/features/employeeThunk";

const DeletePopup = () => {

  const dispatch = useDispatch();

  const popup = useSelector(state=>state.popup.deletePopup)
  // in popup the value is employee id which we want to delete so we can use that id to delete the employee from the list
 


  if(!popup){
    return null;
  } 
  return (
    <div onClick = {(e) => dispatch(closeDeletePopup())} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
     <div className="card w-96 bg-base-100 card-md shadow-sm">
  <div onClick={(e)=>e.stopPropagation()} className="card-body">
    <h2 className="card-title">Delete</h2>
    <p className="text-start " >Are you sure you want to delete this employee?</p>
    <div className=" pt-5 justify-end card-actions">
      <button onClick={()=>{
        dispatch(closeDeletePopup())
      }} className="btn btn-primary">No</button>
      <button  onClick={()=>{
        dispatch(deleteEmployees(popup))
        dispatch(closeDeletePopup())
      }} className="btn btn-primary">Yes</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default DeletePopup;
