import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import styles from './full-top-bar.module.scss';

const FullTopBar = ({
  productName,
  navLinks = [],
  children,
  hasShadow = true,
}) => {
  return (
    <header
      className={classnames(styles['full-top-bar'], {
        [styles['full-top-bar--has-shadow']]: hasShadow,
      })}
    >
      <div className={styles.title}>
        Generative.fm{' '}
        <span className={styles['title__product-name']}>{productName}</span>
      </div>
      <nav className={styles.nav}>
        {navLinks.map(({ label, to }) => (
          <NavLink
            className={styles.nav__link}
            activeClassName={styles['nav__link--is-active']}
            to={to}
            key={to}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      {children}
    </header>
  );
};

FullTopBar.propTypes = {
  productName: PropTypes.string.isRequired,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
  children: PropTypes.node,
  hasShadow: PropTypes.bool,
};

export default FullTopBar;
