import {
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import { addTodoModalStyles as styles, modalProps } from './styles';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todoList/slices/todoListSlice';
import {
  PRIMARY_PALE_COLOR,
  PRIMARY_COLOR,
} from '../../common/GlobalStyles';

type Props = {
  visible: boolean;
  close: () => void;
};

const AddTodoModal: React.FC<Props> = ({ visible, close }) => {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState<string>('');
  const textInputRef = useRef<TextInput>(null);

  const onInputChange = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setTodoName(e.nativeEvent.text);
    },
    [],
  );

  const onButtonPressed = useCallback(() => {
    textInputRef.current?.clear();
    setTodoName('');
    dispatch(addTodo({ name: todoName }));
    close();
  }, [todoName, dispatch]);

  return (
    <Modal
      {...modalProps}
      isVisible={visible}
      onBackButtonPress={close}
      style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Icon
            name="clear"
            type="material"
            color={PRIMARY_PALE_COLOR}
            size={20}
            onPress={close}
          />
          <Icon
            name="done"
            type="material"
            color={PRIMARY_COLOR}
            size={25}
            onPress={onButtonPressed}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Add Task</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            ref={textInputRef}
            onChange={onInputChange}
            value={todoName}
            style={styles.input}
          />
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(AddTodoModal);
