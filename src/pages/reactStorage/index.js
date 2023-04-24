import { useEffect } from 'react';

export const ReactStorage = () => {
  let id = 'asdb';

  useEffect(() => {
    // 1. localStorage의 데이터를 꺼낸다.
    let myArr = localStorage.getItem('watched');
    // 최초 접속시 localStorage에 데이터가 없을 경우 새로운 배열을 생성한다.
    // 혹은 사용자 모두에게 watched 자료형를 localStorage에 넣는 방법도 있다.
    if (myArr !== null) {
      // myArr에서 자료를 꺼내 따옴표를 제거하고 다시 myArr에 저장한다.
      myArr = JSON.parse(myArr);
    } else {
      myArr = [];
    }
    // 2. 현재 상품 id를 myArr에 저장한다.
    myArr.push(id);
    // 3. 중복된 데이터를 넣지 않는 set 자료형에 myArr를 담아 중복을 제거한다.
    myArr = new Set(myArr);
    // 4. 중복 제거된 set 자료형의 myArr를 일반 배열로 변경한다.
    myArr = [...myArr];
    // 5. localStorage에 데이터를 JSON 자료형으로 저장한다.
    localStorage.setItem('watched', JSON.stringify(myArr));
  }, []);

  let myArr = localStorage.getItem('watched');
  myArr = JSON.parse(myArr);

  console.log(myArr);

  return <div>Storage</div>;
};
