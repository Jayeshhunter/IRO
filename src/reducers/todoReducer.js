const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, mod, data, status } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            mod: mod,
            data: data + String(state.list.length),
            status: status,
          },
        ],
      };
    case "DELETE_TODO":
      // const { data } = action.payload;
      const newList = state.list.map((elem) => {
        var temp = Object.assign({}, elem);
        if (elem.data === action.data) {
          temp.status = "Cancelled";
        }
        return temp;
      });
      return {
        ...state,
        list: newList,
      };
    case "UPDATE_TODO":
      const upList = state.list.map((elem) => {
        var temp = Object.assign({}, elem);
        if (elem.data === action.data) {
          temp.status = "Failed";
        }
        return temp;
      });
      return {
        ...state,
        list: upList,
      };
    default:
      return state;
  }
};
export default todoReducers;
