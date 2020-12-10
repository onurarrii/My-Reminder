import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const DEFAULT = {
  duration: 1000,
};

type Props = {
  defaultConfig?: Partial<Animated.TimingAnimationConfig>;
  duration?: number;
};

const FadeInView: React.FunctionComponent<Props> = (props) => {
  const { current: fadeAnimation } = useRef(new Animated.Value(0));
  const { duration = DEFAULT.duration, defaultConfig } = props;

  useEffect(() => {
    Animated.timing(fadeAnimation, {
      ...defaultConfig,
      useNativeDriver: false,
      toValue: 1,
      duration,
    }).start();
  }, [fadeAnimation]);

  return (
    <Animated.View style={{ opacity: fadeAnimation }}>
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
