import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    avatar: string,
    id: number;
    email: string;
    first_name: string;
    last_name: string;
}

interface UserState{
    users: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUserStart: (state) => { 
        state.loading = true
    },
    getUserSuccess: (state, action:PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload
    },
    getUserError: (state, action:PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload
    }
    },
})

export const { getUserStart, getUserSuccess, getUserError} = userSlice.actions;
export default userSlice.reducer