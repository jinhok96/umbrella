import { PropsWithChildren, useEffect } from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { useGetCurrentAndForecastsWeatherData } from '@services/openWeatherOneCall/query';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export default function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const { data } = useGetCurrentAndForecastsWeatherData({ lat: 33.44, lon: -94.04 });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});
