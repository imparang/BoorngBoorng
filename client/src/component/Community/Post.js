import React from 'react'

const Post = ({ post }) => {
  return (
    <article className="post-item">
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
    </article>
  )
}

export default Post
