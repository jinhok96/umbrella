import { render, screen } from '@testing-library/react-native';

import WeatherIcon from '@components/icon/WeatherIcon';

const TEST_ID = 'testId';

describe('WeatherIcon', () => {
  test('icon=01d일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="01d"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
  test('icon=01n일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="01n"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });

  test('icon=02d일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="02d"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
  test('icon=02n일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="02n"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });

  test('icon=03d일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="03d"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
  test('icon=03n일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="03n"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });

  test('icon=04d일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="04d"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
  test('icon=04n일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="04n"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });

  test('icon=09d일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="09d"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
  test('icon=09n일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="09n"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });

  test('icon=10d일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="10d"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
  test('icon=10n일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="10n"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });

  test('icon=11d일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="11d"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
  test('icon=11n일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="11n"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });

  test('icon=13d일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="13d"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
  test('icon=13n일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="13n"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });

  test('icon=50d일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="50d"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
  test('icon=50n일 때 렌더링되는지 테스트', async () => {
    render(
      <WeatherIcon
        testID={TEST_ID}
        icon="50n"
      />,
    );

    const element = await screen.findByTestId(TEST_ID);
    expect(element).toBeOnTheScreen();
  });
});
