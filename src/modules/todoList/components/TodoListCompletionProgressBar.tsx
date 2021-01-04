import React from 'react';
import { useSelector } from 'react-redux';
import { getCompletionRatio } from '../slices/todoListSlice';
import * as Progress from 'react-native-progress';
import styles from './styles';
import { View } from 'react-native';
import {
  PRIMARY_COLOR,
  PRIMARY_DARK_BACKGROUND_COLOR,
} from '../../../common/GlobalStyles';

const TodoListCompletionProgressBar = () => {
  const completionRatio = useSelector(getCompletionRatio);
  return (
    <View style={styles.progressBarContainer}>
      <Progress.Bar
        progress={completionRatio}
        color={PRIMARY_COLOR}
        unfilledColor={PRIMARY_DARK_BACKGROUND_COLOR}
        width={null}
        height={14}
        animationType="spring"
        borderColor={PRIMARY_DARK_BACKGROUND_COLOR}
        borderWidth={0}
        borderRadius={10}
      />
    </View>
  );
};

export default TodoListCompletionProgressBar;
