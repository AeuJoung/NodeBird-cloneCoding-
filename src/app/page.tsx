import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"; // css module 쓸 것임. talewind 안씀.
// tailwind -> 호불호 심함. 가독성 안좋음.
//styled component or Emotion -> 이모션 next13에서 잘 안돌아감. styled 컴포넌트 SSR에서 문제있음
// sass 
// css module // 아래 styles.signup의 signup 부분이 클래스가 됨. (모듈 파일 가서 설정하면 됨)
// vanila extract -> WINDOWS와 문제있음. 요즘 핫하긴 함.
import zLogo from "../../public/zlogo.png";

export default function Home() {
  return (
    <>
      <div className={styles.left}>
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={styles.right}> 
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>계정 만들기</Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>로그인</Link>
      
      </div>
    </>
  );
}
