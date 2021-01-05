import { StyleSheet } from 'react-native';
import {
  COMMON_TEXT_STYLE,
  PRIMARY_BORDER_COLOR,
  PRIMARY_DARK_BACKGROUND_COLOR,
  PRIMARY_COLOR,
  PRIMARY_PALE_COLOR,
} from '../../common/GlobalStyles';
import { ModalProps } from 'react-native-modal';

export const ICON_SIZE = 25;

export const addTodoStyles = StyleSheet.create({
  scrollView: {
    transform: [{ translateY: -10 }],
  },
  iconContainer: {
    borderRadius: ICON_SIZE,
    backgroundColor: PRIMARY_COLOR,
    width: ICON_SIZE * 2,
    height: ICON_SIZE * 2,
    justifyContent: 'center',
  },
});

export const modalProps: Partial<ModalProps> = {
  backdropOpacity: 0.3,
  backdropColor: 'black',
  animationIn: 'slideInUp',
  animationOut: 'slideOutDown',
  animationInTiming: 500,
  animationOutTiming: 500,
};

export const addTodoModalStyles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    margin: 0,
    justifyContent: 'flex-end',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: PRIMARY_DARK_BACKGROUND_COLOR,
    width: '100%',
    marginTop: '70%',
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  input: {
    ...COMMON_TEXT_STYLE,
    textAlign: 'right',
    paddingTop: 0,
    paddingBottom: 2,
    paddingHorizontal: 5,
    borderRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: PRIMARY_BORDER_COLOR,
    minWidth: 100,
    maxWidth: 180,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 25,
  },
  header: {
    ...COMMON_TEXT_STYLE,
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: PRIMARY_PALE_COLOR,
    paddingBottom: 5,
  },
  label: {
    ...COMMON_TEXT_STYLE,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  reminderText: {
    color: PRIMARY_COLOR,
  },
});
