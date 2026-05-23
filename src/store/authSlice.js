import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../api/authApi";
import { jwtDecode } from "jwt-decode";

export const login = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
    try {
        const { data } = await loginApi(credentials);
        localStorage.setItem("token", data.token);
        return { token: data.token, user: jwtDecode(data.token) };
    } catch (err) {
        return rejectWithValue(err.response?.data || "Erreur de connexion");
    }
});

const token = localStorage.getItem("token");
const initialState = {
    token: token || null,
    user: token ? jwtDecode(token) : null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.token = null;
            state.user = null;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => { state.loading = true; state.error = null; })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;