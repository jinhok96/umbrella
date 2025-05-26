import type { PressableProps } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import LeftArrowIcon from '@components/icon/LeftArrowIcon';
import StyledHeaderButton from '@navigation/components/styledHeader/StyledHeaderButton';

export function StyledHeaderBackButton({ ...props }: PressableProps) {
  const { goBack } = useNavigation();

  const handleGoBackButtonPress = () => goBack();

  return (
    <StyledHeaderButton
      {...props}
      onPress={handleGoBackButtonPress}
    >
      <LeftArrowIcon />
    </StyledHeaderButton>
  );
}
