import React, {useCallback, useReducer, useEffect } from "react";

import Input from "./components/input";
import List from "./components/list";
import ListItem from "./components/list-item";
import { colorsList } from "./constants/colors";

import { reducer } from "./AppReducer";
import {updateSearch, setColors, setSearchField} from "./AppActions"

import styles from "./App.module.css";

function App() {
  const INITIAL_STATE = {
    search: "",
    colors: [],
    filteredColors: [],
  };

  useEffect(() => {
      dispatch(setColors(colorsList))
  }, [])
  
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const getInputValue = useCallback((value) => {
    console.log("input", value);
    dispatch(updateSearch(value))
  }, [dispatch]);

  const handleItemClick = (value) => {
      console.log('item click', value)
    dispatch(setSearchField(value))
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>Search Colors</div>
        <Input placeholder="Type color" onInputChange={getInputValue} value={state.search}/>
        <List>
          {state.filteredColors.map((color, index) => {
            return <ListItem key={index} item={color} click={handleItemClick} searchField={state.search}/>;
          })}
        </List>
      </div>
    </div>
  );
}

export default App;
