import {createSlice} from "@reduxjs/toolkit"
import { deleteEmployees, editEmployees, fetchEmployees, postEmployees } from "./employeeThunk";

const initialState = {
    employees: [],
    loading: false,
    error: null
}

const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchEmployees.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchEmployees.fulfilled, (state, action) => {
            state.loading = false;
            state.employees = action.payload;
        })
        builder.addCase(fetchEmployees.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }) 
        //post employees builders
        builder.addCase(postEmployees.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(postEmployees.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // Delete employees builders
        builder.addCase(deleteEmployees.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(deleteEmployees.fulfilled, (state, action) => {
            state.loading = false;
            state.employees = state.employees.filter(employee => employee.id !== action.payload.id);
        })
        builder.addCase(deleteEmployees.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // Edit employees builders
        builder.addCase(editEmployees.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(editEmployees.fulfilled, (state, action) => {
            state.loading = false;
            const index = state.employees.findIndex(employee => employee.id === action.payload.id);
            if (index !== -1) {
                state.employees[index] = action.payload;
            }
        })
        builder.addCase(editEmployees.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }})

    export const {addEmployee} = employeeSlice.actions
    export default employeeSlice.reducer