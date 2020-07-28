import React from "react";
import PropTypes from 'prop-types';

import styles from "./List.module.css";

function List({children}) {
    
  return (
    <div className={styles.wrapper} data-testid='list'>
      {children}
    </div>
  );
}

List.propTypes = {
    children: PropTypes.node,
}

export default List;
