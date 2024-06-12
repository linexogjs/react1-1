# 202230213 박태헌

## 6월 12일 강의 내용


1. CSS란?
    - CSS는 Cascading Style Sheets의 약자로 스타일링을 위한 언어입니다.
    - Cascading 이란, 계단식이라는 뜻으로 한 엘리먼트에 여러 스타일이 적용될 경우 스타일 간의 충돌을 막기 위해 계단식으로 스타일을 적용시키는 규칙을 가지고 있습니다.
    - 즉 하나의 스타일이 여러 개의 엘리먼트에 적용될 수도 있고, 하나의 엘리먼트에도 여러 개의 스타일이 적용될 수도 있습니다.
    - 엘리먼트에 스타일이 적용되는 규칙을 selector (선택자) 라고 합니다. CSS는 이 선택자와 스타일로 이루어집니다.
2. CSS 문법과 선택자
    - 선택자를 먼저 쓰고 다음에 적용할 스타일을 중괄호 안에 세미콜론으로 구분하여 하나씩 작성합니다.
    - 선택자는 HTML 엘리먼트를 직접 넣어도 디ㅚ고, 엘리먼트의 조합 혹은 class의 형태로 작성 가능합니다.
    - 스타일은 property(속성)과 key value(키 값)로 이루어지며, 이들은 콜론(:)으로 구분하고, 각 스타일은 세미콜론(;)으로 구분합니다.
3. 레이아웃과 관련된 속성
    - 화면에 엘리먼트를 어떻게 배치할 것인지를 정의합니다.us
    - 가장 중요한 속성을 display 입니다.
    - 모든 엘리먼트는 기본 display 속성을 갖고 있지만 이 기본값을 변경해 줄 수 있습니다.
    - none는 존재는 하지만 화면에 보이지 않는 것으로, 자바스크립트를 넣을 때 많이 사용합니다.
    - block은 세로로 정렬되며, width의 height를 갖을 수 있다. 크기와 상관없이 한 줄을 점유합니다.
    - inline은 가로로 정렬되며, width의 height를 가질 수 없다. 컨텐츠의 크기만큼 공간을 점유합니다.
    - inline-block는 기본적인 inline 특성을 갖지만, width 와 height 등 block의 특성을 사용할 수 있습니다.
    - <!--Block : <div>, <table>, <h1>~<h6>, <form>, <ul>, <ol>, <li>, <dl>, <dt>, <dd>, <pre> 등 -->
    - <!-- inline : <span>, <a>, <br>, <em>, <strong>, <input>, <label>, <img> -->
    - flex는 컨테이너의 형태로 엘리먼트를 관리합니다.
    - 최근 들어서는 Grid를 자주 사용. Flex가 1차원 적이라면 Grid는 2차원적 관리가 가능
4. Flex box
    - 교재 그림 참고
5. 폰트와 관련된 속성
    - serif : 각 글자의 모서리에 작은 테두리를 갖고 있는 형태의 글꼴
    - sans-serif : 모서리에 테두리가 없이 깔끔한 선을 가진 글꼴이며 컴퓨터 모니터에서는 serif보다 가독성이 좋음
    - monospace : 모든 글자가 같은 가로 길이를 가지는 글꼴, 코딩을 할 때 주로 사용
    - cursive : 사람이 쓴 손글씨 모양의 글꼴
    - fantasy : 장식이 들어간 형태의 글꼴


## 6월 11일 강의 내용

17. Specialization (특수화, 전문화)
    - 웰컴다이얼로그는 다이얼로그의 특별한 케이스입니다.
    - 범용적인 개념을 구별이 되게 구체화하는 것을 특수화라고 합니다.
    - 객체지향 언어에서는 상속을 사용하여 특수화를 구현합니다.
    - 리액트에서는 합성을 사용하여 특수화를 구현합니다.
18. 상속에 대해 알아보기
    - 합성과 대비되는 개념으로 상속(inheritance)이 있습니다.
    - 자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 갖게 되는 개념입니다.
    - 하지만 리액트에서는 상속보다는 합성을 통해 새로운 컴포넌트를 생성합니다.
    - ※ 복잡한 컴포넌트를 쪼개 여러개의 컴포넌트로 만들고, 만든 컴포넌트들을 조합하여 새로운 컴포넌트를 만들자!

