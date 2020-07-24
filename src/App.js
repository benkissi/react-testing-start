import React from "react";
import Input from "./components/input";

import styles from "./App.module.css";

function App() {
    const getInputValue = (value) => {
        console.log('input', value)
    }
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>Search Colors</div>
        <Input placeholder="Type color" onInputChange={getInputValue}/>
      </div>
    </div>
  );
}

export default App;
