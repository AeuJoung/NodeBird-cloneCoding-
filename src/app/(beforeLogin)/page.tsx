"use client"

// css module 쓸 것임. talewind 안씀.
// tailwind -> 호불호 심함. 가독성 안좋음.
//styled component or Emotion -> 이모션 next13에서 잘 안돌아감. styled 컴포넌트 SSR에서 문제있음
// sass 
// css module // 아래 styles.signup의 signup 부분이 클래스가 됨. (모듈 파일 가서 설정하면 됨)
// vanila extract -> WINDOWS와 문제있음. 요즘 핫하긴 함.
import Main from "@/app/(beforeLogin)/_component/Main";



//@modal은 주소에 반영되지 않는 폴더이기 때문에, (..)i 했을 경우 app 폴더의 i가 되어버림
//(.)i : 인터셉트 라우팅 사용.
//패러랠 라우트 안에 인터셉트 라우트를 사용했다.
// 1) 인터셉트 라우팅을 사용해서, 로그인 버튼 클릭 시 i/~가 아닌 (.)i~ 로 이동한다.
// 2) 하지만 인터셉트 라우트((.)i)는 패러랠 라우트 폴더인 모달에 들어가있다. 
//    따라서 layout의 {modal} 에서 그려진다.
// 3) 그렇게 패러랠 라우트와 인터셉트(가로채기!) 라우트를 사용해 경로 depth가 다른 두 page 컴포넌트를 동시에 띄웠다.
// 4) 하지만 그렇게 가로챈 페이지에서 새로고침하면 원래 폴더의 페이지로 이동됨.

//css 모듈은, 코드 내에서 클래스 이름을 같게 해도 자동으로 고유의 코드를 덧붙여준다. 
//결국 모든 모듈은 다른 클래스를 가지게 된다.

export default function Home() {

  return (
    <Main />
  );
}
