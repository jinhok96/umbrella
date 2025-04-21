/**
 * API 타입 저장
 * @jinhok96 25.04.21
 */

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodoList = Todo[];

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type PhotoList = Photo[];
