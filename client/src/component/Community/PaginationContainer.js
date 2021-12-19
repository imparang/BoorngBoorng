import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationContainer = () => {
  return (
    <Pagination aria-label="Page navigation " size="sm">
      <PaginationItem>
        <PaginationLink first href="/board" style={{ marginLeft: 0 }} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/board" previous />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/board">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/board">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/board">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/board">4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/board">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/board" next />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/board" last />
      </PaginationItem>
    </Pagination>
  )
}

export default PaginationContainer
