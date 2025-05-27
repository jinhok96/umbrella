import BrokenCloudsSvg from '@assets/svg/weather/WeatherBrokenClouds.svg';
import ClearSkySvg from '@assets/svg/weather/WeatherClearSky.svg';
import FewCloudsSvg from '@assets/svg/weather/WeatherFewClouds.svg';
import MistSvg from '@assets/svg/weather/WeatherMist.svg';
import RainSvg from '@assets/svg/weather/WeatherRain.svg';
import ScatteredCloudsSvg from '@assets/svg/weather/WeatherScatteredClouds.svg';
import ShowerRainSvg from '@assets/svg/weather/WeatherShowerRain.svg';
import SnowSvg from '@assets/svg/weather/WeatherSnow.svg';
import ThunderstormSvg from '@assets/svg/weather/WeatherThunderstorm.svg';
import Show from '@components/common/Show';

import type { IconProps } from '@components/icon/Icon.type';
import type { WeatherIcon } from '@services/openWeatherOneCall/axios.type';

type WeatherIconProps = Omit<
  IconProps<{
    icon: WeatherIcon;
  }>,
  'color'
>;

/**
 * 날씨 아이콘 컴포넌트
 * @param icon 날씨 아이콘 id
 * @jinhok96 25.05.22
 */
export default function WeatherIcon({ icon, ...props }: WeatherIconProps) {
  return (
    <>
      <Show when={icon === '01d'}>
        <ClearSkySvg {...props} />
      </Show>
      <Show when={icon === '01n'}>
        <ClearSkySvg {...props} />
      </Show>
      <Show when={icon === '02d'}>
        <FewCloudsSvg {...props} />
      </Show>
      <Show when={icon === '02n'}>
        <FewCloudsSvg {...props} />
      </Show>
      <Show when={icon === '03d' || icon === '03n'}>
        <ScatteredCloudsSvg {...props} />
      </Show>
      <Show when={icon === '04d' || icon === '04n'}>
        <BrokenCloudsSvg {...props} />
      </Show>
      <Show when={icon === '09d' || icon === '09n'}>
        <ShowerRainSvg {...props} />
      </Show>
      <Show when={icon === '10d'}>
        <RainSvg {...props} />
      </Show>
      <Show when={icon === '10n'}>
        <RainSvg {...props} />
      </Show>
      <Show when={icon === '11d' || icon === '11n'}>
        <ThunderstormSvg {...props} />
      </Show>
      <Show when={icon === '13d' || icon === '13n'}>
        <SnowSvg {...props} />
      </Show>
      <Show when={icon === '50d' || icon === '50n'}>
        <MistSvg {...props} />
      </Show>
    </>
  );
}
