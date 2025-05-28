import { useNavigation } from '@react-navigation/native';

import LeftArrowIcon from '@components/icon/LeftArrowIcon';
import StyledHeaderButton from '@navigation/components/styledHeader/StyledHeaderButton';

import type { PressableHitSlopProps } from '@components/common/PressableHitSlop.type';

/**
 * 상단 헤더 뒤로가기 버튼
 * @jinhok96 25.05.28
 */
export function StyledHeaderBackButton({ ...props }: PressableHitSlopProps) {
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
