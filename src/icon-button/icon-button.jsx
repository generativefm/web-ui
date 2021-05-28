import React, { useState, useCallback } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './icon-button.module.scss';

const IconButton = (props) => {
  const {
    children,
    onClick,
    withBackground = false,
    isDisabled = false,
    isActive = false,
    isTicking = false,
    isFloating = false,
    isSecondary = false,
    isTouched = false,
    title,
    href,
    isNewTabLink = true,
  } = props;
  const [hasBeenTouched, setHasBeenTouched] = useState(isTouched);

  const handleTouchStart = useCallback(() => {
    setHasBeenTouched(true);
  }, []);

  const className = classnames(styles['icon-button'], {
    [styles['icon-button--has-background']]: withBackground,
    [styles['icon-button--is-disabled']]: isDisabled,
    [styles['icon-button--is-active']]: !isDisabled && isActive,
    [styles['icon-button--is-ticking']]: !isDisabled && isActive && isTicking,
    [styles['icon-button--is-floating']]: isFloating,
    [styles['icon-button--is-not-touched']]: !hasBeenTouched,
    [styles['icon-button--is-secondary']]: isSecondary,
  });

  if (typeof href === 'string') {
    return (
      <a
        href={href}
        className={className}
        onTouchStart={handleTouchStart}
        data-cy={props['data-cy']}
        title={title}
        {...(isNewTabLink
          ? {
              target: '_blank',
              rel: 'noreferrer noopener',
            }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      onTouchStart={handleTouchStart}
      data-cy={props['data-cy']}
      title={title}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  withBackground: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
  isTicking: PropTypes.bool,
  isFloating: PropTypes.bool,
  isSecondary: PropTypes.bool,
  isTouched: PropTypes.bool,
  title: PropTypes.string,
  href: PropTypes.string,
  isNewTabLink: PropTypes.string,
};

export default IconButton;
