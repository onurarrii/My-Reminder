import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import {
  getSelectWithId,
  removeTodo,
} from '../../todoList/slices/todoListSlice';
import CustomAnimation from '../../../common/components/animation';
import styles from './styles';
import {
  MAIN_DARK_BACKGROUND_COLOR,
  MAIN_ELEMENT_COLOR,
} from '../../../common/GlobalStyles';
import { Icon } from 'react-native-elements';

export interface ITodoProps {
  id: string;
}

const Todo: FunctionComponent<ITodoProps> = (props) => {
  const dispatch = useDispatch();
  const { id } = props;
  const [checked, setChecked] = useState(false);

  const selector = useMemo(() => getSelectWithId(id), [id]);
  const todo = useSelector(selector);

  const removeOnPress = useCallback(() => {
    dispatch(removeTodo(todo));
  }, [dispatch, todo]);

  return (
    <TouchableHighlight
      onLongPress={removeOnPress}
      underlayColor={MAIN_DARK_BACKGROUND_COLOR}>
      <View style={styles.container}>
        <CustomAnimation.FadeInView duration={500}>
          <TouchableOpacity
            style={[
              styles.iconContainer,
              checked && styles.checkedIconContainer,
            ]}
            onPress={() => setChecked((prev) => !prev)}>
            <CustomAnimation.SpringView
              initialSpringPosition="left"
              defaultConfig={{ friction: 10 }}>
              <Icon
                name="check"
                type="material"
                color={checked ? 'white' : MAIN_ELEMENT_COLOR}
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

              <Text style={styles.description}>
                {checked
                  ? 'Completed!'
                  : `${Math.floor(Math.random() * 10)} Reminders`}
              </Text>
            </CustomAnimation.SpringView>
          </CustomAnimation.FadeInView>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default React.memo(Todo);
