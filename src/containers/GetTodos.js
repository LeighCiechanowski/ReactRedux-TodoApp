import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import GetTodos from '../components/GetTodos'
import { loadTodos } from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(loadTodos())
    }
  }
}

const GetTodosLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetTodos)

export default GetTodosLink