19. 요약 (정리)
    - 합성이란?
        - 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것.
        - 다양하고 복잡한 컴포넌트를 효율적으로 개발 가능.
    - 합성기법
        - Containment
        - Specialization
        - Containment와 Specialization을 함께 사용하기
    - 상속


20. 컨텍스트란 무엇인가? (ch14)
    - 기존의 일반적인 리액트에서는 데이터가 컴포넌트의 props를 통해 부모에서 자식으로 단방향으로 전달.
    - 컨텍스트는 리액트 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식 대신 '컴포넌트 트리를 통해 곧바로 컴포넌트에 전달하는 새로운 방식'을 제공.
    - 이것을 통해 어떤 컴포넌트라도 쉽게 데이터에 접근할 수 있다.
    - 컨텍스트를 사용하면 일일이 props로 전달할 필요없이 데이터를 필요로 하는 컴포넌트에 곧바로 데이터를 전달할 수 있습니다.

## 5월 29일 강의 내용

13. textarea 태그
    - HTML에서는 <textarea>의 children으로 텍스트가 들어가는 형태입니다.
    - 리액트에서는 state를 통해 태그의 value라는 attribute를 변경하여 텍스트를 표시합니다.
    - select 태그도 taxtarea와 동일합니다.
14. File input 태그
    - File input 태그는 그 값이 읽기 전용이기 때문에 리액트에서는 비제어 컴포넌트가 됩니다.
15. Input Null Value
    - 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없습니ㅏㄷ
    - 만약 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값이 undefined 또는 null을 넣어주면 됩니다.

16. (실습) 사용자 정보 입력받기

## 5월 22일 강의 내용
10. 리스트와 키란 무엇인가?
    - 리스트는 자바스크립ㅌ의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것입니다.
    - 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미합니다.
    - 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있습니다.
11. 여러 개의 컴포넌트 랜더링하기
    - 예의 에어비엔비의 화면처럼 같은 컴포넌트를 화면에 반복적으로 나타내야할 경우 배열에 들어있는 엘리먼트를 map() 함수를 이용하여 랜더링합니다.

12. 리스트의 키에 대해 알아보기
    - 리스트에서의 키는 "리스트 에서 아이템을 구별하기 위한 고유한 문자열"입니다.
    - 이 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용합니다.
    - 키는 같은 리스트에 있는 엘리언트 사이에서만 고유한 값이면 됩니다.
    
13. 마치며
    - 리스트
        - 같은 아이템을 순서대로 모아놓은 것
    - 키
        - 각 각체나 아이템을 구분할 수 있는 고유한 값
    - 여러 개의 컴포넌트 랜더링
        - 자바스크립트 배여르이 MAP() 함수를 이용

11. 폼이란 무엇인가?
    - 폼은 일반적으로 사용자로부터 입력을 받기위한 양식에서 많이 사용됩니다.
12. 제어 컴포넌트
    - 제어 컴포넌트는 사용가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트입니다.

## 4월 24일 강의 내용

14. 나만의 훅 만들기
    - 필요하다면 직접 훅을 만들 수 있습니다. 이것을 커스텀 훅 이라고 합니다.

15. 커스텀 훅 추출하기
    - use로 시작하는 훅을 만들고, 내부에서 다른 훅을 호출하면 됩니다.
    - 아래 코드는 중복되는 로직은 useUserStatus() 라는 커스텀 훅으로 추출해낸 것~
    - 이름은 use로 시작!! 그렇지 않으면 다른 훅을 불러올 수 없습니다.
16. 커스텀 훅 사용하기

17. 훅을 사용한 컴포넌트 개발 (실습)
    - useCounter() 커스텀 훅 만들기
    - Accommodate 컴포넌트 만들기
    - 실행하기
    - 237p (230p 부터 다음 순서대로 따라가면 됩니다.)
