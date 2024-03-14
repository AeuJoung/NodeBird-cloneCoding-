"use client";

import {ReactNode} from "react";
import style from './post.module.css';
import {useRouter} from "next/navigation";

type Props = {
  children: ReactNode,
  post: {
    postId: number;
    content: string,
    User: {
      id: string,
      nickname: string,
      image: string,
    },
    createdAt: Date,
    Images: any[], //any는 아무거나 다 된다는 뜻이라, 사실 tsx에서 부적합

  }
}

//onClickCapture : 요소를 클릭할 때마다 작동.
//onClick은 버블링 단계(이벤트 단계)에서 작동하지만, onClickCapture는 캡처 단계에서 작동한다.
//이벤트 버블링 : DOM에서 가장 가까운 요소에서 가장 멀리 있는 요소로 전파되어가는 과정.
//이벤트 캡쳐 : DOM에서 가장 먼 요소에서 가장 가까운 요소로 전파되어가는 프로세스.
//순서는 이벤트 캡쳐->이벤트 버블링 순이다.
//https://www.geeksforgeeks.org/what-is-event-bubbling-and-event-capturing-in-javascript/

//[username] : 동적 라우팅 폴더. 라우팅 정보를 'params' 프롭스로 제공한다.
// zeroch/1 일 경우 params = { username : '1'} 로 전달됨.
export default function PostArticle({ children, post}: Props) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  }

  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}