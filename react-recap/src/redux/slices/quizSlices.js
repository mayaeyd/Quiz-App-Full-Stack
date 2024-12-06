import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
  score: 0,
  status: "idle",
  category: null,
  difficulty: null,
};

export const fetchQuizzes = createAsyncThunk("quiz/fetchQuizzes", async () => {
  const response = await axios("https://the-trivia-api.com/v2/questions");
  return response.data;
});

export const fetchFilteredQuizzes = createAsyncThunk(
  "quiz/fetchFilteredQuizzes",
  async ({ category, difficulty }) => {
    console.log("in slice:", category, difficulty);
    
    const response = await axios(
      `https://the-trivia-api.com/v2/questions?categories=${category}&difficulties=${difficulty}`
    );
    return response.data;
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    incrementScore: (state, action) => {
      state.score += action.payload;
    },
    setFilters: (state, action) => {
      state.category = action.payload.category;
      state.difficulty = action.payload.difficulty;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizzes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchQuizzes.rejected, (state) => {
        state.status = "failed";
      })

      .addCase(fetchFilteredQuizzes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilteredQuizzes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchFilteredQuizzes.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { incrementScore, setFilters } = quizSlice.actions;
export default quizSlice.reducer;
