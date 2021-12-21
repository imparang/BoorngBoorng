import React, { useState } from 'react'
import { Container } from 'reactstrap'
import PaginationContainer from '../PaginationContainer'
import Product from './Product'

const Store = () => {
  const [products, setProducts] = useState([
    {
      product_id: '29907890527',
      title: '문명 2 / 열린책들 <b>베르나르 베르베르</b> 고양이 소설 책',
      image:
        'https://shopping-phinf.pstatic.net/main_2990789/29907890527.20211201210557.jpg',
      l_price: '13320',
      h_price: '',
      mall_name: '네이버',
      maker: '',
      brand: '',
      category1: '도서',
      category2: '소설/시',
      category3: '세계 각국 소설',
      category4: '프랑스소설',
      product_count: 1,
      insert_date: '2021-12-12 13:01:56',
      update_date: null,
      link: null,
      cart_amount: null
    },
    {
      product_id: '29914568071',
      title: '<b>베르나르 베르베르</b>의 상상력 사전 [열린책들]',
      image:
        'https://shopping-phinf.pstatic.net/main_2991456/29914568071.20211202051058.jpg',
      l_price: '14220',
      h_price: '',
      mall_name: '네이버',
      maker: '',
      brand: '',
      category1: '도서',
      category2: '소설/시',
      category3: '세계 각국 소설',
      category4: '프랑스소설',
      product_count: 1,
      insert_date: '2021-12-12 13:01:54',
      update_date: null,
      link: null,
      cart_amount: null
    },
    {
      product_id: '83171107433',
      title:
        '병원 예방<b>접종</b> 독감 <b>백신</b> <b>코로나</b> <b>예약</b> 안내 배너 디자인 제작 출력 실내 실외 거치대',
      image: 'https://shopping-phinf.pstatic.net/main_8317110/83171107433.jpg',
      l_price: '7900',
      h_price: '',
      mall_name: '하이큐',
      maker: '',
      brand: '',
      category1: '생활/건강',
      category2: '문구/사무용품',
      category3: '사무용품',
      category4: '현수막',
      product_count: 1,
      insert_date: '2021-12-12 12:22:03',
      update_date: null,
      link: null,
      cart_amount: null
    },
    {
      product_id: '29432565586',
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
      product_count: 1,
      insert_date: '2021-12-12 12:04:47',
      update_date: null,
      link: null,
      cart_amount: 1
    },
    {
      product_id: '29457785440',
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
      product_count: 1,
      insert_date: '2021-12-12 12:04:45',
      update_date: null,
      link: null,
      cart_amount: 1
    }
  ])
  const [count, setCount] = useState(13)

  return (
    <Container
      style={{ minHeight: '600px', marginBottom: '16px', padding: '40px' }}
    >
      <div className="product-total-count">전체 제품의 수 : {count}</div>
      <div className="products">
        {products.length &&
          products.map(product => (
            <Product key={product.product_id} product={product} />
          ))}
      </div>
      <PaginationContainer
        link={'store'}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        size="md"
      />
    </Container>
  )
}

export default Store
