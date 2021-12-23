import React, { useCallback, useRef } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label
} from 'reactstrap'

const Delivery = () => {
  const nameRef = useRef(null)
  const phoneFirstRef = useRef(null)
  const phoneMiddleRef = useRef(null)
  const phoneLastRef = useRef(null)
  const addressRef = useRef(null)
  const detailAddressRef = useRef(null)

  const validation = useCallback(() => {
    if (!nameRef.current.value) {
      nameRef.current.focus()
      return false
    } else if (!phoneFirstRef.current.value) {
      phoneFirstRef.current.focus()
      return false
    } else if (!phoneMiddleRef.current.value) {
      phoneMiddleRef.current.focus()
      return false
    } else if (!phoneLastRef.current.value) {
      phoneLastRef.current.focus()
      return false
    } else if (!addressRef.current.value) {
      addressRef.current.focus()
      return false
    } else if (!detailAddressRef.current.value) {
      detailAddressRef.current.focus()
      return false
    } else {
      return true
    }
  }, [])

  const onSubmit = useCallback(e => {
    e.preventDefault()
    if (validation()) {
    } else {
      return
    }
  }, [])

  return (
    <Card>
      <CardHeader style={{ fontSize: '16px', fontWeight: '700' }}>
        배송지
      </CardHeader>
      <CardBody>
        <Form onSubmit={onSubmit}>
          <FormGroup row>
            <Label for="order-number" sm={2}>
              주문번호
            </Label>
            <Col sm={10}>
              <Input
                id="order-number"
                name="order-number"
                type="text"
                disabled
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="name" sm={2}>
              수취인
            </Label>
            <Col sm={10}>
              <Input
                id="name"
                name="name"
                placeholder="수취인을 입력해주세요"
                type="text"
                valid
                innerRef={nameRef}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="phone" sm={2}>
              전화번호
            </Label>
            <Col
              sm={10}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                height: '70px'
              }}
            >
              <Input
                id="phone"
                name="phone"
                placeholder="010"
                type="text"
                minLength={3}
                maxLength={3}
                invalid
                style={{ flex: 1, marginRight: '8px' }}
                innerRef={phoneFirstRef}
              />
              ㅡ
              <Input
                name="phone"
                type="text"
                placeholder="xxxx"
                minLength={3}
                maxLength={4}
                invalid
                style={{ flex: 1, margin: '0 8px' }}
                innerRef={phoneMiddleRef}
              />
              ㅡ
              <Input
                name="phone"
                type="text"
                placeholder="xxxx"
                minLength={3}
                maxLength={4}
                invalid
                style={{ flex: 1, margin: '0 8px' }}
                innerRef={phoneLastRef}
              />
              <FormFeedback>핸드폰 번호를 입력하세요.</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="address" sm={2}>
              주소
            </Label>
            <Col sm={10} style={{ height: '108px' }}>
              <Input
                id="address"
                name="address"
                placeholder="주소를 입력해주세요"
                type="address"
                invalid={!addressRef.current.value}
                innerRef={addressRef}
              />
              <FormFeedback style={{ marginBottom: '10px' }}>
                주소를 입력하세요.
              </FormFeedback>
              <Input
                name="address-detail"
                placeholder="상세 주소를 입력해주세요"
                type="address"
                innerRef={detailAddressRef}
              />
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}

export default Delivery
