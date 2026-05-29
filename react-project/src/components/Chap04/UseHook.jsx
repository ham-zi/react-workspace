import { useState, useEffect } from "react";

const UseHook = () => {
  const [num, setNum] = useState(100);

  const minus = () => {
    //setNum(num - 1); //렌더시점에 박제된 값
    setNum((num) => num - 1);
  };

  useEffect(() => {
    alert("hi");
  }, [num]);
  // 두번째 인자로 의존성 배열을 전달하는데,
  // [] => 첫 렌더링 일때만 수행
  // [] => [state, state, state] => 각각의 state의 변화가 일어날 때(setter가 호출) effect를 수행한다.
  /*
    Hook 사용 시 주의사항
    - Hook은 함수형 컴포넌트 최상위 블럭에서만 사용 가능(반복, 조건, 함수 내부에서 호출안됨)
    - 함수형 컴포넌트에서만 사용가능
  */
  return (
    <>
      <h1>{num}</h1>
      <p>
        <button onClick={minus}>감소버튼</button>
      </p>
      <p>gdgd</p>
    </>
  );
};

export default UseHook;
