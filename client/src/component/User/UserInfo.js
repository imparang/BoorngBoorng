import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserInfo = () => {
  const [me, setMe] = useState({
    user_email: 'user@user.com',
    user_name: 'user',
    user_org: '학생',
    user_password:
      '$2b$10$UFoPa1HvVRxJHwvsuQSKDeav0oWMkfUh6wpRmTXNKhdWHYeH6Ozn2',
    user_major: '컴공',
    user_phone: '010-233-31341',
    user_confirm: 'Y',
    reg_user: 'user@user.com',
    reg_date: '2021-12-11 17:57:00'
  })
  return (
    <nav className="user-profile">
      <div className="user-wrapper">
        <strong>{me.user_name}</strong>
      </div>
      <span className="user-profile-email">{me.user_email}</span>
      <span className="user-profile-org">Org: {me.user_org}</span>
      <span className="user-profile-major">Major: {me.user_major}</span>
      <div className="user-profile-edit">
        <Link to="/user/pwd">비밀번호변경</Link>
        <Link to="/user/update">회원정보수정</Link>
      </div>
    </nav>
  )
}

export default UserInfo
