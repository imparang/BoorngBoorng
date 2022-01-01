import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, FormGroup, Input } from 'reactstrap'

const CartItem = ({ item, userId }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [amount, setAmount] = useState(item.amount)

  const handleOnChange = useCallback(e => {
    const value = e.target.value
    setAmount(Number(value))
  }, [])

  useEffect(() => {
    setTotalPrice(item.l_price * amount)
  }, [amount, item.l_price])

  const regx = useMemo(value => {
    return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  }, [])

  return (
    <article className="cart-item">
      <div className="cart-item-info">
        <img src={item.image} alt={item.title} />
        <h4
          dangerouslySetInnerHTML={{
            __html: item.maker ? `[${item.maker}] ${item.title}` : item.title
          }}
        ></h4>
      </div>
      <div className="cart-item-cost">
        <Input
          className="cart-item-cost-amount"
          name="select"
          type="select"
          onChange={handleOnChange}
        >
          {Array.from(item.amount).map((amount, i) => (
            <option key={item.amount - i} value={item.amount - i}>
              {item.amount - i}
            </option>
          ))}
        </Input>
        <span>{regx(item.l_price)}원</span>
      </div>
      <div className="cart-item-order">
        <strong className="cart-item-total-price">{regx(totalPrice)}원</strong>

        <Button color="primary">
          <Link
            to="/order"
            state={{ product: item, amount }}
            style={{ margin: 0, color: '#fff', fontSize: '14px' }}
          >
            상품구매
          </Link>
        </Button>
      </div>
      <div className="remove-cart">
        <i className="bx bx-x"></i>
      </div>
      <FormGroup check className="check-box">
        <Input id="exampleCheck" name="check" type="checkbox" />
      </FormGroup>
    </article>
  )
}

export default CartItem
