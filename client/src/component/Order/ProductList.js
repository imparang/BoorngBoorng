import React, { useMemo } from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
  Table,
  UncontrolledTooltip
} from 'reactstrap'

const ProductList = ({ product, amount }) => {
  const totalPrice = useMemo(() => {
    if (amount > product.product_count) {
      return product.l_price * product.product_count
    } else {
      return product.l_price * amount
    }
  }, [product.l_price, product.product_count, amount])

  const amountStyle = useMemo(() => {
    if (amount > product.product_count) {
      return { color: '#dc3545', fontSize: '14px', fontWeight: '700' }
    } else {
      return { color: '#000', fontSize: '14px' }
    }
  }, [])
  return (
    <Row style={{ marginBottom: '20px' }}>
      <Col>
        <Card>
          <CardHeader style={{ fontSize: '16px', fontWeight: '700' }}>
            상품 목록
          </CardHeader>
          <CardBody>
            <Table>
              <thead>
                <tr>
                  <th>이미지</th>
                  <th>상품명</th>
                  <th>브랜드명</th>
                  <th>상품수</th>
                  <th>상품가격</th>
                </tr>
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
                    <div id="Tooltip">
                      {amount > product.product_count
                        ? product.product_count
                        : amount}
                    </div>
                    {amount > product.product_count && (
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
            {totalPrice
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            원
          </CardFooter>
        </Card>
      </Col>
    </Row>
  )
}

export default ProductList
