_현재 admin 관련 api는 빠져있음_

---

### User

**insertUser**

- <http://54.180.63.177:5001/api/user?type=signup>
- Body
  - user_email1
  - user_email2
  - user_password
  - user_major
  - user_phone
  - user_name
  - user_org
- 회원가입

**email Duplicate**

- <http://54.180.63.177:5001/api/user?type=dplicheck>
- Body
  - user_email1
  - user_email2
- 이메일 중복 검사 (회원가입에서 사용)

**updateUser**

- <http://54.180.63.177:5001/api/user?type=updateUser>
- Body
  - user_email
  - user_name
  - user_major
  - user_phone
  - user_confirm : (Y) -> (수정할지 한번 더 물어보기)
- 회원정보 수정(마이페이지 회원정보 수정)

**pwd**

- <http://54.180.63.177:5001/api/user?type=pwd>
- Body
  - user_email
  - user_password
- 비밀번호 변경(마이페이지 비밀번호 변경)

**pwd check**

- <http://54.180.63.177:5001/api/user?type=pwdCheck>
- Body
  - user_email
  - user_password
- 기존 비밀번호 체크(비밀번호 변경 시 사용)

---

### Board

**insertBoard**

- <http://54.180.63.177:5001/api/Board?type=save>
- Body
  - title
  - content
  - id
  - insert_user
  - view_count
  - write_password
- 게시판 보드 생성

**updateBoard**

- <http://54.180.63.177:5001/api/Board?type=save>
- Body
  - id
  - title
  - insert_user
  - view_count
  - write_password
  - content
- 보드 수정하기(보드 상세페이지에서 수정)

**selectBoardList**

- <http://54.180.63.177:5001/api/Board?type=list>
- Body
  - content (검색 필터링)
- 보드 불러오기 (게시판 라우터)

**selectBoardPage**

- <http://54.180.63.177:5001/api/Board?type=page>
- Body
  - length
  - start
- 보드 불러오기 (page 조절)

**selectBoardCount**

- <http://54.180.63.177:5001/api/Board?type=count>
- 총 보드 개수 (개수가 많으면 page로 부르도록 하면 될듯?)

---

### Product

**selectProductPage**

- <http://54.180.63.177:5001/api/product?type=page>
- Body
  - length
  - start
  - user_id
- 판매하는 상품 목록 불러오기 (스토어 라우터 기본적으로 뿌리기)

**selectProductCount**

- <http://54.180.63.177:5001/api/product?type=count>
- Body
  - user_id
- 전체 상품 개수 (페이지네이션)

**category1**

- <http://54.180.63.177:5001/api/product?type=category>
- Body
  - num : 1
- 카테고리1 목록 불러오기 (셀렉트에 옵션으로 뿌려줘야함)

**category2**

- <http://54.180.63.177:5001/api/product?type=category>
- Body
  - num : 2
  - category1
- 카테고리2 목록 불러오기 (셀렉트에 옵션으로 뿌려줘야함)
- 카테고리1과 연계로 해줘야 함 (로직 유의)

**category3**

- <http://54.180.63.177:5001/api/product?type=category>
- Body
  - num : 3
  - category1
  - category2
- 카테고리3 목록 불러오기 (셀렉트에 옵션으로 뿌려줘야함)
- 카테고리1,2과 연계로 해줘야 함 (로직 유의)

**category4**

- <http://54.180.63.177:5001/api/product?type=category>
- Body
  - num : 4
  - category3
  - category2
  - category1
- 카테고리4 목록 불러오기 (셀렉트에 옵션으로 뿌려줘야함)
- 카테고리1,2,3과 연계로 해줘야 함 (로직 유의)

**selectProductList**

- <http://54.180.63.177:5001/api/product?type=list>
- Body
  - user_id
  - title
  - category4
  - category3
  - category2
  - category1
- 상품 목록 불러오기인데 데이터가 많아서 이렇게 필터링 처리를 한 상태에서만 불러오도록 해야함

---

### Cart

**cartId**

- <http://54.180.63.177:5001/api/cart?type=cart_id>
- Body
  - user_id
- 계정 당 장바구니용 id를 따로 받아와야 함
- redux를 이용해 useSelector로 사용할 것

**save**

- <http://54.180.63.177:5001/api/cart?type=save>
- Body
  - cart_id
  - product_id
  - user_id
- 장바구니 담기 (스토어에서 클릭 시 담기도록 할 것)

**cartList**

- <http://54.180.63.177:5001/api/cart?type=list>
- Body
  - user_id
- 장바구니 목록 불러오기 (장바구니 라우터)

**totalPrice**

- <http://54.180.63.177:5001/api/cart?type=totalPrice>
- Body
  - cart_id
  - user_id
- 장바구니 목록들의 총 가격
- 전체 목록 구매 로직 처리 시 필요

---

### Order

**order**

- <http://54.180.63.177:5001/api/cart?type=order>
- Body
  - card_month
  - card_year
  - cart_dv
  - card_number1
  - card_number2
  - card_number3
  - card_number4
  - cart_id
  - receive_address1
  - receive_address2
  - receive_address3
  - receive_user
  - receive_user_tel1
  - receive_user_tel2
  - receive_user_tel3
  - total_price
  - user_id
  - card_user
  - complete_yn : (Y) - 디폴트로 줄 것 (주문 완료에서 다시 확인 할 것이므로)
- 상품 주문

**modify**

- <http://54.180.63.177:5001/api/cart?type=modify>
- Body
  - cart_id
  - product_id
  - user_id
  - complete_yn : (Y) -> 여기서 alert로 다시 확인
- 주문 내역을 다시 확인
- ex) 진짜로 결제를 진행하시겠습니까?

**historyList**

- <http://54.180.63.177:5001/api/order?type=list>
- Body
  - user_id
  - start_date
  - end_date
- 구매 내역 (날짜별로 조회가 가능은 하지만 이건 보류)

**historyPage**

- <http://54.180.63.177:5001/api/order?type=page>
- Body
  - user_id
  - length
  - start
- 구매 내역 페이지별로 조회(페이지네이션)

**historyCount**

- <http://54.180.63.177:5001/api/order?type=count>
- Body
  - user_id
  - start_date
  - end_date
- 구매 내역의 개수

**historyDetail**

- <http://54.180.63.177:5001/api/order?type=orderDetail>
- Body
  - user_id
  - order_id
- 주문 내역 상세 조회 (상품 상세 페이지와 비슷하게 구현)

**userStat**

- <http://54.180.63.177:5001/api/order?type=userStat>
- Body
  - user_id
- 주문 내역의 통계 (차트로 나타내기)
- 카테고리별로 통계를 차트로 나타낼 수 있다.

**userStatDetail**

- <http://54.180.63.177:5001/api/order?type=userStatDetail>
- Body
  - user_id
  - category1
    - category4
    - category3
    - category2
- 차트에서 클릭하면 상세 주문 목록이 나타남

---
