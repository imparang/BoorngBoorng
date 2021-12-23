import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <article>
      <Link
        to={`/board/${post.id}`}
        state={{ post }}
        style={{ margin: 0 }}
        className="post-item"
      >
        <div className="post-item-main">
          <h4 className="post-title">{post.title}</h4>
          <p className="post-content">{post.content}</p>
          <span className="post-date">
            {post.insert_date && post.insert_date.slice(0, 16)}
          </span>
        </div>
        <div className="post-item-sub">
          <div className="user-wrapper">
            <strong>{post.insert_user}</strong>
          </div>
          <div className="post-view">
            <i className="bx bx-show-alt"></i>
            {post.view_count}
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Post
