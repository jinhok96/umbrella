import type { PropsWithChildren, SuspenseProps } from 'react';
import { Suspense } from 'react';

import type { ErrorBoundaryProps } from 'react-native-error-boundary';
import ErrorBoundary from 'react-native-error-boundary';

type ErrorBoundaryCustomProps = {
  errorFallback?: ErrorBoundaryProps['FallbackComponent'];
  onError?: ErrorBoundaryProps['onError'];
};

type SuspenseCustomProps = {
  loadingFallback?: SuspenseProps['fallback'];
};

type AsyncBoundaryProps = PropsWithChildren<ErrorBoundaryCustomProps & SuspenseCustomProps>;

/**
 * ErrorBoundary와 Suspense를 한 번에 처리하는 컴포넌트
 * @param children 에러 또는 로딩 상태가 발생하는 컴포넌트
 * @param errorFallback 에러 발생 시 렌더링할 컴포넌트
 * @param loadingFallback 로딩 중 렌더링할 컴포넌트
 * @param onError 에러 발생 시 콜백
 * @jinhok96 25.05.13
 */
export default function AsyncBoundary({ children, errorFallback, loadingFallback, onError }: AsyncBoundaryProps) {
  return (
    <ErrorBoundary
      FallbackComponent={errorFallback}
      onError={onError}
    >
      <Suspense fallback={loadingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}