18. 이벤트 처리하기
    - DOM에서 클릭 이벤트를 처리하는 예제 코드..
        - <button onclick="activaate()">
            Activate
            </button>
    - React에서 클릭 이벤트를 처리하는 예제 코드..
        <button onClick={activate}>
            Activate
            </button>
    - 둘의 차이점은
        - 1. 이벤트 이름이 onclick에서 onClick으로 변경.(Camel case)
        - 2. 전달하려는 함수는 문자열에서 함수 그대로 전달
    - 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 이벤트 헨들러 라고 합니다. 또는 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 이벤트 리스너라고 부르기도 합니다.

19. 이벤트 핸들러 추가하는 방법은?
    - 버튼을 클릭하면 이벤트 핸들러 함수인 handleClick() 함수를 호출하도록 되어 있습니다.
    - bind를 사용하지 않으면 this.handleClick은 글로벌 스코프에서 호출되어, undefined으로 사용할 수 없기 때문입니다.
    - bind를 사용하지 않으려면 화살표 함수를 사용하는 방법도 있습니다.
    - 하지만 클래스 컴포넌트는 이제 거의 사용하지 않기 때문에 이 내용은 참고만 합니다.
    - 생성자 존재의 이유? (초기값)

## 4월 17일 수업내용

7. 훅이란 무엇인가?
    - 클래스형 컴포넌트에서는 생성자에서 state를 정의하고, setState() 함수를 통해 state를 업데이트 합니다.
    - 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었습니다.
    - 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 훅 (Hook) 입니다.
    - 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현할 수 있게 되었습니다.
    - Hook 이란, 'state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수'를 의미합니다.
    - 훅의 이름은 모두 'use'로 시작합니다.
    - 사용자 정의 훅을(custom hook) 만들 수 있으며, 이 경우에 이름은 자유롭게 할 수 있으나 'use' 로 시작할 것을 권장합니다.
8. Hook
    - useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook 입니다.
    - 다음 예제는 버튼을 클릭할 때마다 카운트가 증가하는 함수형 컴포넌트 입니다.
    - 하지만 증가는 시킬 수 있지만 증가할 때마다 재 랜더링을 일어나지 않습니다.
    - 이럴 때 state를 사용해야 하지만 함수형에는 없기 때문에 useState()를 사용합니다.
9. useEffect
    - useState와 함께 가장 많이 사용하는 Hook 입니다.
    - 이 함수는 사이드 이펙트를 수행하기 위한 것입니다.
    - 영어로 side effect는 부작용을 의미합니다. 
    - 하지만 리액트에서는 효과 또는 영향을 뜻하는 effect의 의미에 가깝습니다.
    - 예를 들면 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미합니다.
    - 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공합니다.
    - 이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 랜더링 중에는 작업이 완료될 수 없기 때문입니다.
    - 결국 sideEffect는 랜더링 외에 실행해야 하는 부수적인 코드를 말합니다.
    - 예를 들면 네트워크 리퀘스트, Dom 수동 조작, 로깅 등은 정리가 필요 없는 경우들입니다.
    - useEffect() 함수는 다음과 같이 사용합니다.
    - 첫 번째 파라미터는 이펙트 함수가 들어가고, 두 번째 파라미터로는 의존성 배열이 들어갑니다.
    - useEffect(이펙트 함수, 의존성 배열);
10. useMemo
    - useMemo() 혹은 Memoizde value 리턴하는 훅입니다.
    - 이전 계산값을 갖고 있기 때문에 연산량이 많은 작업의 반복을 피할 수 있습니다.
    - 이 훅은 랜더링이 일어나는 동안 실행됩니다.
    - 따라서 랜더링이 일어나는 동안 실행돼서는 안될 작업을 넣으면 안됩니다.
    - 다음과 같이 의존성 배열을 넣지 않을 경우, 랜더링이 일어날 때마다 매번 함수가 실행됩니다.
    - 따라서 의존성 배열을 넣지 않는 것은 의미가 없습니다.
    - 만약 빈 배열을 넣게 되면 컴포넌트 마운트 시에만 함수가 실행됩니다.
