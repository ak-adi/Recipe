import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const searchRecipes = createAsyncThunk("recipe/searchRecipes", async ({searchQuery,limit,page}) => {
    const response = await fetch(`http://localhost:8080/api/v1/public/meals?page=${page}&limit=${limit}&query=${searchQuery}`)
    const result = response.json()
    return result
})

export const getRecipeById = createAsyncThunk("recipe/getRecipeById", async({id}) => {
    const response = await fetch(`http://localhost:8080/api/v1/public/meals/${id}`)
    const result = response.json()
    return result
})
const initialState = {
    recipe: [],
    loading: false,
    error: null,
    totalPages : 1,
    limit: 10
}

const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    extraReducers: {
        [searchRecipes.pending] : (state) => {
            state.loading = true
        },
        [searchRecipes.fulfilled] : (state, action) => {
            state.loading = false
            state.recipe = action.payload.data.data
            state.totalPages = action.payload.data.totalPages
        },
        [searchRecipes.rejected] : (state) => {
            state.loading = false
            state.error = action.error.message
        },

        [getRecipeById.pending] : (state) =>{
            state.loading = true
        },
        [getRecipeById.fulfilled] : (state,action) =>{
            state.loading = false
            state.recipe = action.payload.data
        },
        [getRecipeById.rejected] : (state) =>{
            state.loading = false
            state.error = action.error.message
        },
    }
})

export default recipeSlice.reducer