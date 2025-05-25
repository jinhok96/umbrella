import { act, fireEvent, render, screen } from '@testing-library/react-native';

import TestNavigationContainer from '@components/test/TestNavigationContainer';
import HomeNavigation from '@navigation/HomeNavigation';
import { HOME_BOTTOM_TAB_BAR_LABEL_LIST, HOME_NAVIGATION_TEST_ID_LIST } from '@navigation/HomeNavigation.const';
import { settingStore } from '@store/settingStore/useSettingStore';

const NAVIGATION_TEST_ID_LIST = HOME_NAVIGATION_TEST_ID_LIST;
const BOTTOM_TAB_BAR_LABEL_LIST = HOME_BOTTOM_TAB_BAR_LABEL_LIST;

function Navigation() {
  return (
    <TestNavigationContainer>
      <HomeNavigation />
    </TestNavigationContainer>
  );
}

describe('HomeNavigation', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('시작 화면이 CurrentForecastScreen인지 테스트', async () => {
    render(<Navigation />);

    act(() => jest.runAllTimers());

    const currentScreen = await screen.findByTestId(NAVIGATION_TEST_ID_LIST.CurrentForecast);
    expect(currentScreen).toBeOnTheScreen();
  });

  test('CurrentForecast 버튼을 누르면 CurrentForecastScreen으로 이동하는지 테스트', async () => {
    const { lang } = settingStore.getState();
    const buttonText = BOTTOM_TAB_BAR_LABEL_LIST.CurrentForecast[lang];

    render(<Navigation />);

    const button = await screen.findByRole('button', { name: buttonText });
    fireEvent.press(button);

    act(() => jest.runAllTimers());

    const currentScreen = await screen.findByTestId(NAVIGATION_TEST_ID_LIST.CurrentForecast);
    expect(currentScreen).toBeOnTheScreen();
  });

  test('HourlyForecast 버튼을 누르면 HourlyForecastScreen으로 이동하는지 테스트', async () => {
    const { lang } = settingStore.getState();
    const buttonText = BOTTOM_TAB_BAR_LABEL_LIST.HourlyForecast[lang];

    render(<Navigation />);

    const button = await screen.findByRole('button', { name: buttonText });
    fireEvent.press(button);

    act(() => jest.runAllTimers());

    const currentScreen = await screen.findByTestId(NAVIGATION_TEST_ID_LIST.HourlyForecast);
    expect(currentScreen).toBeOnTheScreen();
  });

  test('DailyForecast 버튼을 누르면 DailyForecastScreen으로 이동하는지 테스트', async () => {
    const { lang } = settingStore.getState();
    const buttonText = BOTTOM_TAB_BAR_LABEL_LIST.DailyForecast[lang];

    render(<Navigation />);

    const button = await screen.findByRole('button', { name: buttonText });
    fireEvent.press(button);

    act(() => jest.runAllTimers());

    const currentScreen = await screen.findByTestId(NAVIGATION_TEST_ID_LIST.DailyForecast);
    expect(currentScreen).toBeOnTheScreen();
  });
});
