export const addTodo = (data, mod) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getSeconds(),
      mod: Number(mod) * 60,
      data: data,
      status: "active",
    },
  };
};
export const deleteTodo = (data) => {
  return {
    type: "DELETE_TODO",
    data: data,
  };
};
export const updateTodo = (x) => {
  return {
    type: "UPDATE_TODO",
    x: x,
  };
};
