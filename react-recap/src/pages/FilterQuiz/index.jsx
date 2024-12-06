import { Button, MenuItem, Menu } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/slices/quizSlices";
import { useNavigate } from "react-router-dom";
import "./style.css";

const FilterQuiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category, difficulty } = useSelector((state) => state.quizzes);

  const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
  const [difficultyAnchorEl, setDifficultyAnchorEl] = useState(null);

  const categoryOpen = Boolean(categoryAnchorEl);
  const difficultyOpen = Boolean(difficultyAnchorEl);

  const handleCategoryClick = (event) => {
    setCategoryAnchorEl(event.currentTarget);
  };

  const handleDifficultyClick = (event) => {
    setDifficultyAnchorEl(event.currentTarget);
  };

  const handleCategoryClose = (selectedCategory) => {
    setCategoryAnchorEl(null);
    if (selectedCategory) {
      dispatch(setFilters({ category: selectedCategory, difficulty }));
    }
  };

  const handleDifficultyClose = (selectedDifficulty) => {
    setDifficultyAnchorEl(null);
    if (selectedDifficulty) {
      dispatch(setFilters({ category, difficulty: selectedDifficulty }));
    }
  };

  const handleStartQuiz = () => {
    if (category && difficulty) {      
      navigate("/quiz");
    } else {
      navigate("/quiz");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "16px" }}>
      <Button
        fullWidth
        variant="outlined"
        color="secondary"
        aria-controls={categoryOpen ? "category-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={categoryOpen ? "true" : undefined}
        onClick={handleCategoryClick}
      >
        {category ? `Category: ${category}` : "Select Category"}
      </Button>
      <Menu
        id="category-menu"
        anchorEl={categoryAnchorEl}
        open={categoryOpen}
        onClose={() => handleCategoryClose(null)}
      >
        <MenuItem onClick={() => handleCategoryClose("science")}>
          Science
        </MenuItem>
        <MenuItem onClick={() => handleCategoryClose("geography")}>
          Geography
        </MenuItem>
        <MenuItem onClick={() => handleCategoryClose("food_and_drink")}>
          Food and Drink
        </MenuItem>
        <MenuItem onClick={() => handleCategoryClose("sports_and_leisure")}>
          Sports and Leisure
        </MenuItem>
        <MenuItem onClick={() => handleCategoryClose("music")}>
          Music
        </MenuItem>
        <MenuItem onClick={() => handleCategoryClose("history")}>
          History
        </MenuItem>
        <MenuItem onClick={() => handleCategoryClose("film_and_tv")}>
          Film and TV
        </MenuItem>
        <MenuItem onClick={() => handleCategoryClose("society_and_culture")}>
          Society and Culture
        </MenuItem>
        <MenuItem onClick={() => handleCategoryClose("arts_and_literature")}>
          Arts and Literature
        </MenuItem>
      </Menu>

      <Button
        fullWidth
        variant="outlined"
        color="secondary"
        style={{ marginTop: "16px" }}
        aria-controls={difficultyOpen ? "difficulty-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={difficultyOpen ? "true" : undefined}
        onClick={handleDifficultyClick}
      >
        {difficulty ? `Difficulty: ${difficulty}` : "Select Difficulty"}
      </Button>

      <Menu
        id="difficulty-menu"
        anchorEl={difficultyAnchorEl}
        open={difficultyOpen}
        onClose={() => handleDifficultyClose(null)}
      >
        <MenuItem onClick={() => handleDifficultyClose("easy")}>Easy</MenuItem>
        <MenuItem onClick={() => handleDifficultyClose("medium")}>Medium</MenuItem>
        <MenuItem onClick={() => handleDifficultyClose("hard")}>Hard</MenuItem>
      </Menu>

      <Button
        fullWidth
        variant="contained"
        color="secondary"
        style={{ marginTop: "16px" }}
        onClick={handleStartQuiz}
      >
        Start Quiz
      </Button>
    </div>
  );
};

export default FilterQuiz;
