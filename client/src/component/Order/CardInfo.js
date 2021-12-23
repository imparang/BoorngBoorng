import React, { useCallback, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
import { ORDER_COMPLETED_REQUEST, ORDER_REQUEST } from '../../redux/types'
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

const CardInfo = ({ cartId, data, product, userId }) => {
  const dispatch = useDispatch()
  const { totalPrice } = useSelector(state => state.cart)

  const [card, setCard] = useState('')

  const nameRef = useRef(null)
  const cardFirstRef = useRef(null)
  const cardSecondRef = useRef(null)
  const cardThirdRef = useRef(null)
  const cardFourthRef = useRef(null)
  const cardMonthRef = useRef(null)
  const cardYearRef = useRef(null)

  const validation = useCallback(() => {
    if (!nameRef.current.value) {
      nameRef.current.focus()
      return false
    } else if (!cardFirstRef.current.value) {
      cardFirstRef.current.focus()
      return false
    } else if (!cardSecondRef.current.value) {
      cardSecondRef.current.focus()
      return false
    } else if (!cardThirdRef.current.value) {
      cardThirdRef.current.focus()
      return false
    } else if (!cardFourthRef.current.value) {
      cardFourthRef.current.focus()
      return false
    } else if (!cardMonthRef.current.value) {
      cardMonthRef.current.focus()
      return false
    } else if (!cardYearRef.current.value) {
      cardYearRef.current.focus()
      return false
    } else {
      return true
    }
  }, [])

  // TODO 주문 완료 창 한 번 뜨게하자
  const onSubmit = useCallback(
    async e => {
      e.preventDefault()
      console.log(123)
      if (validation()) {
        await dispatch({
          type: ORDER_REQUEST,
          data: {
            ...data,
            cart_id: cartId,
            cart_dv: card,
            card_user: nameRef.current.value,
            card_number1: cardFirstRef.current.value,
            card_number2: cardSecondRef.current.value,
            card_number3: cardThirdRef.current.value,
            card_number4: cardFourthRef.current.value,
            card_month: cardMonthRef.current.value,
            card_year: cardYearRef.current.value,
            user_id: userId,
            total_price: totalPrice,
            complete_yn: 'Y'
          }
        })
        completed()
      }
    },
    [
      data,
      card,
      cartId,
      nameRef,
      cardFourthRef,
      cardFirstRef,
      cardSecondRef,
      cardThirdRef,
      cardMonthRef,
      cardYearRef,
      totalPrice
    ]
  )

  const handleOnChange = useCallback(e => {
    const value = e.target.value
    setCard(value)
  }, [])

  const completed = useCallback(() => {
    Swal.fire({
      title: '정말 주문하시겠습니까?',
      text: '주문 후, 반품/환불이 가능합니다.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '주문'
    })
      .then(() =>
        dispatch({
          type: ORDER_COMPLETED_REQUEST,
          data: {
            cart_id: cartId,
            user_id: userId,
            complete_yn: 'Y',
            product_id: product.product_id
          }
        })
      )
      .then(result => {
        if (result.isConfirmed) {
          Swal.fire('주문이 완료되었습니다.', 'success')
        }
        window.location.href = '/'
      })
  }, [])

  return (
    <Card>
      <CardHeader style={{ fontSize: '16px', fontWeight: '700' }}>
        결제
      </CardHeader>
      <CardBody>
        <Form onSubmit={onSubmit}>
          <FormGroup row>
            <Label for="select" sm={2}>
              카드 선택
            </Label>
            <Col sm={10}>
              <Input
                id="select"
                name="select"
                type="select"
                onChange={handleOnChange}
              >
                <option value="kb">KB 나라사랑카드</option>
                <option value="kakao">카카오 뱅크 카드</option>
                <option value="woori">우리 V 카드</option>
                <option value="hyundae">현대 M 카드</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="name" sm={2}>
              성함
            </Label>
            <Col sm={10}>
              <Input
                id="name"
                name="name"
                placeholder="카드 소유자명을 입력해주세요"
                type="text"
                innerRef={nameRef}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="card" sm={2}>
              카드
            </Label>
            <Col sm={10} style={{ display: 'flex', gap: '4px' }}>
              <Input
                id="card"
                name="card"
                type="text"
                minLength={4}
                maxLength={4}
                innerRef={cardFirstRef}
              />
              ㅡ
              <Input
                name="card"
                type="text"
                minLength={4}
                maxLength={4}
                innerRef={cardSecondRef}
              />
              ㅡ
              <Input
                name="card"
                type="text"
                minLength={4}
                maxLength={4}
                innerRef={cardThirdRef}
              />
              ㅡ
              <Input
                name="card"
                type="text"
                minLength={4}
                maxLength={4}
                innerRef={cardFourthRef}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="date" sm={2}>
              Month/Year
            </Label>
            <Col sm={10} style={{ display: 'flex', gap: '20px' }}>
              <Input
                id="month"
                name="month"
                type="text"
                style={{ marginBottom: '10px' }}
                innerRef={cardMonthRef}
              />
              <Input
                id="year"
                name="year"
                type="text"
                style={{ marginBottom: '10px' }}
                innerRef={cardYearRef}
              />
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
      <CardFooter>
        <Button color="primary" block={true} onClick={onSubmit}>
          결제
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardInfo
