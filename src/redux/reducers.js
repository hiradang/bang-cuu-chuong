import { SET_CURRENT_LESSON } from './actions';

const initialState = {
  currentLesson: 'Bảng 2',
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_LESSON:
      return { ...state, currentLesson: action.payload };
    default:
      return state;
  }
}

export default taskReducer;
