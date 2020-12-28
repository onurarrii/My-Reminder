import {
  NativeSyntheticEvent,
  Switch,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import { addTodoModalStyles as styles, modalProps } from './styles';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modal';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todoList/slices/todoListSlice';
import {
  PRIMARY_PALE_COLOR,
  PRIMARY_COLOR,
  FONT_COLOR,
} from '../../common/GlobalStyles';
import { formatDate } from '../../common/utils';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { ITodoModel } from '../todo/model/TodoModel';

type Props = {
  visible: boolean;
  close: () => void;
};

const AddTodoModal: React.FC<Props> = ({ visible, close }) => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState<ITodoModel>({
    name: '',
    reminderDateTimestamp: undefined,
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [reminderEnabled, setReminderEnabled] = useState(false);

  const onDateSelected = (date: Date) => {
    setTodo((prevTodo) => ({
      ...prevTodo,
      reminderDateTimestamp: date.getTime(),
    }));
    setShowDatePicker(false);
  };

  const removeReminderDate = () => {
    setTodo((prevTodo) => ({ ...prevTodo, reminderDateTimestamp: undefined }));
  };

  const onDateSelectionCancel = () => {
    setReminderEnabled(false);
    removeReminderDate();
    setShowDatePicker(false);
  };

  const toggleReminderEnabled = () => {
    setReminderEnabled((prev) => {
      const newValue = !prev;
      if (newValue) {
        setShowDatePicker(true);
      } else {
        removeReminderDate();
      }
      return newValue;
    });
  };

  const onNameInputChange = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const { text } = e.nativeEvent;
      setTodo((prevTodo) => ({ ...prevTodo, name: text }));
    },
    [],
  );

  const clearForm = useCallback(() => {
    setTodo({ name: '', reminderDateTimestamp: undefined });
    setReminderEnabled(false);
    setShowDatePicker(false);
  }, []);

  const onSubmit = useCallback(() => {
    clearForm();
    dispatch(addTodo(todo));
    close();
  }, [clearForm, todo, dispatch, close]);

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
            onPress={onSubmit}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Add Task</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            onChange={onNameInputChange}
            value={todo.name}
            style={styles.input}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Set Reminder</Text>
          <Switch
            trackColor={{ false: PRIMARY_PALE_COLOR, true: PRIMARY_COLOR }}
            thumbColor={FONT_COLOR}
            ios_backgroundColor={PRIMARY_PALE_COLOR}
            onValueChange={toggleReminderEnabled}
            value={reminderEnabled}
          />
        </View>
        {todo.reminderDateTimestamp && (
          <Text style={styles.label}>
            Reminder is set to{' '}
            <Text style={styles.reminderText}>
              {formatDate(new Date(todo.reminderDateTimestamp))}
            </Text>
          </Text>
        )}
      </View>
      <DateTimePickerModal
        isVisible={showDatePicker}
        isDarkModeEnabled
        mode="datetime"
        onCancel={onDateSelectionCancel}
        onConfirm={onDateSelected}
      />
    </Modal>
  );
};

export default React.memo(AddTodoModal);
