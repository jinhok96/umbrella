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

export function TestQueryClientProvider({ children, fallback, ...props }: ErrorBoundaryProps & SuspenseProps) {
  return (
    <QueryClientProvider client={testQueryClient}>
      <ErrorBoundary {...props}>
        <Suspense fallback={fallback}>{children}</Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
