import React from 'react';
import {
  BottomTabBarOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import TodoList from '../modules/todoList/components/TodoList';
import AddTodoNavigatorIcon from '../modules/addTodo/AddTodoNavigatorIcon';
import RouterIcon from './NavigatorIcon';
import {
  PRIMARY_COLOR,
  PRIMARY_PALE_COLOR,
  PRIMARY_DARK_BACKGROUND_COLOR,
  PRIMARY_BORDER_COLOR,
} from '../common/GlobalStyles';

const Tab = createBottomTabNavigator();
const ROUTES = {
  TASKS: 'Tasks',
  ADD_TASK: 'Add',
  REMINDERS: 'Reminders',
};

const EmptyComponent: React.FC<void> = () => null;

const Navigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.TASKS}
      tabBarOptions={customBarStyle}>
      <Tab.Screen
        name={ROUTES.TASKS}
        component={TodoList}
        options={{
          tabBarLabel: ROUTES.TASKS,
          tabBarIcon: ({ focused }) => (
            <RouterIcon name="home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.ADD_TASK}
        component={EmptyComponent}
        options={{
          tabBarLabel: ROUTES.ADD_TASK,
          tabBarButton: () => <AddTodoNavigatorIcon />,
        }}
      />
      <Tab.Screen
        name={ROUTES.REMINDERS}
        component={EmptyComponent}
        options={{
          tabBarLabel: ROUTES.REMINDERS,
          tabBarIcon: ({ focused }) => (
            <RouterIcon name="alarm" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const customBarStyle: BottomTabBarOptions = {
  activeTintColor: PRIMARY_COLOR,
  inactiveTintColor: PRIMARY_PALE_COLOR,
  allowFontScaling: true,
  labelStyle: { fontSize: 13, paddingBottom: 5, fontWeight: 'bold' },
  tabStyle: {
    paddingTop: 0,
  },
  iconStyle: { marginTop: 5 },
  style: {
    height: 50,
    borderTopWidth: 1,
    borderTopColor: PRIMARY_BORDER_COLOR,
    backgroundColor: PRIMARY_DARK_BACKGROUND_COLOR,
  },
};

export default Navigator;
