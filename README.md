# 202230213 박태헌
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
