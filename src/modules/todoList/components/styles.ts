import { StyleSheet } from 'react-native';
import { PRIMARY_BACKGROUND_COLOR } from '../../../common/GlobalStyles';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: PRIMARY_BACKGROUND_COLOR,
  },
  container: {
    paddingBottom: 30,
    justifyContent: 'flex-start',
  },
  todoContainer: {
    flexShrink: 1,
  },
  progressBarContainer: {
    backgroundColor: PRIMARY_BACKGROUND_COLOR,
    width: '100%',
    padding: 20,
  },
});

export default styles;
