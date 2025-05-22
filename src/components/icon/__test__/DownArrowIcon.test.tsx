import { render, screen } from '@testing-library/react-native';

import DownArrowIcon from '@components/icon/DownArrowIcon';
import { colorThemeVarList } from '@libs/utils/themes.util';
import { settingStore } from '@store/settingStore/useSettingStore';

import type { ColorVar } from '@libs/utils/themes.type';

const TEST_ID = 'testId';

describe('DownArrowIcon', () => {
  const { theme } = settingStore.getState();

  test('color 기본값이 gray-90인지 테스트', async () => {
    const colorVar: ColorVar = '--color-gray-90';
    render(<DownArrowIcon testID={TEST_ID} />);

    const element = await screen.findByTestId(TEST_ID);
    expect(element.props.color).toBe(colorThemeVarList[theme][colorVar]);
  });

  test('color가 잘 전달되는지 테스트', async () => {
    const colorVar: ColorVar = '--color-test';
    render(
      <DownArrowIcon
        testID={TEST_ID}
        color="--color-test"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element.props.color).toBe(colorThemeVarList[theme][colorVar]);
  });
});
