import type { SuspenseProps } from 'react';
import { Suspense } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { ErrorBoundaryProps } from 'react-native-error-boundary';
import ErrorBoundary from 'react-native-error-boundary';

export const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      gcTime: Infinity,
    },
  },
});

export function TestQueryClientProvider({
  children,
  fallback,
  name,
  FallbackComponent = () => null,
  ...props
}: Partial<ErrorBoundaryProps> & SuspenseProps) {
  return (
    <QueryClientProvider client={testQueryClient}>
      <ErrorBoundary
        {...props}
        FallbackComponent={FallbackComponent}
      >
        <Suspense
          fallback={fallback}
          name={name}
        >
          {children}
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
