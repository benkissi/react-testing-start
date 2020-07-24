import React from "react";

import styles from "./ListItem.module.css";

function ListItem({ item, click }) {
  return <div className={styles.wrapper} onClick={() =>click(item)}>{item}</div>;
}

export default ListItem;
