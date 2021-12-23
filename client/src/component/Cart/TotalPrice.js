import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import { CART_TOTALPRICE_REQUEST } from '../../redux/types'

const TotalPrice = ({ cartId, length }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { TotalPrice } = useSelector(state => state.cart)

  useEffect(() => {
    dispatch({
      type: CART_TOTALPRICE_REQUEST,
      data: {
        user_id: 'test1234@test.com',
        cart_id: cartId
      }
    })
  }, [])

  return (
    <>
      <section className="cart-price">
        {Number(TotalPrice) > 0 ? (
          <>
            <div className="cart-price-count">
              총 상품의 개수 <span>{length}개</span>
            </div>
            <div className="cart-price-total">
              <span>총 상품 금액</span>
              <strong>
                {TotalPrice.toString().replace(
                  /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                  ','
                )}
                원
              </strong>
            </div>
          </>
        ) : (
          <div className="cart-price-total">
            <strong>장바구니가 비어있습니다.</strong>
          </div>
        )}
      </section>
      <Button
        color="primary"
        block={true}
        onClick={() => navigate('/order')}
        disabled
      >
        상품 구매하기
      </Button>
      <div style={{ userSelect: 'none' }}>
        [ ] 체크 기능을 추가로 만들어서 구현할 예정
      </div>
    </>
  )
}

export default TotalPrice
