import React from "react";
import PropTypes from "prop-types";

import styles from "./ListItem.module.css";

function ListItem({ item, click, searchField }) {
  let text = item;
  const regex = new RegExp("(" + searchField + ")", "i");
  text = text.replace(regex, "<b>$1</b>");

  const handleButtonPress = ({key}) => {
    if(key === 'Enter'){
        click(item)
    }
  }

  return (
    <div className={styles.wrapper} onClick={() => click(item)} tabIndex={0} onKeyPress={handleButtonPress} aria-label="list item">
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
  click: PropTypes.func,
  searchField: PropTypes.string
};

ListItem.defaultProps = {
  item: "ITEM",
  searchField: "",
  click: () => {
    console.log("clicked");
  },
};
export default ListItem;
