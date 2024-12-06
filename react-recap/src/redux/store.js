import { configureStore } from "@reduxjs/toolkit";
import quizzesReducer from "./slices/quizSlices"

const store = configureStore({
    reducer:{
        quizzes: quizzesReducer
    }
});

export default store;