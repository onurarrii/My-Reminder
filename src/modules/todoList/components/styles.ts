import { StyleSheet } from 'react-native';
import { MAIN_BACKGROUND_COLOR } from '../../../common/GlobalStyles';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: MAIN_BACKGROUND_COLOR,
  },
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: 'flex-start',
  },
  todoContainer: {
    flexShrink: 1,
  },
});

export default styles;
