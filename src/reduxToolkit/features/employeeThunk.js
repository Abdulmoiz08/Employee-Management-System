import { createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../config/axiosInstance";

export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async (_, {rejectWithValue}) => {
    try {
      const response = await api.get("employee");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'something went wrong');
    }
  },
);
export const postEmployees = createAsyncThunk(
  "employee/postEmployees",
  async (employeeData, {rejectWithValue , dispatch}) => {
    try {
      const response = await api.post("employee", employeeData);
      dispatch(fetchEmployees());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'something went wrong');
    }
  },
);
export const deleteEmployees = createAsyncThunk(
  "employee/deleteEmployees",
  async (employeeId, {rejectWithValue , dispatch}) => {
    try {
      const response = await api.delete(`employee/${employeeId}`);
      dispatch(fetchEmployees());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'something went wrong');
    }
  },
);
export const editEmployees = createAsyncThunk(
  "employee/editEmployees",
  async ({id , Data}, {rejectWithValue , dispatch}) => {
    try {
      const response = await api.put(`employee/${id}`,Data);
      dispatch(fetchEmployees());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'something went wrong');
    }
  },
);
