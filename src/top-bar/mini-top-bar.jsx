import React from 'react';
import PropTypes from 'prop-types';
import styles from './mini-top-bar.module.scss';

const MiniTopBar = ({ productName, children }) => {
  return (
    <header className={styles['mini-top-bar']}>
      <div className={styles['mini-top-bar__title']}>
        Generative.fm{' '}
        <span className={styles['mini-top-bar__title__product-name']}>
          {productName}
        </span>
      </div>
      <div className={styles['mini-top-bar__content']}>{children}</div>
    </header>
  );
};

MiniTopBar.propTypes = {
  productName: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default MiniTopBar;
