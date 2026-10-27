import React from 'react'
import Layout from '../layout/layout'
import EmployeeCard from './EmployeeCard'
import { useSelector } from 'react-redux';


const Employee = () => {

  const employees = useSelector((state) => state.employee.employees);

  return (
   
    <Layout>
      <ul className="list bg-base-100 rounded-box shadow-md">
        {
          employees.map((employee) => (
            <EmployeeCard key={employee.id || Math.random()} employee={employee} />
          ))
        }
</ul>
    </Layout>
  )
}

export default Employee