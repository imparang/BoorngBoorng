import React, { useEffect, useState } from 'react'
import { Button, FormGroup, Input } from 'reactstrap'

const CartItem = ({ item }) => {
  const [amount, setAmount] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    setAmount([item.amount])
  }, [item.amount])

  useEffect(() => {
    setTotalPrice(item.l_price * item.amount)
  }, [item.amount, item.l_price])

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
        <Input className="cart-item-cost-amount" name="select" type="select">
          {amount.map(amount => (
            <option key={amount}>{amount}</option>
          ))}
        </Input>
        <span>
          {item.l_price
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          원
        </span>
      </div>
      <div className="cart-item-order">
        <strong className="cart-item-total-price">
          {totalPrice
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          원
        </strong>

        <Button color="primary">구매</Button>
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
