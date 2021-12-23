import React, { useCallback, useMemo, useState } from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Table,
  UncontrolledTooltip
} from 'reactstrap'

const ProductList = ({ product }) => {
  const totalPrice = useMemo(() => {
    return product.l_price * product.product_count
  }, [product])

  const amountStyle = useMemo(() => {
    if (product.amount > product.product_count) {
      return { color: '#dc3545', fontSize: '14px', fontWeight: '700' }
    } else {
      return { color: '#000', fontSize: '14px' }
    }
  }, [])
  return (
    <Card>
      <CardHeader style={{ fontSize: '16px', fontWeight: '700' }}>
        상품 목록
      </CardHeader>
      <CardBody>
        <Table>
          <thead>
            <th>이미지</th>
            <th>상품명</th>
            <th>브랜드명</th>
            <th>상품수</th>
            <th>상품가격</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '0.25rem'
                  }}
                />
              </td>
              <td
                style={{ fontSize: '14px', color: '#000' }}
              >{`[${product.brand}] ${product.title}`}</td>
              <td style={{ color: '#000', fontSize: '14px' }}>
                {product.brand}
              </td>
              <td style={amountStyle}>
                <div id="Tooltip">{product.product_count}</div>
                {product.amount > product.product_count && (
                  <UncontrolledTooltip target="Tooltip" placement="bottom">
                    재고가 {product.product_count}개 밖에 없습니다.
                  </UncontrolledTooltip>
                )}
              </td>
              <td>
                {product.l_price
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                원
              </td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
      <CardFooter style={{ fontSize: '18px', fontWeight: '700' }}>
        총 결제 금액:{' '}
        {totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
        원
      </CardFooter>
    </Card>
  )
}

export default ProductList
