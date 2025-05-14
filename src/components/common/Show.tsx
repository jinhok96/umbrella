import type { PropsWithChildren, ReactNode } from 'react';

type ShowProps = PropsWithChildren<{ when: boolean; fallback?: ReactNode }>;

/**
 * 조건부 렌더링을 선언적으로 처리하는 컴포넌트
 * @param children 렌더링할 요소
 * @param when 렌더링 조건
 * @param fallback when=false일 경우 렌더링할 요소
 * @jinhok96 25.05.14
 */
export default function Show({ children, when, fallback }: ShowProps) {
  if (when) return <>{children}</>;
  if (fallback) return <>{fallback}</>;
  return null;
}
