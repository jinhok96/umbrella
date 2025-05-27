import type { PressableProps } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import LeftArrowIcon from '@components/icon/LeftArrowIcon';
import StyledHeaderButton from '@navigation/components/styledHeader/StyledHeaderButton';

/**
 * 상단 헤더 뒤로가기 버튼
 * @jinhok96 25.05.26
 */
export function StyledHeaderBackButton({ ...props }: PressableProps) {
  const { goBack } = useNavigation();

  const handleGoBackButtonPress = () => goBack();

  return (
    <StyledHeaderButton
      {...props}
      testID="styled-header-back-button"
      onPress={handleGoBackButtonPress}
    >
      <LeftArrowIcon />
    </StyledHeaderButton>
  );
}