11. UseCallback
    - useCallback() 혹은 useMemo()와 유사한 역할을 합니다.
    - 차이점은 값이 아닌 함수를 반환한다는 점입니다.
    - 의존성 배열을 파라미터로 받는 것은 useMemo와 동일 합니다.
    - 파라미터로 받은 함수를 콜백이라고 부릅니다.
    - useMemo와 마찬가지로 의존성 배열 중 하나라도 변겨오디면 콜백감수를 반환합니다.
12. useRef
    - useRef() 혹은 레퍼런스를 사용하기 위한 훅입니다.
    - 래퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미합니다.
    - useRef() 혹은 바로 이 레퍼런스 객체를 반환합니다.
    - 래퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미합니다.
    - const refContainer = userRef(초깃값);
    - 이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지됩니다.
    - 즉, 컴포넌트가 마운트 해제 전까지는 계속 유지된다는 의미입니다.
13. 훅의 규칙
    - 첫 번째 규칙은 무조건 최상의 레벨에서만 호출해야 한다는 것입니다. 여기서 최상위는 컴포넌트의 최상위 레벨을 의미합니다.
    - 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안 됩니다.
    - 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 합니다.
    - 페이지 244..~
    - 두 번쨰 규칙은 리액트 함수형 컴포넌트에서만 훅을 호출해야 한다는 것.
    - 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안 됩니다.
    - 혹은 함수형 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있습니다.
10. 리스트와 키란 무엇인가?
    - 리스트는 자바스크립ㅌ의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것입니다.
    - 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미합니다.
    - 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있습니다.
11. 여러 개의 컴포넌트 랜더링하기
    - 예의 에어비엔비의 화면처럼 같은 컴포넌트를 화면에 반복적으로 나타내야할 경우 배열에 들어있는 엘리먼트를 map() 함수를 이용하여 랜더링합니다.

12. 리스트의 키에 대해 알아보기
    - 리스트에서의 키는 "리스트 에서 아이템을 구별하기 위한 고유한 문자열"입니다.
    - 이 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용합니다.
    - 키는 같은 리스트에 있는 엘리언트 사이에서만 고유한 값이면 됩니다.
    
13. 마치며
    - 리스트
        - 같은 아이템을 순서대로 모아놓은 것
    - 키
        - 각 각체나 아이템을 구분할 수 있는 고유한 값
    - 여러 개의 컴포넌트 랜더링
        - 자바스크립트 배여르이 MAP() 함수를 이용

11. 폼이란 무엇인가?
    - 폼은 일반적으로 사용자로부터 입력을 받기위한 양식에서 많이 사용됩니다.
12. 제어 컴포넌트
    - 제어 컴포넌트는 사용가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트입니다.


## 4월 03일 강의 내용

5. 컴포넌트
    - 2장에서 설명한 바와 같이 리액트는 컴포넌트 기반의 구조를 같습니다.
    - 컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여 전체 페이지를 구성한다는 것을 의미합니다.
    - 컴포넌트는 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지보수 비용도 줄일 수 있습니다.
    컴포넌트는 자바스크립트 함수처럼 입력가 출력이 있다는 것.

5. props에 대해 알아보기.

    props의 개념
    - prop는 prop(속성)의 준말입니다.
    - 이 props가 바로 컴포넌트의 속성입니다.
    - 컴포넌트에 어떤 속성, prop를 넣느냐에 따라서 속성이다른 엘리먼트가 출력됩니다.
    - props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체입니다.
    - 에어비앤비의 예도 마찬가지 입니다.
2. props의 특징
    - 읽기 전용입니다. 변경할 수 없다는 의미 입니다.
    - 속성이 다른 엘리먼트를 생성하려면 새로운 prop를 컴포넌트에 전달하면 됩니다.

    Pure 함수 Vs Impure 함수
        - Pure 함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수입니다.
        - Impure 함수는 인수로 받은 정보가 함수 내부에서 변하는 함수입니다.

        // pure 함수
        // input을 변경하지 않으며 같은 input에 대해서 항상 같은 output을 리턴
        function sum(a,b) {
            return a+b;
        }
    - 모든 리액트 컴포넌트는 prop를 직접 바꿀 수 없다.
