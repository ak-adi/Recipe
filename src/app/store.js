import {configureStore} from '@reduxjs/toolkit'
import recipeSlice from '../features/recipeSlice'

const store = configureStore({
    reducer : {
        recipe : recipeSlice
    }
})

export default store