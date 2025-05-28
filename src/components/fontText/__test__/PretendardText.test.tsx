import { render, screen } from '@testing-library/react-native';

import PretendardText from '@components/fontText/PretendardText';

describe('FontText', () => {
  test('children, className, typo가 정상적으로 렌더링되는지 테스트', async () => {
    const testChildren = 'Test Children';
    const className = 'text-test';
    const typo = 'body-1';
    const weight = 'regular';

    render(
      <PretendardText
        className={className}
        typo={typo}
      >
        {testChildren}
      </PretendardText>,
    );

    const children = await screen.findByText(testChildren);
    expect(children).toBeOnTheScreen();

    const classNameAttribute: string = children.props.className;
    expect(classNameAttribute.includes(className)).toBe(true);
    expect(classNameAttribute.includes(`font-pretendard-${weight}`)).toBe(true);
    expect(classNameAttribute.includes(`text-pretendard-${typo}`)).toBe(true);
  });
});
