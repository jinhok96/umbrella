import StyledHeader from '@navigation/components/styledHeader/StyledHeader';
import { StyledHeaderBackButton } from '@navigation/components/styledHeader/StyledHeaderBackButton';
import StyledHeaderButton from '@navigation/components/styledHeader/StyledHeaderButton';
import StyledHeaderTitle from '@navigation/components/styledHeader/StyledHeaderTitle';

import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

export default function GlobalStackHeader({ options }: NativeStackHeaderProps) {
  return (
    <StyledHeader>
      <StyledHeaderBackButton />
      <StyledHeaderTitle>{options.title}</StyledHeaderTitle>
      <StyledHeaderButton />
    </StyledHeader>
  );
}
