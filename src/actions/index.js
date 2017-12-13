import getTodos from '../services/todoService';
let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

// export const loadTodos = async (dispatch) => {
//   try {
//     //dispatch(discoveryArchiveArticleRequest());
//     const article = await getTodos();
//     //dispatch(discoveryArchiveArticleSuccess(article));
// } catch (error) {
//    // dispatch(discoveryArchiveArticleError(error.response.data));
// }
// }

export function loadTodos(url) {
  return (dispatch) => {
      dispatch(addTodo('woo'));
      fetch('http://5a2ee9510e07b70012083ac2.mockapi.io/todo')
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }
              dispatch(addTodo('false'));
              console.log(response.json());
              return response;
          })
          .then((response) => response.json())
          .then((items) => dispatch(addTodo('items')))
          .catch(() => dispatch(addTodo('true')));
  };
}