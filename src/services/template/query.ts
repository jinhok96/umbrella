import { useSuspenseQuery } from '@tanstack/react-query';

import { templateService } from '@services/template/axios';

import type { UseGetTemplateParams } from '@services/template/query.type';

/**
 * React Query 모듈
 * @param id number; 아이디
 * @returns `{ userId, id, title, completed }`
 * @jinhok96 25.05.06
 */
export function useGetTemplate(params: UseGetTemplateParams) {
  return useSuspenseQuery({
    queryKey: ['useGetTemplate', JSON.stringify(params)],
    queryFn: () => templateService.getTemplate(params),
  });
}
