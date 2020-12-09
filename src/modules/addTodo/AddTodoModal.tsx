import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import { addTodoModalStyles as styles } from './styles';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todoList/slices/todoListSlice';
import { MAIN_ELEMENT_COLOR } from '../../common/GlobalStyles';
import FocusableTextInput from '../../common/components/FocusableTextInput';

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
      backdropOpacity={0.7}
      backdropColor="black"
      animationOut="zoomOut"
      isVisible={visible}
      onBackButtonPress={close}
      style={styles.horizontalCentered}>
      <View style={styles.horizontalCentered}>
        <FocusableTextInput
          ref={textInputRef}
          onChange={onInputChange}
          value={todoName}
          placeholder="Add a todo"
          style={styles.text}
        />
      </View>
      <View style={styles.submitButtonContainer}>
        <Icon
          name="add-task"
          type="material"
          color="white"
          size={35}
          onPress={onButtonPressed}
          disabled={!todoName}
          disabledStyle={styles.disabledSubmitButton}
        />
      </View>
    </Modal>
  );
};

export default React.memo(AddTodoModal);
