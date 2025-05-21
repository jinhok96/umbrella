import { render, screen } from '@testing-library/react-native';

import PretendardText from '@components/text/PretendardText';

describe('FontText', () => {
  test('children이 정상적으로 렌더링되는지 테스트', async () => {
    const testChildren = 'Test Children';

    render(<PretendardText>{testChildren}</PretendardText>);

    const children = await screen.findByText(testChildren);
    expect(children).toBeOnTheScreen();
  });

  test('className, weight가 정상적으로 적용되는지 테스트', async () => {
    const testChildren = 'Test Children';
    const className = 'text-xl';
    const weight = 'semibold';

    render(
      <PretendardText
        className={className}
        weight={weight}
      >
        {testChildren}
      </PretendardText>,
    );

    const children = await screen.findByText(testChildren);
    expect(children).toBeOnTheScreen();

    const classNameAttribute: string = children.props.className;
    expect(classNameAttribute.includes(className)).toBe(true);
    expect(classNameAttribute.includes(`font-pretendard-${weight}`)).toBe(true);
  });
});
