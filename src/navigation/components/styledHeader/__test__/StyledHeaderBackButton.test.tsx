import { useNavigation } from '@react-navigation/native';
import { fireEvent, render, screen } from '@testing-library/react-native';

import { StyledHeaderBackButton } from '@navigation/components/styledHeader/StyledHeaderBackButton';

jest.mock('@react-navigation/native');

describe('StyledHeaderBackButton', () => {
  const goBackMock = jest.fn();

  beforeEach(() => {
    (useNavigation as jest.Mock).mockReturnValue({
      goBack: goBackMock,
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('handleGoBackButtonPress', async () => {
    render(<StyledHeaderBackButton />);

    const button = await screen.findByTestId('styled-header-back-button');
    fireEvent.press(button);

    expect(goBackMock).toHaveBeenCalledTimes(1);
  });
});
