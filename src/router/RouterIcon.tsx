import React from 'react';
import { Icon } from 'react-native-elements';
import {
  MAIN_ELEMENT_COLOR,
  INACTIVE_ROUTER_ELEMENT_COLOR,
} from '../common/GlobalStyles';

type Props = {
  name: string;
  focused: boolean;
};

const RouterIcon: React.FC<Props> = ({ name, focused }) => {
  return (
    <Icon
      name={name}
      type="material"
      color={
        focused ? MAIN_ELEMENT_COLOR : INACTIVE_ROUTER_ELEMENT_COLOR
      }
    />
  );
};

export default React.memo(RouterIcon);
