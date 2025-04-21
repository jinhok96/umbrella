import { useQuery } from '@tanstack/react-query';

import { jsonPlaceholderService } from '@services/template/axios';

export function useGetJsonPlaceholderTodoList() {
  return useQuery({
    queryKey: ['useGetJsonPlaceholderTodoList'],
    queryFn: jsonPlaceholderService.getTodoList,
  });
}

export function useGetJsonPlaceholderTodo(id: number) {
  return useQuery({
    queryKey: ['useGetJsonPlaceholderTodo', id],
    queryFn: () => jsonPlaceholderService.getTodo(id),
  });
}

export function useGetJsonPlaceholderPhotoList() {
  return useQuery({
    queryKey: ['useGetJsonPlaceholderPhotoList'],
    queryFn: jsonPlaceholderService.getPhotoList,
  });
}

export function useGetJsonPlaceholderPhoto(id: number) {
  return useQuery({
    queryKey: ['useGetJsonPlaceholderPhoto', id],
    queryFn: () => jsonPlaceholderService.getPhoto(id),
  });
}
