import React, { useCallback } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './duration-input-digit.module.scss';

const DurationInputDigit = ({
  fullValue,
  reverseIndex,
  cursorIndex,
  isEditing,
  onClick,
}) => {
  const isUserInput = fullValue.length >= reverseIndex + 1;
  const hasCursor = cursorIndex === fullValue.length - reverseIndex;
  const currentValue =
    fullValue.charAt(fullValue.length - (reverseIndex + 1)) || 0;
  const handleClick = useCallback(
    (event) => {
      event.stopPropagation();
      onClick(reverseIndex);
    },
    [onClick, reverseIndex]
  );
  return (
    <div
      onClick={handleClick}
      className={classnames(styles['duration-input-digit'], {
        [styles['duration-input-digit--is-user-input']]: isUserInput,
        [styles['duration-input-digit--has-cursor']]: hasCursor,
        [styles['duration-input-digit--has-cursor-before']]:
          reverseIndex === 5 && cursorIndex === 0 && fullValue.length === 6,
        [styles['duration-input-digit--is-editing']]: isEditing,
      })}
    >
      {currentValue}
    </div>
  );
};

DurationInputDigit.propTypes = {
  fullValue: PropTypes.string.isRequired,
  reverseIndex: PropTypes.number.isRequired,
  cursorIndex: PropTypes.number.isRequired,
  isEditing: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default DurationInputDigit;
