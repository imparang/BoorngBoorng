import React, { useEffect, useState } from 'react'
import { Button, FormGroup, Input, Label } from 'reactstrap'

const CartItem = ({ item }) => {
  const [amount, setAmount] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    for (let i = 0; i < item.amount; i++) {
      setAmount([...amount, i])
    }
  }, [])

  useEffect(() => {
    setTotalPrice(item.l_price * item.amount)
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
        <Input className="cart-item-cost-amount" name="select" type="select">
          {amount.map(amount => (
            <option key={amount + 1}>{amount + 1}</option>
          ))}
        </Input>
        <span>{item.l_price}원</span>
      </div>
      <div className="cart-item-order">
        <strong className="cart-item-total-price">{totalPrice}원</strong>

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
