import React, { useCallback, useReducer, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";

import Input from "./components/input";
import List from "./components/list";
import { colorsList } from "./constants/colors";

import { reducer } from "./AppReducer";
import {
  updateSearch,
  setColors,
  setSearchField,
  clearFilter,
} from "./AppActions";

import styles from "./App.module.css";

function App() {
  const INITIAL_STATE = {
    search: "",
    colors: [],
    filteredColors: [],
    selectionMade: false,
  };

  let inputRef = React.createRef();

  const listAnimation = useSpring({
    marginTop: 0,
    from: { marginTop: -500 },
    config: config.slow,
    width: "100%"
  });

  useEffect(() => {
    dispatch(setColors(colorsList));
  }, []);

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const getInputValue = useCallback(
    (value) => {
      dispatch(updateSearch(value));
    },
    [dispatch]
  );

  const handleItemClick = (value) => {
    dispatch(setSearchField(value));
    inputRef.current.focus();
  };

  const handleCloseList = (event) => {
    const { id } = event.target;

    if (id === "App") {
      inputRef.current.focus();
      dispatch(clearFilter());
    }
  };

  const previewColor = state.selectionMade && state.search ? state.search : "";

  return (
    <div id="App" className={styles.wrapper} onClick={handleCloseList}>
      <div className={styles.content}>
      <animated.div style={listAnimation}>
        <div className={styles.top__inner}>
            <div className={styles.title}>Search Colors</div>
          

          <div
            className={styles.color__preview}
            style={{ backgroundColor: previewColor }}
          >
            {!state.selectionMade ? "No color selected" : ""}
          </div>
          <Input
            placeholder="Type color"
            onInputChange={getInputValue}
            value={state.search}
            ref={inputRef}
          />
        </div>
        </animated.div>

        <div className={styles.list__wrapper}>
          {state.filteredColors.length ? (
            <List listItems={state.filteredColors} onItemClick={handleItemClick} search={state.search}/>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
