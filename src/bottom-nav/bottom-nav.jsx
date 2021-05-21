import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import styles from './bottom-nav.module.scss';

const BottomNav = ({ hasBorder = false, hasShadow = true, navLinks = [] }) => {
  return (
    <nav
      className={classnames(styles['bottom-nav'], {
        [styles['bottom-nav--has-shadow']]: hasShadow,
        [styles['bottom-nav--has-border']]: hasBorder,
      })}
    >
      {navLinks.map(({ Icon, label, to }) => {
        <NavLink
          className={styles['bottom-nav__link']}
          activeClassName={styles['bottom-nav__link--is-active']}
          to={to}
        >
          <Icon />
          {label}
        </NavLink>;
      })}
    </nav>
  );
};

BottomNav.propTypes = {
  hasBorder: PropTypes.bool,
  hasShadow: PropTypes.bool,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      Icon: PropTypes.element.isRequired,
    })
  ),
};

export default BottomNav;
