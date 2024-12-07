import { configureStore } from "@reduxjs/toolkit";
import quizzesReducer from "./slices/quizSlices";
import authReducer from "./slices/authSlice";

const store = configureStore({
    reducer:{
        quizzes: quizzesReducer,
        auth: authReducer,
    }
});

export default store;