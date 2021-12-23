import React, { useCallback, useRef } from 'react'
import {
  Button,
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

const Delivery = ({ onChangeData }) => {
  const nameRef = useRef(null)
  const phoneFirstRef = useRef(null)
  const phoneMiddleRef = useRef(null)
  const phoneLastRef = useRef(null)
  const addressRef = useRef(null)
  const detailAddress1Ref = useRef(null)
  const detailAddress2Ref = useRef(null)

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
    } else if (!detailAddress1Ref.current.value) {
      detailAddress1Ref.current.focus()
      return false
    } else if (!detailAddress2Ref.current.value) {
      detailAddress2Ref.current.focus()
      return false
    } else {
      return true
    }
  }, [])

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      if (validation()) {
        onChangeData({
          receive_user: nameRef.current.value,
          receive_user_tel1: phoneFirstRef.current.value,
          receive_user_tel2: phoneMiddleRef.current.value,
          receive_user_tel3: phoneLastRef.current.value,
          receive_address1: addressRef.current.value,
          receive_address2: detailAddress1Ref.current.value,
          receive_address3: detailAddress2Ref.current.value
        })
      } else {
        return
      }
    },
    [
      nameRef,
      phoneFirstRef,
      phoneMiddleRef,
      phoneLastRef,
      addressRef,
      detailAddress1Ref,
      detailAddress2Ref
    ]
  )
  return (
    <Card>
      <CardHeader style={{ fontSize: '16px', fontWeight: '700' }}>
        배송지
      </CardHeader>
      <CardBody style={{ paddingBottom: 0 }}>
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
                valid={nameRef.current?.value !== ''}
                invalid={!nameRef && nameRef !== null && true}
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
                maxHeight: '70px'
              }}
            >
              <Input
                id="phone"
                name="phone"
                placeholder="xxx"
                type="text"
                minLength={3}
                maxLength={3}
                valid={phoneFirstRef.current?.value !== ''}
                invalid={!phoneFirstRef && phoneFirstRef !== null && true}
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
                style={{ flex: 1, margin: '0 8px' }}
                valid={phoneMiddleRef.current?.value !== ''}
                invalid={!phoneMiddleRef && phoneMiddleRef !== null && true}
                innerRef={phoneMiddleRef}
              />
              ㅡ
              <Input
                name="phone"
                type="text"
                placeholder="xxxx"
                minLength={3}
                maxLength={4}
                style={{ flex: 1, margin: '0 8px' }}
                innerRef={phoneLastRef}
                valid={phoneLastRef.current?.value !== ''}
                invalid={!phoneLastRef && phoneLastRef !== null && true}
              />
              <FormFeedback>핸드폰 번호를 입력하세요.</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="address" sm={2}>
              주소
            </Label>
            <Col sm={10}>
              <Input
                id="address"
                name="address"
                placeholder="주소를 입력해주세요"
                type="address"
                innerRef={addressRef}
                valid={addressRef.current?.value !== ''}
                invalid={!addressRef && addressRef !== null && true}
                style={{ marginBottom: '10px' }}
              />
              <FormFeedback style={{ marginBottom: '10px' }}>
                주소를 입력하세요.
              </FormFeedback>
              <Input
                name="address-detail1"
                placeholder="상세 주소를 입력해주세요"
                type="address"
                innerRef={detailAddress1Ref}
                valid={detailAddress1Ref.current?.value !== ''}
                invalid={
                  !detailAddress1Ref && detailAddress1Ref !== null && true
                }
                style={{ marginBottom: '10px' }}
              />
              <Input
                name="address-detail2"
                placeholder="상세 주소를 입력해주세요"
                type="address"
                innerRef={detailAddress2Ref}
                valid={detailAddress2Ref.current?.value !== ''}
                invalid={
                  !detailAddress2Ref && detailAddress2Ref !== null && true
                }
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button>등록</Button>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  )
}

export default Delivery
