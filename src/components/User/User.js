import React from 'react'
import { Route, Link } from 'react-router-dom'

const Users = () => (
  <div>
    <Link to='/user/1'>User 1</Link>
    <Link to='/user/2'>User 2</Link>
    <Link to='/user/3'>User 3</Link>
  </div>
)

const ViewUser = ({ match }) => (
  <div>User {match.params.id}</div>
)

const User = ({ match }) => {
  return (
    <div>
      <Route exact path={match.path} component={Users} />
      <Route path={`${match.path}/:id`} component={ViewUser} />
    </div>
  )
}

export default User
