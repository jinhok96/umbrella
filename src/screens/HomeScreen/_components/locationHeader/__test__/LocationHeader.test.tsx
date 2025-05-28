import { Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fireEvent, render, screen } from '@testing-library/react-native';

import TestNavigationContainer from '@components/testComponent/TestNavigationContainer';
import LocationHeader from '@screens/HomeScreen/_components/locationHeader/LocationHeader';
import { LocationNamePlaceholder } from '@screens/HomeScreen/_components/locationHeader/LocationHeader.const';
import { locationStore } from '@store/locationStore/useLocationStore';
import { INIT_LOCATION_STORE_STATE } from '@store/locationStore/useLocationStore.const';
import { settingStore } from '@store/settingStore/useSettingStore';

import type { Location } from '@store/locationStore/useLocationStore.type';

const Stack = createNativeStackNavigator();

const TEST_CHIlDREN = 'Test Children';

function TestComponent() {
  return <Text>{TEST_CHIlDREN}</Text>;
}

describe('LocationHeader', () => {
  beforeEach(() => {
    locationStore.setState(INIT_LOCATION_STORE_STATE);
  });

  test('currentLocation.name이 렌더링되는지 테스트', async () => {
    expect(locationStore.getState()).toMatchObject(INIT_LOCATION_STORE_STATE);

    const testLocation: Location = {
      name: 'testName',
      id: 'testId',
      address: {
        en: 'test',
        ko: '테스트',
      },
      lat: 0,
      lon: 0,
    };
    const { setCurrentLocation } = locationStore.getState();
    setCurrentLocation(testLocation);

    render(
      <TestNavigationContainer>
        <LocationHeader />
      </TestNavigationContainer>,
    );

    const { currentLocation } = locationStore.getState();
    if (!currentLocation) throw new Error('currentLocation is null');

    const element = await screen.findByText(currentLocation.name);
    expect(element).toBeOnTheScreen();
  });

  test('currentLocation이 없을 때 플레이스홀더가 렌더링되는지 테스트', async () => {
    expect(locationStore.getState().currentLocation).toBeNull();

    render(
      <TestNavigationContainer>
        <LocationHeader />
      </TestNavigationContainer>,
    );

    const { lang } = settingStore.getState();
    const element = await screen.findByText(LocationNamePlaceholder[lang]);
    expect(element).toBeOnTheScreen();
  });

  test('handleLocationScreenButtonPress 테스트', async () => {
    render(
      <TestNavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={LocationHeader}
          />
          <Stack.Screen
            name="Location"
            component={TestComponent}
          />
        </Stack.Navigator>
      </TestNavigationContainer>,
    );

    const button = await screen.findByTestId('navigate-location-screen-button');
    fireEvent.press(button);

    const element = await screen.findByText(TEST_CHIlDREN);
    expect(element).toBeOnTheScreen();
  });

  test('handleSettingScreenButtonPress 테스트', async () => {
    render(
      <TestNavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={LocationHeader}
          />
          <Stack.Screen
            name="Setting"
            component={TestComponent}
          />
        </Stack.Navigator>
      </TestNavigationContainer>,
    );

    const button = await screen.findByTestId('navigate-setting-screen-button');
    fireEvent.press(button);

    const element = await screen.findByText(TEST_CHIlDREN);
    expect(element).toBeOnTheScreen();
  });
});
