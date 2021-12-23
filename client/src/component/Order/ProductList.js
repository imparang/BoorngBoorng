import React, { useMemo } from 'react'
import { Card, CardBody, CardFooter, CardHeader, Table } from 'reactstrap'

const ProductList = ({ product }) => {
  const totalPrice = useMemo(() => {
    return product.l_price * product.product_count
  }, [product])
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
              <td style={{ color: '#000' }}>{product.brand}</td>
              <td style={{ color: '#000' }}>{product.product_count}</td>
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
