"use client"

import {ChangeEventHandler, FormEventHandler, useRef, useState} from "react";
import style from './postForm.module.css';

export default function PostForm() {
  const imageRef = useRef<HTMLInputElement>(null); //타입스크립트에서는 이렇게 써야함.. ㅠ
  const [content, setContent] = useState('');
  const me = {  //inlay hints 기능이 자동으로 돌아가고 있어, 알아서 타입이 타이핑된 상태.
    id: 'zerohch0',
    image: '/5Udwvqim.jpg'
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  }

  const onSubmit: FormEventHandler = (e) => { //매개변수 타입 붙여준..건가..?
    e.preventDefault();
  }

  const onClickButton = () => {
    imageRef.current?.click();
    //? : 옵셔널 체이닝. ? 앞의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환.
    //imageRef.current.click()으로 칠 경우 current에 null값이 있을 수도 
    //있기 때문에 타입 스크립트에서는 에러 발생. if문 써주거나 옵셔널 체이닝 사용.
  }

  return (
    <form className={style.postForm} onSubmit={onSubmit}>
      <div className={style.postUserSection}>
        <div className={style.postUserImage}>
          <img src={me.image} alt={me.id} />
        </div>
      </div>
      <div className={style.postInputSection}>
        <textarea value={content} onChange={onChange} placeholder="무슨 일이 일어나고 있나요?"/>
        <div className={style.postButtonSection}>
          <div className={style.footerButtons}>
            <div className={style.footerButtonLeft}>
              <input type="file" name="imageFiles" multiple hidden ref={imageRef} />
              <button className={style.uploadButton} type="button" onClick={onClickButton}>
                <svg width={24} viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path
                      d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                  </g>
                </svg>
              </button>
            </div>
            <button className={style.actionButton} disabled={!content}>게시하기</button>
          </div>
        </div>
      </div>
    </form>
  )
}