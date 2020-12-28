import React from 'react';
import { Icon } from 'react-native-elements';
import { PRIMARY_COLOR, PRIMARY_PALE_COLOR } from '../common/GlobalStyles';

type Props = {
  name: string;
  focused: boolean;
};

const NavigatorIcon: React.FC<Props> = ({ name, focused }) => {
  return (
    <Icon
      name={name}
      type="material"
      color={focused ? PRIMARY_COLOR : PRIMARY_PALE_COLOR}
    />
  );
};

export default React.memo(NavigatorIcon);
