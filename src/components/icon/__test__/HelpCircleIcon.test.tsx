import { render, screen } from '@testing-library/react-native';

import HelpCircleIcon from '@components/icon/HelpCircleIcon';
import { colorThemeVarList } from '@libs/utils/themes.util';
import { settingStore } from '@store/settingStore/useSettingStore';

import type { ColorVar } from '@libs/utils/themes.type';

const TEST_ID = 'testId';

describe('HelpCircleIcon', () => {
  const { theme } = settingStore.getState();

  test('color 기본값이 gray-90인지 테스트', async () => {
    const colorVar: ColorVar = '--color-gray-90';
    render(<HelpCircleIcon testID={TEST_ID} />);

    const element = await screen.findByTestId(TEST_ID);
    expect(element.props.color).toBe(colorThemeVarList[theme][colorVar]);
  });

  test('color가 잘 전달되는지 테스트', async () => {
    const colorVar: ColorVar = '--color-test';
    render(
      <HelpCircleIcon
        testID={TEST_ID}
        color="--color-test"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element.props.color).toBe(colorThemeVarList[theme][colorVar]);
  });

  test('clicked=true일 때 color 기본값이 gray-90인지 테스트', async () => {
    const colorVar: ColorVar = '--color-gray-90';
    render(
      <HelpCircleIcon
        testID={TEST_ID}
        clicked
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element.props.color).toBe(colorThemeVarList[theme][colorVar]);
  });

  test('clicked=true일 때 color가 잘 전달되는지 테스트', async () => {
    const colorVar: ColorVar = '--color-test';
    render(
      <HelpCircleIcon
        testID={TEST_ID}
        color="--color-test"
        clicked
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element.props.color).toBe(colorThemeVarList[theme][colorVar]);
  });
});
