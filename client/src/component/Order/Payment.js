import React from 'react'
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

const Payment = () => {
  return (
    <Card>
      <CardHeader>결제</CardHeader>
      <CardBody>
        <Form>
          <FormGroup row>
            <Label for="select" sm={2}>
              카드 선택
            </Label>
            <Col sm={10}>
              <Input id="select" name="select" type="select">
                <option>KB 나라사랑카드</option>
                <option>카카오 뱅크 카드</option>
                <option>우리 V 카드</option>
                <option>현대 M 카드</option>
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
                invalid
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
                invalid
              />
              ㅡ
              <Input
                name="card"
                type="text"
                minLength={4}
                maxLength={4}
                invalid
              />
              ㅡ
              <Input
                name="card"
                type="text"
                minLength={4}
                maxLength={4}
                invalid
              />
              ㅡ
              <Input
                name="card"
                type="text"
                minLength={4}
                maxLength={4}
                invalid
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
                invalid
              />
              <Input
                id="year"
                name="year"
                type="text"
                style={{ marginBottom: '10px' }}
                invalid
              />
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
      <CardFooter>
        <Button color="primary" block={true}>
          결제
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Payment
