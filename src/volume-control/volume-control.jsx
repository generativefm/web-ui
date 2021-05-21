import React, { useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { VolumeUp, VolumeOff } from '@material-ui/icons';
import IconButton from '../icon-button/icon-button';
import styles from './volume-control.module.scss';

const VolumeControl = ({ value, onChange, onMuteToggle }) => {
  const ref = useRef(null);
  const isPointerDownRef = useRef(false);
  const isMouseOverRef = useRef(false);

  const setValueFromXPosition = useCallback(
    (xPosition) => {
      if (!ref.current) {
        return;
      }

      const { x, width } = ref.current.getBoundingClientRect();
      const xPercent = Math.min(Math.max((xPosition - x) / width, 0), 1);
      onChange(xPercent);
    },
    [onChange]
  );

  const handlePointerDown = useCallback(
    (event) => {
      if (!ref.current) {
        return;
      }
      isPointerDownRef.current = true;
      ref.current.setPointerCapture(event.pointerId);
      setValueFromXPosition(event.clientX);
    },
    [setValueFromXPosition]
  );

  const handlePointerMove = useCallback(
    (event) => {
      if (!ref.current || !isPointerDownRef.current) {
        return;
      }
      setValueFromXPosition(event.clientX);
    },
    [setValueFromXPosition]
  );

  const handlePointerUp = useCallback(
    (event) => {
      if (!ref.current) {
        return;
      }
      isPointerDownRef.current = false;
      setValueFromXPosition(event.clientX);
    },
    [setValueFromXPosition]
  );

  const handleMouseEnter = useCallback(() => {
    isMouseOverRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isMouseOverRef.current = false;
  }, []);

  useEffect(() => {
    const handleWheel = (event) => {
      if (!isMouseOverRef.current) {
        return;
      }
      event.preventDefault();
      let gainDelta;
      if (event.deltaY < 0 || event.deltaX < 0) {
        gainDelta = 0.05;
      } else if (event.deltaY > 0 || event.deltaX > 0) {
        gainDelta = -0.05;
      }
      const adjustedGain = Math.min(Math.max(value + gainDelta, 0), 1);
      onChange(adjustedGain);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel, { passive: false });
    };
  }, [value, onChange]);

  return (
    <div className={styles['volume-slider']}>
      <div
        className={styles.slider}
        ref={ref}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles['slider__rail']}></div>
        <div
          className={styles['slider__fill']}
          style={{ width: `${value * 100}%` }}
        ></div>
        <button
          className={styles['slider__cap']}
          style={{ left: `${value * 100}%` }}
        ></button>
      </div>
      <IconButton
        onClick={onMuteToggle}
        title={value === 0 ? 'Unmute' : 'Mute'}
      >
        {value === 0 ? <VolumeOff /> : <VolumeUp />}
      </IconButton>
    </div>
  );
};

VolumeControl.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onMuteToggle: PropTypes.func.isRequired,
};

export default VolumeControl;
