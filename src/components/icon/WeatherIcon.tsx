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

import type { WeatherIcon } from '@services/openWeatherOneCall/axios.type';

type WeatherIconProps = {
  icon: WeatherIcon;
};

export default function WeatherIcon({ icon }: WeatherIconProps) {
  return (
    <>
      <Show when={icon === '01d'}>
        <ClearSkySvg />
      </Show>
      <Show when={icon === '01n'}>
        <ClearSkySvg />
      </Show>
      <Show when={icon === '02d'}>
        <FewCloudsSvg />
      </Show>
      <Show when={icon === '02n'}>
        <FewCloudsSvg />
      </Show>
      <Show when={icon === '03d' || icon === '03n'}>
        <ScatteredCloudsSvg />
      </Show>
      <Show when={icon === '04d' || icon === '04n'}>
        <BrokenCloudsSvg />
      </Show>
      <Show when={icon === '09d' || icon === '09n'}>
        <ShowerRainSvg />
      </Show>
      <Show when={icon === '10d'}>
        <RainSvg />
      </Show>
      <Show when={icon === '10n'}>
        <RainSvg />
      </Show>
      <Show when={icon === '11d' || icon === '11n'}>
        <ThunderstormSvg />
      </Show>
      <Show when={icon === '13d' || icon === '13n'}>
        <SnowSvg />
      </Show>
      <Show when={icon === '50d' || icon === '50n'}>
        <MistSvg />
      </Show>
    </>
  );
}
