import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { CART_SAVE_REQUEST } from '../../redux/types'

import '../../scss/store/product.scss'

const Product = ({ product, cartId, userId }) => {
  const dispatch = useDispatch()
  const cartSave = useCallback(() => {
    if (cartId && userId) {
      dispatch({
        type: CART_SAVE_REQUEST,
        data: {
          cart_id: cartId,
          product_id: product.product_id,
          user_id: userId
        }
      })
    } else {
      window.location.href = '/login'
    }
  }, [])

  return (
    <section className="product">
      <Link
        to={`/store/product/${product.product_id}`}
        state={{ product, userId, cartId }}
      >
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
        <h4
          className="product-title"
          dangerouslySetInnerHTML={{
            __html: product.brand
              ? `[${product.brand}] ${product.title}`
              : product.title
          }}
        ></h4>
        <div className="product-cash">
          <strong className="product-price">
            {product.l_price
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            원
          </strong>
          <span className="product-count">
            재고 : {product.product_count}개
          </span>
        </div>
        <div className="product-info">
          <span className="product-info-category">
            {`${product.category1 && product.category1} / ${
              product.category2 && product.category2
            } / ${product.category3 && product.category3} /
          ${product.category4 && product.category4}`}
          </span>
          <span className="product-info-date">
            {product.update_date
              ? product.update_date.slice(0, 16)
              : product.insert_date.slice(0, 16)}
          </span>
        </div>
      </Link>
      <Button className="cart-button" outline color="danger" onClick={cartSave}>
        <i className="bx bx-cart"></i>
      </Button>
    </section>
  )
}

export default Product
