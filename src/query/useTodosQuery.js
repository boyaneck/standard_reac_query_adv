import { useMutation } from "react-query";
import { addTodo, removeTodo, switchTodo } from "../api/todos";

//api에서 실행한 return 값 mutate 객체를 반환
// export const addMutation = () => useMutation(addTodo);
// export const removeMutation = () => useMutation(removeTodo);
// export const switchMutation = () => useMutation(switchTodo);

export const useAddMutation = () => useMutation(addTodo);
export const useRemoveMutation = () => useMutation(removeTodo);
export const useSwitchMutation = () => useMutation(switchTodo);
