import React from 'react';
import FullTopBar from './full-top-bar';
import MiniTopBar from './mini-top-bar';
import useIsNarrowScreen from '../use-is-narrow-screen';

const TopBar = (props) => {
  const isNarrowScreen = useIsNarrowScreen();
  const TopBarComponent = isNarrowScreen ? MiniTopBar : FullTopBar;
  return <TopBarComponent {...props} />;
};

export default TopBar;
