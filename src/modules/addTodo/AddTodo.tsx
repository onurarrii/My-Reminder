import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  EmitterSubscription,
  Keyboard,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { addTodoStyles as styles, ICON_SIZE } from './styles';
import AddTodoModal from './AddTodoModal';

const AddTodo: FunctionComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = useCallback(() => setModalVisible(false), []);

  return (
    <View style={styles.scrollView}>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon
          name="plus"
          type="font-awesome"
          color="white"
          size={ICON_SIZE}
          onPress={() => setModalVisible(true)}
        />
      </TouchableOpacity>
      <AddTodoModal visible={modalVisible} close={closeModal} />
    </View>
  );
};

export default AddTodo;
