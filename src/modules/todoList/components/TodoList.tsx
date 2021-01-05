import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { selectTodoListIds } from '../slices/todoListSlice';
import Todo from '../../todo/components/Todo';
import _ from 'lodash';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import TodoListCompletionProgressBar from './TodoListCompletionProgressBar';

const TodoList: FunctionComponent = () => {
  // If id arrays are the same (shallow), no need to recompute todoIds.
  const todoIds = useSelector(selectTodoListIds, _.isEqual);
  return (
    <>
      <TodoListCompletionProgressBar />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.container}>
        {todoIds.map((id) => (
          <View key={id} style={styles.todoContainer}>
            <Todo id={id} />
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default TodoList;
