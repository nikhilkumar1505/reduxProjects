const intialValue = {
  list: [],
};

const TodoReducer = (state = intialValue, action) => {
  switch (action.type) {
    case "ADD_LIST": {
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    }
    case "DELETE_LIST": {
      const newlist = state.list.filter((item) => item.id !== action.id);
      return {
        ...state,
        list: newlist,
      };
    }
    case "REMOVE_LIST": {
      return {
        ...state,
        list: [],
      };
    }
    //eslint-disable-next-line
    default:
      return state;
  }
};

export default TodoReducer;
