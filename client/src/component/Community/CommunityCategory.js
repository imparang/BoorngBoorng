import React from 'react'
import { NavLink } from 'react-router-dom'

import '../../scss/board/board.scss'

const CommunityCategory = () => {
  console.log('CommunityCategory')
  return (
    <div className="community-category">
      <ul className="community-category-list">
        <li className="community-category-item">
          <NavLink to="/board">자유주제</NavLink>
        </li>
        <li className="community-category-item">
          <NavLink to="/board/notice">공지사항</NavLink>
        </li>
        <li className="community-category-item">
          <NavLink to="/board/qna">질의응답</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default CommunityCategory
