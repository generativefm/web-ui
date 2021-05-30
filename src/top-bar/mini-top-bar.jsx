import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './mini-top-bar.module.scss';

const MiniTopBar = ({ productName, children, hasShadow = true }) => {
  return (
    <header
      className={classnames(styles['mini-top-bar'], {
        [styles['mini-top-bar--has-shadow']]: hasShadow,
      })}
    >
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
  hasShadow: PropTypes.bool,
};

export default MiniTopBar;
