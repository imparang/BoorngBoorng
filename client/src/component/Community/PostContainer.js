import React, { useState } from 'react'
import Post from './Post'

import '../../scss/board/post-container.scss'
import { Button } from 'reactstrap'
import PaginationContainer from './PaginationContainer'

const PostContainer = () => {
  const [posts, setPosts] = useState([
    {
      id: '20211208ORDER000001',
      title: '제목12131313',
      content: '내용 입니다.',
      view_count: 34,
      write_password: '12345',
      insert_user: '관리자',
      insert_date: '2021-12-08 20:41:34'
    },
    {
      id: '20211211ORDER000136',
      title: '성실한 제목',
      content: '성실한 내용',
      view_count: 23,
      write_password: '1234',
      insert_user: '작성자',
      insert_date: '2021-12-11 17:10:17'
    },
    {
      id: '20211211ORDER000137',
      title: '성실한 제목1',
      content: '내용 가득4',
      view_count: 22,
      write_password: '1234',
      insert_user: '작성자',
      insert_date: '2021-12-11 17:11:52'
    },
    {
      id: '20211211ORDER000138',
      title: '성실한 제목1',
      content: '내용 가득3',
      view_count: 7,
      write_password: '1234',
      insert_user: '작성자',
      insert_date: '2021-12-11 23:31:36'
    },
    {
      id: '20211212ORDER000139',
      title: '성실한 제목9',
      content: '내용 가득2',
      view_count: 6,
      write_password: '1234',
      insert_user: '작성자',
      insert_date: '2021-12-12 12:22:47'
    },
    {
      id: '20211216ORDER000141',
      title: '성실한 제목1',
      content: '내용 가득',
      view_count: 2,
      write_password: '1234',
      insert_user: '작성자',
      insert_date: '2021-12-16 22:46:21'
    },
    {
      id: '20211217ORDER000142',
      title: '성실한 제목1',
      content: '내용 가득',
      view_count: 4,
      write_password: '1234',
      insert_user: '작성자',
      insert_date: '2021-12-17 15:08:33'
    },
    {
      id: '20211217ORDER000143',
      title: 'test',
      content: '내용 가득',
      view_count: 3,
      write_password: '1234',
      insert_user: '작성자21',
      insert_date: '2021-12-17 15:09:44'
    },
    {
      id: '20211217ORDER000144',
      title: 'test33',
      content: '내용 가득',
      view_count: 13,
      write_password: '',
      insert_user: '작성자213',
      insert_date: '2021-12-17 15:10:06'
    },
    {
      id: '20211217ORDER000146',
      title: '성실한 제목1',
      content: '내용 가득',
      view_count: 2,
      write_password: '1234',
      insert_user: '작성자',
      insert_date: '2021-12-17 15:11:16'
    },
    {
      id: '20211217ORDER000148',
      title: '성실한 제목2',
      content: '내용 가득',
      view_count: 5,
      write_password: '1234',
      insert_user: '작성자',
      insert_date: '2021-12-17 15:22:51'
    },
    {
      id: '20211217ORDER000151',
      title: '',
      content: '내용 가득',
      view_count: 0,
      write_password: '1234',
      insert_user: '작성자',
      insert_date: '2021-12-17 16:01:36'
    },
    {
      id: '20211217ORDER000152',
      title: 'ㅓㅗㅗㅗㅗ',
      content: '내용 가득',
      view_count: 0,
      write_password: '1234',
      insert_user: '작성자',
      insert_date: '2021-12-17 16:01:50'
    }
  ])
  console.log('postconainer')
  return (
    <section className="post-list">
      <h3 className="visually-hidden">커뮤니티 포스트 목록</h3>
      {posts.length
        ? posts.map(post => <Post key={post.id} post={post} />)
        : '게시글이 없습니다.'}
      <Button className="add-button" color="primary">
        글쓰기
      </Button>
      <PaginationContainer />
    </section>
  )
}

export default PostContainer
