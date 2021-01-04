import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import {
  getSelectWithId,
  removeTodo,
  updateTodo,
} from '../../todoList/slices/todoListSlice';
import CustomAnimation from '../../../common/components/animation';
import styles from './styles';
import {
  PRIMARY_COLOR,
  PRIMARY_DARK_BACKGROUND_COLOR,
} from '../../../common/GlobalStyles';
import { Icon } from 'react-native-elements';
import { formatDate, getTimeDifferenceText } from '../../../common/utils';

export interface ITodoProps {
  id: string;
}

const Todo: FunctionComponent<ITodoProps> = (props) => {
  const dispatch = useDispatch();
  const { id } = props;
  const selector = useMemo(() => getSelectWithId(id), [id]);
  const todo = useSelector(selector);

  const toggleCompletedCheck = () => {
    const newTodo = { ...todo, completed: !todo.completed };
    dispatch(updateTodo(newTodo));
  };

  const removeOnPress = useCallback(() => {
    dispatch(removeTodo(todo));
  }, [dispatch, todo]);

  const descriptionText = useMemo(() => {
    if (todo.completed) {
      return 'Completed!';
    } else if (todo.reminderDateTimestamp) {
      const reminderDate = new Date(todo.reminderDateTimestamp);
      const timeDifference = getTimeDifferenceText({ endDate: reminderDate });
      return timeDifference
        ? `Reminder in ${timeDifference}`
        : `Reminder at ${formatDate(reminderDate)}`;
    } else {
      return 'No reminder';
    }
  }, [todo?.completed, todo?.reminderDateTimestamp]);

  return (
    <TouchableHighlight
      onLongPress={removeOnPress}
      underlayColor={PRIMARY_DARK_BACKGROUND_COLOR}>
      <View style={styles.container}>
        <CustomAnimation.FadeInView duration={500}>
          <TouchableOpacity
            style={[
              styles.iconContainer,
              todo?.completed && styles.checkedIconContainer,
            ]}
            onPress={toggleCompletedCheck}>
            <CustomAnimation.SpringView
              initialSpringPosition="left"
              defaultConfig={{ friction: 10 }}>
              <Icon
                name="check"
                type="material"
                color={todo?.completed ? 'white' : PRIMARY_COLOR}
                size={15}
              />
            </CustomAnimation.SpringView>
          </TouchableOpacity>
        </CustomAnimation.FadeInView>
        <View style={styles.textContainer}>
          <CustomAnimation.FadeInView>
            <CustomAnimation.SpringView
              initialSpringPosition="right"
              defaultConfig={{ friction: 8 }}>
              <Text style={styles.text}>{todo.name}</Text>
              <Text style={styles.description}>{descriptionText}</Text>
            </CustomAnimation.SpringView>
          </CustomAnimation.FadeInView>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default React.memo(Todo);
