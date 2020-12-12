import { StyleSheet } from 'react-native';
import {
  COMMON_TEXT_STYLE,
  DEFAULT_BORDER_COLOR,
  MAIN_ELEMENT_COLOR,
} from '../../../common/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  iconContainer: {
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    borderWidth: 2,
    borderColor: MAIN_ELEMENT_COLOR,
  },
  checkedIconContainer: {
    backgroundColor: MAIN_ELEMENT_COLOR,
    borderWidth: 0, // Do not let borderColor and backgroundColor collapse
  },
  textContainer: {
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: DEFAULT_BORDER_COLOR,
    flexGrow: 1,
    paddingLeft: 30,
    paddingRight: 60,
    paddingVertical: 10,
  },
  text: {
    ...COMMON_TEXT_STYLE,
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    ...COMMON_TEXT_STYLE,
    fontSize: 13,
  },
});

export default styles;
