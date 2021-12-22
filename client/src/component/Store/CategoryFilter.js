import React from 'react'
import { Col, FormGroup, Input, Label, Row } from 'reactstrap'

const CategoryFilter = () => {
  //? redux와 연결 시, 카테고리 하나하나 잡아줘야 하는지? 생각할 필요 있음
  return (
    <Row>
      <Col md={3}>
        <FormGroup>
          <Label for="category1">카테고리1</Label>
          <Input id="category1" name="category1" type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Col>
      <Col md={3}>
        <FormGroup>
          <Label for="category2">카테고리2</Label>
          <Input id="category2" name="category2" type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Col>
      <Col md={3}>
        <FormGroup>
          <Label for="category3">카테고리3</Label>
          <Input id="category3" name="category3" type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Col>
      <Col md={3}>
        <FormGroup>
          <Label for="category4">카테고리4</Label>
          <Input id="category4" name="category4" type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Col>
    </Row>
  )
}

export default CategoryFilter
