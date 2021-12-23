import React from 'react'
import { Container } from 'reactstrap'

import '../../scss/user/user.scss'
import UserInfo from './UserInfo'
import UserStat from './UserStat'

const Profile = () => {
  return (
    <Container
      className="my-page"
      style={{ height: '612px', marginBottom: '16px' }}
    >
      <UserInfo />
      <UserStat />
    </Container>
  )
}

export default Profile
