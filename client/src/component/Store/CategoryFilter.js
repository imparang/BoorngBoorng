import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import {
  PRODUCT_CATEGORY_REQUEST,
  PRODUCT_SEARCH_REQUEST
} from '../../redux/types'

const CategoryFilter = ({ userId }) => {
  const dispatch = useDispatch()
  const { category1, category2, category3, category4 } = useSelector(
    state => state.product
  )

  const category1Ref = useRef(null)
  const category2Ref = useRef(null)
  const category3Ref = useRef(null)
  const category4Ref = useRef(null)

  useEffect(() => {
    onChangeCategory()
  }, [category1, category2, category3, category4])

  const onChangeCategory = useCallback(
    ca => {
      dispatch({
        type: PRODUCT_CATEGORY_REQUEST,
        data: {
          num:
            ca === 'category1'
              ? ca === 'category2'
                ? ca === 'category3'
                  ? 4
                  : 3
                : 2
              : 1,
          category1: category1 ? category1Ref.current.value : undefined,
          category2: category2 ? category2Ref.current.value : undefined,
          category3: category3 ? category3Ref.current.value : undefined
        },
        category: ca
      })
    },
    [category1, category2, category3, category4]
  )

  const onClickSearch = useCallback(() => {
    dispatch({
      type: PRODUCT_SEARCH_REQUEST,
      data: {
        user_id: userId,
        category1: category1 ? category1Ref.current.value : undefined,
        category2: category2 ? category2Ref.current.value : undefined,
        category3: category3 ? category3Ref.current.value : undefined,
        category4: category4 ? category4Ref.current.value : undefined
      }
    })
  }, [category1, category2, category3, category4])

  return (
    <Row>
      <Col style={{ flex: 4 }}>
        <FormGroup>
          <Label for="category1">카테고리1</Label>
          <Input
            id="category1"
            name="category1"
            type="select"
            innerRef={category1Ref}
            onChange={() => onChangeCategory('category1')}
          >
            {category1 &&
              category1.map((el, i) => <option key={i}>{el.category1}</option>)}
          </Input>
        </FormGroup>
      </Col>
      <Col style={{ flex: 4 }}>
        <FormGroup>
          <Label for="category2">카테고리2</Label>
          <Input
            id="category2"
            name="category2"
            type="select"
            innerRef={category2Ref}
            onChange={() => onChangeCategory('category2')}
          >
            {category2 &&
              category2.map((el, i) => <option key={i}>{el.category2}</option>)}
          </Input>
        </FormGroup>
      </Col>
      <Col style={{ flex: 4 }}>
        <FormGroup>
          <Label for="category3">카테고리3</Label>
          <Input
            id="category3"
            name="category3"
            type="select"
            innerRef={category3Ref}
            onChange={() => onChangeCategory('category3')}
          >
            {category3 &&
              category3.map((el, i) => <option key={i}>{el.category3}</option>)}
          </Input>
        </FormGroup>
      </Col>
      <Col style={{ flex: 4 }}>
        <FormGroup>
          <Label for="category4">카테고리4</Label>
          <Input
            id="category4"
            name="category4"
            type="select"
            innerRef={category4Ref}
          >
            {category4 &&
              category4.map((el, i) => <option key={i}>{el.category4}</option>)}
          </Input>
        </FormGroup>
      </Col>
      <Col style={{ flex: 1 }}>
        <FormGroup style={{ marginTop: '38px' }}>
          <Button color="primary" block onClick={onClickSearch}>
            검색
          </Button>
        </FormGroup>
      </Col>
    </Row>
  )
}

export default CategoryFilter
