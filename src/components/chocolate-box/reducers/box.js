const initialState = [];

const box = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHOCOLATE':
        return [
          ...state,
          action.name
        ];
    default:
      return state;
  }
};

export default box;