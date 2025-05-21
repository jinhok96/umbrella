import { render, screen } from '@testing-library/react-native';

import FontText from '@components/text/FontText';

describe('FontText', () => {
  test('children이 정상적으로 렌더링되는지 테스트', async () => {
    const testChildren = 'Test Children';

    render(<FontText font="pretendard">{testChildren}</FontText>);

    const children = await screen.findByText(testChildren);
    expect(children).toBeOnTheScreen();
  });

  test('className, font, weight가 정상적으로 적용되는지 테스트', async () => {
    const testChildren = 'Test Children';
    const className = 'text-xl';
    const font = 'pretendard';
    const weight = 'semibold';

    render(
      <FontText
        className={className}
        font={font}
        weight={weight}
      >
        {testChildren}
      </FontText>,
    );

    const children = await screen.findByText(testChildren);
    expect(children).toBeOnTheScreen();

    const classNameAttribute: string = children.props.className;
    expect(classNameAttribute.includes(className)).toBe(true);
    expect(classNameAttribute.includes(`font-${font}-${weight}`)).toBe(true);
  });
});
