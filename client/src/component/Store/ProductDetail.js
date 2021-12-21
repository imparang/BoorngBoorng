import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, FormGroup, Input, Label } from 'reactstrap'

import '../../scss/store/detail.scss'

const ProductDetail = props => {
  const location = useLocation()
  const { product } = location.state
  const navigate = useNavigate()
  const [count, setCount] = useState(1)
  const onChange = e => {
    if (e.target.value <= product.product_count) setCount(e.target.value)
  }
  return (
    <div className="wrap">
      <div className="inner">
        <div className="product-info">
          <img className="photo" src={product.image} alt="제품 사진" />

          <div className="product-details">
            <h2
              className="title"
              dangerouslySetInnerHTML={{
                __html: product.maker
                  ? `[${product.maker}] ${product.title}`
                  : product.title
              }}
            ></h2>
            <strong className="price">
              {product.l_price
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
              원
            </strong>
            <p className="pay">부가가치세 별도, 배송료 별도</p>

            <div className="shipping">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
              </svg>
              <p>당일 출고!</p>
            </div>

            <p className="kacbae">
              <strong className="strong">13:00시</strong> 이내 주문 완료 시,
              오늘 출고됩니다.
            </p>

            <FormGroup
              style={{
                border: '1px solid #ced4da',
                borderRadius: '0.25rem',
                padding: '2% 4%',
                width: '100%'
              }}
            >
              <Label for="count">상품 개수 선택</Label>
              <Input
                id="count"
                name="count"
                type="number"
                value={count}
                onChange={onChange}
                min={1}
              />
              <Button color="primary" onClick={() => navigate('/order')}>
                구매하기
              </Button>
              {product.product_count ? (
                <p className="soldout">
                  <span className="fontsize">매진 여부</span>: 재고 있음
                  <strong>{product.product_count}개</strong>
                </p>
              ) : (
                <p className="soldout">
                  <span className="fontsize">매진 여부</span>: 재고 없음
                </p>
              )}
            </FormGroup>

            {product.maker && (
              <>
                <h5 className="description">제조사</h5>
                <p className="content">{product.maker}</p>
              </>
            )}

            <p className="tags">
              <strong className="fontsize">
                대분류: <span>{product.category1}</span>
              </strong>
              <strong className="fontsize">
                중분류: <span>{product.category2}</span>
              </strong>

              <strong className="fontsize">
                소분류1: <span> {product.category3}</span>
              </strong>
              <strong className="fontsize">
                소분류2: <span> {product.category4}</span>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