3. props 사용법
    - JSX에서는 key-value쌍으로 props를 구성합니다.
    - JSX에서는 중괄호를 사용하면 JS 코드를 넣을 수 있다고 배웠습니다.
    - 다음 코드처럼 props를 통해서 value를 할당할 수 있고, 직접 중괄호를 사용하여 할당할 수도 있습니다.
    - jsx를 사용하지 않는 경우 prop의 전달 방법은 createElement() 함수를 사용하는 것입니다.
    - createElement() 함수의 두 번째 매개변수가 바로 props 입니다.
    - JSX를 사용하지 않으면 다음과 같이 코드를 작성할 수 있습니다.
    
    //
    React.createElement(
        Profile,
        {
            name:"소플",
            introduction:"안녕하세요, 소플입니다.",
            viewCount:1500
        },
        null
    );

1. 컴포넌트의 종류
    - 리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용했습니다.
    - 이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용합니다.
    - 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기 때문에, 
    - 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해 두어야 합니다.
2. 함수형 컴포넌트
    - Welcome 컴포넌트는 props를 받아, 받은 props 중 name키의 값을 "안녕," 뒤에 넣어 반환합니다.
    //
    function Welcome(props) {
        return <h1> 안녕, {props.name} </h1>;
    }
3. 클래스형 컴포넌트
    - Welcome 컴포넌트는 React.Component class로 부터 상속을 받아 선언합니다.
4. 컴포넌트 이름 짓기.
    - 이름은 항상 대문자로 시작합니다.
    - 왜냐하면 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문입니다. HTML tag.
    - 컴포넌트 파일 이름과 컴포넌트 이름은 같게 합니다.
5. 컴포넌트이 랜더링
    - 랜더링의 과정은 다음 코드와 같습니다.
        
        //코드

        function Welcome(props) {
            //return <h1>, {props.name} </h1>;
        }
        const element = <Welcome name="인제" />;
        ReactDOM.render(
            element,
            document.getElementById('root')
        );

 6. 컴포넌트 합성
    - 컴포넌트 합성은 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것 입니다. 
    - 리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복잡한 화면을 여러 개의 컴포넌트로 나누어 구현할 수 있습니다.
    - 다음 코드에서는 props의 값을 다르게 해서 Welcome 컴포넌트를 여러번 사용합니다.

7. 컴포넌트 추출
    - 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있습니다.
    - 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것 입니다. 
    - 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋습니다.
    - Comment는 댓글 펴시 컴포넌트 입니다.
    - 내부에는 이미지, 이름, 댓글과 작성일이 포함되어 있습니다.
    - 첫 번째로 이미지 부분을 Avatar 컴포넌트로 출력 해 보겠습니다.
    - 두 번쨰로 사용자 부분을 추출합니다.
    - 컴포넌트 이름은 UserInfo로 합니다. React 컴포넌트 이름은 Camel notatio를 사용합니다.
    - UserInfo 안에 Avatar 컴포넌트를 넣어서 완성시킵니다.

    - 추출 후 다시 결합한 UserInfo를 Comment 컴포넌트 반영하면 다음과 같은 모습이 됩니다.
    - 처음에 비해서 가독성이 높아진 것을 확인할 수 있습니다.
    - 기본적으로는 한 컴포넌트에 하나의 기능을 수행하도록 설계하는 것이 바람직합니다.

    - 그런데 이렇게 코드를 작성하면 매번 컴포넌트를 수정해야 하기때문에 나쁜 코드의 예입니다.
    - 다음과 코드처럼 별도의 객체로 받아 컴포넌트에서는 이것을 분리하여 출력하도록 해야 합니다.


1. State란?
    - state는 리액트 컴포넌트의 상태를 의미합니다.
    - 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미합니다.
    - 정확히는 컴포넌트의 변경가능한 데이터를 의미합니다.
    - State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 합니다.
2. State의 특징
    - 리액트 만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐입니다.
    - 예의 LikeButton은 class 컴포넌트 입니다.
    - constructor는 생성자이고 그 안에 있는
    - this. state가 현 컴포넌트의 state입니다.
    - 함수형 에서는 useState() 라는 함수 사용합니다.
    - state는 변경은 가능하다고 했지만 직접 수정해서는 안 됩니다.
    - 불가능 하다고 생각하는 것이 좋습니다.
    - state를 변경하고자 할 때는 setstate()함수를 사용합니다.
