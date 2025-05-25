import React from 'react';

import { render, screen } from '@testing-library/react-native';

import StyledBottomTabBarLabel from '@navigation/components/StyledBottomTabBarLabel';
import { settingStore } from '@store/settingStore/useSettingStore';

import type { LocalizedText } from '@libs/utils/localize/localize.type';

const LABEL: LocalizedText = {
  ko: '테스트',
  en: 'Test',
};

const LABEL_CLASS_NAME = {
  focused: 'text-morning',
  unfocused: 'text-gray-50',
};

describe('StyledBottomTabBarLabel', () => {
  test('focused=true일 때 text, className이 정상적으로 렌더링되는지 테스트', async () => {
    const { lang } = settingStore.getState();

    render(
      <StyledBottomTabBarLabel
        text={LABEL}
        focused={true}
      />,
    );

    const element = await screen.findByText(LABEL[lang]);
    expect(element.props.className.includes(LABEL_CLASS_NAME.focused)).toBe(true);
  });

  test('focused=false일 때 text, className이 정상적으로 렌더링되는지 테스트', async () => {
    const { lang } = settingStore.getState();

    render(
      <StyledBottomTabBarLabel
        text={LABEL}
        focused={false}
      />,
    );

    const element = await screen.findByText(LABEL[lang]);
    expect(element).toBeOnTheScreen();
    expect(element.props.className.includes(LABEL_CLASS_NAME.unfocused)).toBe(true);
  });
});
