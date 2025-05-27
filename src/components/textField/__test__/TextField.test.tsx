import { useState } from 'react';

import { fireEvent, render, screen } from '@testing-library/react-native';

import TextField from '@components/textField/TextField';

import type { TextFieldProps } from '@components/textField/TextField.type';

const INPUT_TEST_ID = 'testId';
const CONTAINER_TEST_ID = `${INPUT_TEST_ID}_container`;

function TestTextField(props: Partial<TextFieldProps>) {
  const [value, onChangeText] = useState('');

  return (
    <TextField
      {...props}
      testID={INPUT_TEST_ID}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

describe('TextField', () => {
  test('입력값이 변경되는지 테스트', async () => {
    render(<TestTextField />);

    const inputElement = await screen.findByTestId(INPUT_TEST_ID);
    expect(inputElement.props.value).toBe('');

    const changeText = 'testText';
    fireEvent.changeText(inputElement, changeText);
    expect(inputElement.props.value).toBe(changeText);
  });

  test('focus=true일 때 border 색이 border-morning, false일 때 border-background-01인지 테스트', async () => {
    render(<TestTextField />);

    const inputElement = await screen.findByTestId(INPUT_TEST_ID);
    const containerElement = await screen.findByTestId(CONTAINER_TEST_ID);

    expect(containerElement.props.className.includes('border-morning')).toBe(false);
    expect(containerElement.props.className.includes('border-background-01')).toBe(true);

    fireEvent(inputElement, 'focus');
    expect(containerElement.props.className.includes('border-morning')).toBe(true);
    expect(containerElement.props.className.includes('border-background-01')).toBe(false);

    fireEvent(inputElement, 'blur');
    expect(containerElement.props.className.includes('border-morning')).toBe(false);
    expect(containerElement.props.className.includes('border-background-01')).toBe(true);
  });

  test('isError일 때 border 색이 border-error인지 테스트', async () => {
    render(<TestTextField isError />);

    const inputElement = await screen.findByTestId(INPUT_TEST_ID);
    const containerElement = await screen.findByTestId(CONTAINER_TEST_ID);

    expect(containerElement.props.className.includes('border-error')).toBe(true);
    expect(containerElement.props.className.includes('border-morning')).toBe(false);
    expect(containerElement.props.className.includes('border-background-01')).toBe(false);

    fireEvent(inputElement, 'focus');
    expect(containerElement.props.className.includes('border-error')).toBe(true);
    expect(containerElement.props.className.includes('border-morning')).toBe(false);
    expect(containerElement.props.className.includes('border-background-01')).toBe(false);

    fireEvent(inputElement, 'blur');
    expect(containerElement.props.className.includes('border-error')).toBe(true);
    expect(containerElement.props.className.includes('border-morning')).toBe(false);
    expect(containerElement.props.className.includes('border-background-01')).toBe(false);
  });
});
