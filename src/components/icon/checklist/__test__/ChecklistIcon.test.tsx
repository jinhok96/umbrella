import { View } from 'react-native';

import { render, screen } from '@testing-library/react-native';

import ChecklistIcon from '@components/icon/checklist/ChecklistIcon';
import { settingStore } from '@store/settingStore/useSettingStore';
import { INIT_SETTING_STORE_STATE } from '@store/settingStore/useSettingStore.const';

const LIGHT_TEST_ID = 'lightTestId';
const DARK_TEST_ID = 'darkTestId';
const HIGH_CONTRAST_TEST_ID = 'highContrastTestId';

function LightTestComponent() {
  return <View testID={LIGHT_TEST_ID} />;
}
function DarkTestComponent() {
  return <View testID={DARK_TEST_ID} />;
}
function HighContrastTestComponent() {
  return <View testID={HIGH_CONTRAST_TEST_ID} />;
}

describe('ChecklistIcon', () => {
  afterAll(() => {
    // 모든 테스트 완료 후 스토어를 초기 상태로 리셋
    settingStore.setState(INIT_SETTING_STORE_STATE);
  });

  test('theme=light일 때 렌더링되는지 테스트', async () => {
    settingStore.setState({ theme: 'light' });

    render(
      <ChecklistIcon
        light={<LightTestComponent />}
        dark={<DarkTestComponent />}
        highContrast={<HighContrastTestComponent />}
      />,
    );

    const element = await screen.findByTestId(LIGHT_TEST_ID);
    expect(element).toBeOnTheScreen();
  });

  test('theme=dark일 때 렌더링되는지 테스트', async () => {
    settingStore.setState({ theme: 'dark' });

    render(
      <ChecklistIcon
        light={<LightTestComponent />}
        dark={<DarkTestComponent />}
        highContrast={<HighContrastTestComponent />}
      />,
    );

    const element = await screen.findByTestId(DARK_TEST_ID);
    expect(element).toBeOnTheScreen();
  });

  test('theme=highContrast일 때 렌더링되는지 테스트', async () => {
    settingStore.setState({ theme: 'highContrast' });

    render(
      <ChecklistIcon
        light={<LightTestComponent />}
        dark={<DarkTestComponent />}
        highContrast={<HighContrastTestComponent />}
      />,
    );

    const element = await screen.findByTestId(HIGH_CONTRAST_TEST_ID);
    expect(element).toBeOnTheScreen();
  });
});
