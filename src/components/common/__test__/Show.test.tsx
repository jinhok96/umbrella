import { act, render, screen } from '@testing-library/react';

import Show from '@components/common/Show';

describe('Show', () => {
  test('children을 정상적으로 렌더링하는지 테스트', () => {
    const childrenText = 'Test Children';

    act(() => {
      render(<Show when={true}>{childrenText}</Show>);
    });

    expect(screen.queryByText(childrenText)?.textContent).toBe(childrenText);
  });

  test('fallback을 정상적으로 렌더링하는지 테스트', () => {
    const childrenText = 'Test Children';
    const fallbackText = 'Test Fallback';

    act(() => {
      render(
        <Show when={false} fallback={<div>{fallbackText}</div>}>
          {childrenText}
        </Show>,
      );
    });

    expect(screen.queryByText(fallbackText)?.textContent).toBe(fallbackText);
    expect(screen.queryByText(childrenText)?.textContent).not.toBe(childrenText);
  });
});
