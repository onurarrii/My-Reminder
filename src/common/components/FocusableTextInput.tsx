import React, { useCallback, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native';
import { PRIMARY_BORDER_COLOR } from '../GlobalStyles';

type ComponentType = React.ForwardRefRenderFunction<TextInput, TextInputProps>;

const FocusableTextInput: ComponentType = (props, ref) => {
  const [focused, setFocused] = useState(false);

  const onFocus = useCallback(
    (arg: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(true);
      props.onFocus && props.onFocus(arg);
    },
    [],
  );
  const onBlur = useCallback(
    (arg: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(false);
      props.onBlur && props.onBlur(arg);
    },
    [],
  );

  return (
    <TextInput
      {...props}
      ref={ref}
      onFocus={onFocus}
      onBlur={onBlur}
      style={[props?.style, focused && style.focused]}
    />
  );
};

const style = StyleSheet.create({
  focused: {
    borderColor: PRIMARY_BORDER_COLOR,
  },
});

export default React.forwardRef<TextInput, TextInputProps>(FocusableTextInput);