3. 교재에는 나와있지 않지만 여기서 component, element, instance의 의미에 대해 확인해 보도록 하겠습니다.
element 재료, component 빵틀, instance 재료..

4. 생명주기에 대해 알아보기
    - 생명주기는 컴포넌트의 생성시점, 사용시점, 종료시점을 나타내는 것 입니다. 
    - constructor가 실행 되면서 컴포넌트가 생성됩니다.
    - 생성 직후 componentDidMount() 함수가 호출됩니다.
    - 컴포넌트가 소멸하기 전까지 여러 번 랜더링 합니다.
    - 랜더링은 props, setState, forceUpdate() 에 의해 상태가 변경되면 이루어집니다.
    - 그리고 랜더링이 끝나면 componetWillUmount() 함수가 호출됩니다.

## 3월 27일 강의 내용

3.1
1. JSX란?
    - 자바스크립트에 XML을 추가한 확장 문법입니다. 
1. JSX의 역할
    - JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환합니다.
    - React가 createElement 함수를 사용하여 자동으로 자바스크립트로 변환해 줍니다.
    - 만일 JS 작업할 경우 직접 createElement 함수를 사용해야 합니다.
    - 앞으로 설명하는 코드를 보면 알 수 있지만 결국 JSX는 가독성을 높여주는 역할을 합니다.

1. JSX의 장점
    - 코드가 간결해 집니다.
    - 가독성이 향상 됩니다.
    - Injection Attack이라 불리는 해킹 방법을 방어함으로써 보안에 강합니다. 

1. JSX의 사용법
    - 모든 자바스크립트 문법을 지원합니다.
    - 자바스크립트 문법에 XML과 HTML을 섞어서 사용합니다.
    - 아래 코드의 2번 라인처럼 섞어서 사용하는 것입니다.
    - 만일 html이나 xml에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용합니다.
    - 만일 태그의 속성값을 넣고 싶을 때는 다음과 같이 합니다.
    : 큰 다음표 사이에 문자열을 넣거나
    const element = <div tabIndex="0"> </div>;
    const element = <img src={user.avatarUrl}></img>;

2. 엘리먼트의 정의
    - 엘리먼트는 리액트 앱을 구성하는 요소를 의미합니다.
    - 공식페이지에는 "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들"이라고 설명하고 있습니다.
    - 웹 사이트의 경우는 DOM 엘리먼트이며 HTML요소를 의마합니다.

2. 그렇다면 리액트 엘리먼트와 DOM 엘리먼트는 어떤 차이가 있을까요?
    - 리액트 엘리먼트는 Virtual Dom의 형태를 취하고 있습니다.
    - DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무겁습니다.
    - 반면 리액트 엘리먼트는 변화한 부분만 갖고 있어 가볍습니다.

2. 엘리먼트의 생김새
    - 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재합니다.
    - 컴포넌트(Button 등), 속성(color 등) 및 내부의 모든 children을 포함하는 일반 JS객체입니다.
    - 이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있습니다.
    - 리액트 엘리먼트의 예를 보면 type에 태그 대신 리액트 컴포넌트가 들어가 있는 것 외에는 차이가 없다는 것을 알 수 있습니다.
    - 역시 자바스트립트 객체입니다.

    {
        type:Button,
        props: {
            color:'green',
            children:'Hello, element!'
        }
    }

    - 내부적으로 자바스크립트 객체를 만드는 역할을 하는 함수가 createElement()입니다.
3. 엘리먼트의 특징
    - 리액트 엘리먼트의 가장 큰 특징은 불변성입니다.
    - 즉, 한 번 생성된 엘리먼트의 children이나 속성(attributes)을 바꿀 수 없습니다.

3. 만일 내용이 바뀌면 어떻게 해야 할까요?
    - 이 때는 컴포넌트를 통해 새로운 엘리먼트를 생성하면 됩니다.
    - 그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꾸는 것입니다.
    - 이렇게 교체하는 작업을 하기위해 Virtual DOM을 사용합니다.

