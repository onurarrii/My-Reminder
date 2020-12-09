import { StyleSheet } from 'react-native';
import {
  MAIN_DARK_BACKGROUND_COLOR,
  MAIN_ELEMENT_COLOR,
} from '../../common/GlobalStyles';

export const ICON_SIZE = 25;

export const addTodoStyles = StyleSheet.create({
  scrollView: {
    transform: [{ translateY: -10 }],
  },
  iconContainer: {
    borderRadius: 9999999,
    backgroundColor: MAIN_ELEMENT_COLOR,
    width: ICON_SIZE * 2,
    height: ICON_SIZE * 2,
    justifyContent: 'center',
  },
});

export const addTodoModalStyles = StyleSheet.create({
  horizontalCentered: { alignItems: 'center' },
  text: {
    textAlign: 'center',
    backgroundColor: MAIN_DARK_BACKGROUND_COLOR,
    color: 'white',
    borderRadius: 4,
    minWidth: '60%',
    justifyContent: 'center',
    borderWidth: 1,
    padding: 5,
  },
  submitButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: MAIN_ELEMENT_COLOR,
    justifyContent: 'center',
  },
  disabledSubmitButton: { opacity: 0.3, backgroundColor: 'transparent' },
});
