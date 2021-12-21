import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, Table } from 'reactstrap'

const ProductList = () => {
  return (
    <Card>
      <CardHeader>상품 목록</CardHeader>
      <CardBody>
        <Table>
          <tbody>
            <tr>
              <th scope="row">이미지</th>
              <td>상품명</td>
              <td>제조사</td>
              <td>상품수</td>
              <td>가격</td>
            </tr>
            <tr>
              <th scope="row">이미지</th>
              <td>상품명</td>
              <td>제조사</td>
              <td>상품수</td>
              <td>가격</td>
            </tr>
            <tr>
              <th scope="row">이미지</th>
              <td>상품명</td>
              <td>제조사</td>
              <td>상품수</td>
              <td>가격</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
      <CardFooter>총 결제 금액</CardFooter>
    </Card>
  )
}

export default ProductList
