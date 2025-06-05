import StyledHeader from '@navigation/_components/styledHeader/StyledHeader';
import { StyledHeaderBackButton } from '@navigation/_components/styledHeader/StyledHeaderBackButton';
import StyledHeaderButton from '@navigation/_components/styledHeader/StyledHeaderButton';
import StyledHeaderTitle from '@navigation/_components/styledHeader/StyledHeaderTitle';

import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

/**
 * 공통 상단 헤더 컴포넌트
 * @jinhok96 25.05.26
 */
export default function GlobalStackHeader({ options }: NativeStackHeaderProps) {
  return (
    <StyledHeader>
      <StyledHeaderBackButton />
      <StyledHeaderTitle>{options.title || ''}</StyledHeaderTitle>
      <StyledHeaderButton />
    </StyledHeader>
  );
}
