import axios from 'axios';

export const getTodos = async () => {
    const url = 'http://5a2ee9510e07b70012083ac2.mockapi.io/todo';

    const todos = await axios.get(url);
    console.log('---------------------------');
    console.log(todos.data);
    return todos.data;
};

export default {
    getTodos
};