import React, { useState } from 'react'

import '../../scss/board/filter-box.scss'

const FilterTagBox = () => {
  const [tags, setTags] = useState([])
  console.log('FilterTagBox')
  return (
    <div className="filter-box">
      <div className="filter-box-wrapper">
        <i className="bx bx-hash"></i>
        {tags.length ? (
          <ul className="filter-box-list">
            <li className="filter-box-item">
              <button>
                공지
                <i className="bx bx-x"></i>
              </button>
            </li>
            <li className="filter-box-item">
              <button>
                내용
                <i className="bx bx-x"></i>
              </button>
            </li>
            <li className="filter-box-item">
              <button>
                심심
                <i className="bx bx-x"></i>
              </button>
            </li>
          </ul>
        ) : (
          <span className="filterbox-placeholder">필터링 태그</span>
        )}
      </div>
      <button className="filter-box-button">
        <i className="bx bx-reset"></i>
        리셋
      </button>
    </div>
  )
}

export default FilterTagBox
