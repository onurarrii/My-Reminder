import React from 'react';
import {
  BottomTabBarOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import TodoList from '../modules/todoList/components/TodoList';
import AddTodo from '../modules/addTodo/AddTodo';
import RouterIcon from './RouterIcon';
import {
  MAIN_ELEMENT_COLOR,
  INACTIVE_ROUTER_ELEMENT_COLOR,
  MAIN_DARK_BACKGROUND_COLOR,
  DEFAULT_BORDER_COLOR,
} from '../common/GlobalStyles';

const Tab = createBottomTabNavigator();
const ROUTES = {
  TASKS: 'Tasks',
  ADD_TASK: 'Add',
  REMINDERS: 'Reminders',
};

const EmptyComponent: React.FC<void> = () => null;

const Router = () => {
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
          tabBarButton: () => <AddTodo />,
        }}
      />
      <Tab.Screen
        name={ROUTES.REMINDERS}
        component={TodoList}
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
  activeTintColor: MAIN_ELEMENT_COLOR,
  inactiveTintColor: INACTIVE_ROUTER_ELEMENT_COLOR,
  allowFontScaling: true,
  labelStyle: { fontSize: 13, paddingBottom: 5, fontWeight: 'bold' },
  tabStyle: {
    paddingTop: 0,
  },
  iconStyle: { marginTop: 5 },
  style: {
    height: 50,
    borderTopWidth: 1,
    borderTopColor: DEFAULT_BORDER_COLOR,
    backgroundColor: MAIN_DARK_BACKGROUND_COLOR,
  },
};

export default Router;
