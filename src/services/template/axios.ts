import HttpClient from '@services/httpClient/httpClient';

import type { Photo, PhotoList, Todo, TodoList } from '@services/template/type';

/**
 * 이 파일에서 사용할 Axios 인스턴스
 * baseURL 필수, config 선택
 * @jinhok96 25.04.21
 */
const axiosInstance = new HttpClient('https://jsonplaceholder.typicode.com');

/**
 * API 메서드 객체
 * @jinhok96 25.04.21
 */
export const jsonPlaceholderService = {
  getTodoList: async () => {
    const response = await axiosInstance.get<TodoList>('/todos');
    return response;
  },
  getTodo: async (id: number) => {
    const response = await axiosInstance.get<Todo>(`/todos/${id}`);
    return response;
  },
  getPhotoList: async () => {
    const response = await axiosInstance.get<PhotoList>('/photos');
    return response;
  },
  getPhoto: async (id: number) => {
    const response = await axiosInstance.get<Photo>(`/photos/${id}`);
    return response;
  },
};
