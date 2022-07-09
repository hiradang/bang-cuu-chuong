export const SET_CURRENT_LESSON = 'SET_CURRENT_LESSON';

export const setCurrentLesson = (currentLesson) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_LESSON,
    payload: currentLesson,
  });
};
