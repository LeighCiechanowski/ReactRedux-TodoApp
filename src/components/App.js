import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import GetTodos from '../containers/GetTodos'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <GetTodos />
  </div>
)

export default App