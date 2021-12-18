import React from 'react'

import '../../scss/board/filter-box.scss'

const FilterTagBox = () => {
  return (
    <div className="filter-box">
      <div className="filter-box-wrapper">
        <i className="bx bx-hash"></i>
        <ul className="filter-box-list">
          <li className="filter-box-item">하이</li>
        </ul>
      </div>
      <button className="filter-box-button">
        <i className="bx bx-reset"></i>
        초기화
      </button>
    </div>
  )
}

export default FilterTagBox
