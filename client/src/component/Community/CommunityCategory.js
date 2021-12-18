import React from 'react'
import { Link } from 'react-router-dom'

import '../../scss/board/board.scss'

const CommunityCategory = () => {
  return (
    <div className="community-category">
      <ul className="community-category-list">
        <li className="community-category-item">
          <Link to="/board">자유주제</Link>
        </li>
        <li className="community-category-item">
          <Link to="/board">공지사항</Link>
        </li>
        <li className="community-category-item">
          <Link to="/board">질의응답</Link>
        </li>
      </ul>
    </div>
  )
}

export default CommunityCategory
