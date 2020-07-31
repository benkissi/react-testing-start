import React from "react";
import PropTypes from "prop-types";
import ListItem from "../list-item";

import styles from "./List.module.css";

function List({ listItems, onItemClick, search }) {
  return (
    <div className={styles.wrapper} data-testid="list">
      {listItems.map((color, index) => {
        return (
          <ListItem
            key={index}
            item={color}
            click={onItemClick}
            searchField={search}
          />
        );
      })}
    </div>
  );
}

List.propTypes = {
  listItems: PropTypes.array,
  onItemClick: PropTypes.func,
  search: PropTypes.string
};

List.defaultProps = {
  listItems: ['Item'],
  onItemClick: () => console.log('item clicked'),
  search: ''
}

export default List;
