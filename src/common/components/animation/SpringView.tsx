import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

type SpringPosition = 'left' | 'right' | 'top' | 'bottom';

const DEFAULT = {
  initialSpringPosition: 'left' as SpringPosition,
  springRange: 1000,
};

type Props = {
  defaultConfig?: Partial<Animated.SpringAnimationConfig>;
  initialSpringPosition?: SpringPosition;
  springRange?: number;
};

const calculateInitialViewPosition = (
  initialSpringPosition: SpringPosition,
  springRange: number,
) => {
  switch (initialSpringPosition) {
    case 'left':
      return { x: -springRange, y: 0 };
    case 'right':
      return { x: springRange, y: 0 };
    case 'top':
      return { x: 0, y: springRange };
    case 'bottom':
      return { x: 0, y: -springRange };
  }
};

const SpringView: React.FunctionComponent<Props> = (props) => {
  const {
    initialSpringPosition = DEFAULT.initialSpringPosition,
    springRange = DEFAULT.springRange,
  } = props;

  const initialPosition = calculateInitialViewPosition(
    initialSpringPosition,
    springRange,
  );

  const { current: pan } = useRef(new Animated.ValueXY(initialPosition));

  useEffect(() => {
    Animated.spring(pan, {
      ...props.defaultConfig,
      useNativeDriver: true,
      toValue: { x: 0, y: 0 },
    }).start();
  }, [pan]);

  return (
    <Animated.View
      style={{ transform: [{ translateX: pan.x }, { translateY: pan.y }] }}>
      {props.children}
    </Animated.View>
  );
};

export default SpringView;
