import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationContainer = ({ link, style, size }) => {
  const navigate = useNavigate()
  return (
    <Pagination aria-label="Page navigation " size={size} style={style}>
      <PaginationItem>
        <PaginationLink
          first
          onClick={() => navigate(`/${link}`)}
          style={{ marginLeft: 0 }}
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => navigate(`/${link}`)} previous />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => navigate(`/${link}`)}>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => navigate(`/${link}`)}>2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => navigate(`/${link}`)}>3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => navigate(`/${link}`)}>4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => navigate(`/${link}`)}>5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => navigate(`/${link}`)} next />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink onClick={() => navigate(`/${link}`)} last />
      </PaginationItem>
    </Pagination>
  )
}

export default PaginationContainer
