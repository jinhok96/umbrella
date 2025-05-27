import { render, screen } from '@testing-library/react-native';

import FontText from '@components/fontText/FontText';

describe('FontText', () => {
  test('children, className, font, typo가 정상적으로 렌더링되는지 테스트', async () => {
    const testChildren = 'Test Children';
    const className = 'text-xl';
    const font = 'pretendard';
    const typo = 'body-1';
    const weight = 'regular';

    render(
      <FontText
        className={className}
        font={font}
        typo={typo}
      >
        {testChildren}
      </FontText>,
    );

    const children = await screen.findByText(testChildren);
    expect(children).toBeOnTheScreen();

    const classNameAttribute: string = children.props.className;
    expect(classNameAttribute.includes(className)).toBe(true);
    expect(classNameAttribute.includes(`font-${font}-${weight}`)).toBe(true);
    expect(classNameAttribute.includes(`text-${font}-${typo}`)).toBe(true);
  });
});
