import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Post from './Post'
import { useSelector, useDispatch } from 'react-redux'

import '../../scss/board/post-container.scss'
import { Button } from 'reactstrap'
import PaginationContainer from '../PaginationContainer'
import { useNavigate } from 'react-router-dom'
import { BOARD_SELECT_REQUEST } from '../../redux/types'

const PostContainer = ({ userId }) => {
  const navigate = useNavigate()

  const { posts } = useSelector(state => state.board)
  const dispatch = useDispatch()
  const [start, setStart] = useState(0)

  useEffect(() => {
    dispatch({
      type: BOARD_SELECT_REQUEST,
      data: {
        length: 5,
        start
      }
    })
  }, [start])

  const PostList = useMemo(
    () =>
      posts?.length && posts.map(post => <Post key={post.id} post={post} />),
    [posts]
  )

  const addPost = useCallback(() => {
    if (userId) {
      navigate('/board/insert')
    } else {
      navigate('/login')
    }
  }, [])
  return (
    <section className="post-list">
      <h3 className="visually-hidden">커뮤니티 포스트 목록</h3>
      {posts?.length ? (
        <>
          {PostList}
          <Button className="add-button" color="primary" onClick={addPost}>
            글쓰기
          </Button>
          <PaginationContainer link={'board'} size="sm" />
        </>
      ) : (
        '게시글이 없습니다.'
      )}
    </section>
  )
}

export default PostContainer
