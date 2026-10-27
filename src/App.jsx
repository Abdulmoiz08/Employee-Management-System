import react, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Employee from "./components/employee/Employee";
import EmployeePopup from "./components/employeePopup/EmployeePopup";
import DeletePopup from "./components/deletepopup/DeletePopup";
import { useDispatch } from "react-redux";
import { fetchEmployees } from "./reduxToolkit/features/employeeThunk";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <EmployeePopup />
      <DeletePopup />
      <Navbar />
      <div className="flex-1">
        <Employee />
      </div>
      <Footer />
    </div>
  );
}

export default App;
