const WhatIsReact = () => {
  return (
    <>
      <h1>리액트란?</h1>

      <p>Web UI(User Interface)를 구현하기 위한 JavaScript Library (화면)</p>
      <p>
        자바스크립트 작성 단위를 Component로 구분한다. // Component라는 부품을
        많이 만든다.
      </p>
      <p>
        Component를 조합하여 복잡한 UI를 구성할 수 있다 =&gt; SPA(Single Page
        Application)을 구현하기 위한 도구로 사용된다.
        <hr />
        <strong>
          화면을 예쁘게 만드는 것과 React는 전~혀 연관이 없다.(CSS)
        </strong>
      </p>
      <p>
        리액트를 학습하기 위해서 Node라는 JavaScript Runtime을 설치 NPM(Node
        Package Manager)라는 패키지매니저 + JSX(Babel)문법을 활용해 학습할 예정
      </p>
    </>
  );
};

export default WhatIsReact;
