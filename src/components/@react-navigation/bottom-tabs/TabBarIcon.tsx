import React from 'react';
import { StyleSheet, View, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';

import Badge from '@components/@react-navigation/bottom-tabs/Badge';

import type { Route } from '@react-navigation/native';

type Props = {
  route: Route<string>;
  variant: 'uikit' | 'material';
  size: 'compact' | 'regular';
  badge?: string | number;
  badgeStyle?: StyleProp<TextStyle>;
  activeTintColor: string;
  inactiveTintColor: string;
  renderIcon: (props: { focused: boolean; color: string; size: number }) => React.ReactNode;
  allowFontScaling?: boolean;
  style: StyleProp<ViewStyle>;
  focused: boolean;
};

/**
 * Icon sizes taken from Apple HIG
 * https://developer.apple.com/design/human-interface-guidelines/tab-bars
 */
// const ICON_SIZE_WIDE = 31;
// const ICON_SIZE_WIDE_COMPACT = 23;
// const ICON_SIZE_TALL = 28;
// const ICON_SIZE_TALL_COMPACT = 20;
const ICON_SIZE_ROUND = 25;
const ICON_SIZE_ROUND_COMPACT = 18;
const ICON_SIZE_MATERIAL = 24;

/**
 * `@react-navigation/bottom-tabs`의 `TabBarIcon` 컴포넌트
 *
 * 테스트 코드 작성 X
 * @jinhok96 25.05.26
 */
export default function TabBarIcon({
  route: _,
  variant,
  size,
  badge,
  badgeStyle,
  activeTintColor,
  inactiveTintColor,
  renderIcon,
  allowFontScaling,
  style,
  focused,
}: Props) {
  const iconSize =
    variant === 'material' ? ICON_SIZE_MATERIAL : size === 'compact' ? ICON_SIZE_ROUND_COMPACT : ICON_SIZE_ROUND;

  // We render the icon twice at the same position on top of each other:
  // active and inactive one, so we can fade between them.
  return (
    <View
      className="size-full"
      style={[
        variant === 'material'
          ? styles.wrapperMaterial
          : size === 'compact'
            ? styles.wrapperUikitCompact
            : styles.wrapperUikit,
        style,
      ]}
    >
      <View
        className="size-full"
        style={[
          styles.icon,
          {
            // Workaround for react-native >= 0.54 layout bug
            minWidth: iconSize,
          },
        ]}
      >
        {renderIcon({
          focused,
          size: iconSize,
          color: focused ? activeTintColor : inactiveTintColor,
        })}
      </View>
      <Badge
        visible={badge != null}
        size={iconSize * 0.75}
        allowFontScaling={allowFontScaling}
        style={[styles.badge, badgeStyle]}
      >
        {badge}
      </Badge>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    // position: 'absolute',
    // alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: '100%',
    // width: '100%',
  },
  wrapperUikit: {
    // width: ICON_SIZE_WIDE,
    // height: ICON_SIZE_TALL,
  },
  wrapperUikitCompact: {
    // width: ICON_SIZE_WIDE_COMPACT,
    // height: ICON_SIZE_TALL_COMPACT,
  },
  wrapperMaterial: {
    // width: ICON_SIZE_MATERIAL,
    // height: ICON_SIZE_MATERIAL,
  },
  badge: {
    position: 'absolute',
    end: -3,
    top: -3,
  },
});
