import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllArticles, deleteArticle as deleteApi } from "../api/articleApi";

export const loadArticles = createAsyncThunk("articles/loadAll", async (_, { rejectWithValue }) => {
    try {
        const { data } = await fetchAllArticles();
        return data;
    } catch (err) {
        return rejectWithValue(err.response?.data || "Erreur chargement");
    }
});

export const removeArticle = createAsyncThunk("articles/remove", async (id, { rejectWithValue }) => {
    try {
        await deleteApi(id);
        return id;
    } catch (err) {
        return rejectWithValue(err.response?.data);
    }
});

const articleSlice = createSlice({
    name: "articles",
    initialState: { list: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadArticles.pending, (state) => { state.loading = true; })
            .addCase(loadArticles.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(loadArticles.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(removeArticle.fulfilled, (state, action) => {
                state.list = state.list.filter((a) => a.id !== action.payload);
            });
    },
});

export default articleSlice.reducer;