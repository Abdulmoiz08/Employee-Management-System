import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { opendeletePopup , openEmployeePopup } from '../../reduxToolkit/features/popupSlice';
import { useDispatch } from 'react-redux';
import { editEmployees } from '../../reduxToolkit/features/employeeThunk';


const EmployeeCard = ({ employee }) => {
  const dispatch = useDispatch();
  return (
    <div>  <li className="list-row">
    <div><img className="size-10 rounded-box" alt="Tailwind CSS list item" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/>{employee.profileUrl}</div>
    <div>
      <div>{employee.name}</div>
      <div className="text-xs uppercase font-semibold opacity-60">{employee.email}</div>
    </div>
    <p className="list-col-wrap text-xs">
      {employee.bio}
    </p>
    <button onClick={()=>dispatch(openEmployeePopup(employee))} className="btn btn-square btn-ghost">
      <CiEdit className="size-[1.2em]"/>
    </button>
    <button  onClick={()=>dispatch(opendeletePopup(employee.id))} className="btn btn-square btn-ghost">
      <MdDeleteOutline className="size-[1.2em]"/>
    </button>
    <button  onClick={()=>dispatch(editEmployees({ id: employee.id, Data: { ...employee ,highlights: !employee.highlights } }))} className="btn btn-square btn-ghost">
      <svg aria-label="Favorite" className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill={employee.highlights ? "currentColor" : "none"} stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
    </button>
  </li>
  </div>
  )
}

export default EmployeeCard