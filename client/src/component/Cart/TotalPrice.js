import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

const TotalPrice = () => {
  const [cartList, setCartList] = useState([
    {
      cart_id: '20211212CART000037',
      user_id: 'test1234@test.com',
      product_id: '19431322981',
      price_view: '25500 * 1 = 25500',
      amount: 1,
      price: '25500',
      complete_yn: 'N',
      insert_date: '2021-12-12T03:05:01.000Z',
      title: '훼르자 스텝사다리 6M <b>축구용품점</b>',
      image:
        'https://shopping-phinf.pstatic.net/main_1943132/19431322981.20190523160911.jpg',
      l_price: '25500',
      h_price: '',
      mall_name: '네이버',
      maker: '훼르자',
      brand: '훼르자',
      category1: '스포츠/레저',
      category2: '축구',
      category3: '축구연습용품',
      category4: '',
      product_count: 1
    },
    {
      cart_id: '20211212CART000037',
      user_id: 'test1234@test.com',
      product_id: '23354886528',
      price_view: '7500 * 1 = 7500',
      amount: 1,
      price: '7500',
      complete_yn: 'N',
      insert_date: '2021-12-12T03:04:56.000Z',
      title: '미마<b>마스크</b> 미마 보건용<b>마스크</b> <b>KF94</b>',
      image:
        'https://shopping-phinf.pstatic.net/main_2335488/23354886528.20210607110836.jpg',
      l_price: '7500',
      h_price: '',
      mall_name: '네이버',
      maker: '',
      brand: '미마마스크',
      category1: '생활/건강',
      category2: '건강관리용품',
      category3: '먼지차단마스크',
      category4: '',
      product_count: 1
    },
    {
      cart_id: '20211212CART000037',
      user_id: 'test1234@test.com',
      product_id: '29113795077',
      price_view: '29900 * 1 = 29900',
      amount: 1,
      price: '29900',
      complete_yn: 'N',
      insert_date: '2021-12-12T03:05:14.000Z',
      title: '스파오 짱구 잘자요 짱구 수면 잠옷 SPPPB4TU05',
      image:
        'https://shopping-phinf.pstatic.net/main_2911379/29113795077.20211005234255.jpg',
      l_price: '29900',
      h_price: '',
      mall_name: '네이버',
      maker: '이랜드',
      brand: '스파오',
      category1: '패션의류',
      category2: '여성언더웨어/잠옷',
      category3: '잠옷/홈웨어',
      category4: '',
      product_count: 1
    },
    {
      cart_id: '20211212CART000037',
      user_id: 'test1234@test.com',
      product_id: '29432565586',
      price_view: '34990 * 1 = 34990',
      amount: 1,
      price: '34990',
      complete_yn: 'N',
      insert_date: '2021-12-12T03:05:04.000Z',
      title: '리정 버킷햇 스우파 <b>스트리트우먼파이터</b> 벙거지 딥버',
      image:
        'https://shopping-phinf.pstatic.net/main_2943256/29432565586.20211028031703.jpg',
      l_price: '34990',
      h_price: '',
      mall_name: '네이버',
      maker: '',
      brand: '',
      category1: '패션잡화',
      category2: '모자',
      category3: '사파리모자',
      category4: '',
      product_count: 1
    },
    {
      cart_id: '20211212CART000037',
      user_id: 'test1234@test.com',
      product_id: '29457785440',
      price_view: '67990 * 1 = 67990',
      amount: 1,
      price: '67990',
      complete_yn: 'N',
      insert_date: '2021-12-12T03:05:12.000Z',
      title: '스우파 노제 아가일 니트 가디건 <b>스트릿 우먼 파이터</b>',
      image:
        'https://shopping-phinf.pstatic.net/main_2945778/29457785440.20211203030808.jpg',
      l_price: '67990',
      h_price: '',
      mall_name: '네이버',
      maker: '',
      brand: '',
      category1: '패션의류',
      category2: '여성의류',
      category3: '카디건',
      category4: '',
      product_count: 1
    }
  ])
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    setTotal(cartList.reduce((acc, cur) => acc + cur.amount * cur.l_price, 0))
  }, [cartList])

  useEffect(() => {
    setCount(cartList.reduce((acc, cur) => acc + cur.amount, 0))
  }, [cartList])

  return (
    <>
      <section className="cart-price">
        <div className="cart-price-count">
          총 상품의 개수 <span>{count}개</span>
        </div>
        <div className="cart-price-total">
          <span>총 상품 금액</span>
          <strong>
            {total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}원
          </strong>
        </div>
      </section>
      <Button color="primary" block={true} onClick={() => navigate('/order')}>
        상품 구매하기
      </Button>
    </>
  )
}

export default TotalPrice