4. 엘리먼트 랜더링하기
    - Root DOM node
    - 다음 html 코드는 id값이 root인 div태그로 단순하지만 리액트에 필수로 들어가는 아주 중요한 코드입니다.
    - 이 div 태그 안에 리액트 엘리먼트가 랜더링 되며, 이 것을 Root DOM node 라고 합니다.
    <div id="root"> </div>
    엘리먼트를 랜더링하기 위해서는 다음과 같은 코드가 필요합니다.
    
    - const element = <h1> 안녕 리액트 </h1>
    - ReactDom.render(element, document.getElementById('root'));

    - 이때 render() 함수를 사용하게 됩니다.
    - 이 함수의 첫 번째 파라메터 출력할 리액트 엘리먼트이고, 두번째 파라메터는 출력할 타겟을 나타냅니다.
    - 즉 리액트 렌터링의 가정은 virtual DOM에서 실제 DOM으로 이동하는 과정이라고 할 수 있습니다.
4. 랜더링된 엘리먼트 업데이트하기
    - 다음 코드는 tick() 함수를 정의하고 있습니다.
    - 이 함수는 현재 시간을 포함한 element를 생성해서 root div에 랜더링해 줍니다.
    - 그런데 라인 12에 보면 setInterval()함수를 이용해서 정의한 tick()를 1초에 한 번씩 호출하고 있습니다.
    - 결국 1초에 한번씩 element를 새로 만들고 그것을 교체하는 것입니다.
    - 다음 코드를 실행하고, 크롬 개발자도구에서 확인해보면 시간 부분만 업데이트 되는 것을 확인 가능합니다.
    - function tick() {
        const element ={
            <div>
                <h1>안녕 리액트!</h1>
                <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
            </div>
        };
        ReactDom.render(element, document.getElementById('root'));
    }
    setInterval(tick, 1000);


## 3월 20일 강의 내용


※리액트의 장점

1. 빠른 업데이트와 랜더링 속도
     - 이 것을 가능하게 하는 것이 바로 버츄얼 돔(Virtual DOM)
     - DOM이란, XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제하게 돕는 인터페이스 입니다.
     - Virtual DOM은 DOM 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법.
     - DOM은 동기식, Virtual DOM은 비동기식 방법으로 랜더링을 합니다.
	
    동기식(Synchronous) VS 비동기식(Asynchronous)
	동기와 비동기를 나누는 가장 큰 차이점을 어떻게 실행 순서를 가지는 지에 있습니다.

	Syncronous 동기는 요청을 보낸 후 해당 요청의 응답을 받아야 다음 동작을 실행하는 방식을,
	Asynchronous 비동기는 요청을 보낸 후 응답과 관계없이 다음 동작을 실행할 수 있는 방식을 의미합니다.

2. 컴포넌트 기반 구조
    - 리액트의 모든 페이지는 컴포넌트로 구성됩니다.
    - 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있습니다.
    - 컴포넌트를 조합해서 웹사이트를 개발합니다.
    - 재사용성이 매우 뛰어납니다.

3. 재사용성성
    - 반복적인 작업을 줄여주기 떄문에 생산성을 높여 줍니다.
    - 또한 유지보수가 용이합니다. 
    - 재사용이 가능 하려면 해당 모듈의 의존성이 없어야 합니다.

4. 든든한 지원군
    - 메타(구 페이스북)에서 오픈소스 프로젝트로 관리. 계속 발전하고 있습니다. 

5. 활발할 지식 공유 & 커뮤니티

6. 모바일 앱 개발기능
    - 리액트 네이티브 라는 모바일 환경 UI 프레임워크를 사용하면 크로스 플랫폼(cross-platform) 모바일 앱을 개발할 수 있습니다.

※리액트의 단점

1. 방대한 학습량
    - 자바스크립트를 공부한 경우 빠르게 학습할 수 있습니다.
2. 높은 상태 관리 복잡도
    - state, component life cycle 등의 개념이 있지만 그리 어렵지 않습니다.


※마치며
    리액트란? 
        - 사용자 인터페이스를 만들기 위한 ...
        ㅇㅇ