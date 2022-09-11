import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import styles from './Pending.module.css';
export default function Pending() {
  return (
    <Spinner
      className={styles.spinnerBorderLarge}
      animation="border"
      variant="primary"
      size="xxl"
    />
  );
}
