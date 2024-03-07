//프라이빗 폴더. 폴더 앞에 _를 붙이면 프라이빗 폴더가 된다.
//동일한 컴포넌트의 공통 부모 폴더에 만들어서 파일의 중복을 줄일 수 있다.


"use client"  //해당 페이지 클라이언트 컴포넌트로 쓰겠다는 선언 (next가 알아서 처리함)

import style from './login.module.css';
import {useState} from "react";
//서버 컴포넌트, Page.tsx 나 layout.tsx 등은 서버에서 돌아가는 서버 컴포넌트.
//서버 컴포넌트에서는 hooks를 못쓴다. hooks 쓸려면 클라이언트 컴포넌트로 바꿔줘야함.
//클라이언트 컴포넌트

export default function LoginModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const onSubmit = () => {};
  const onClickClose = () => {};

  const onChangeId = () => {};

  const onChangePassword = () => {};

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <button className={style.closeButton} onClick={onClickClose}>
            <svg width={24} viewBox="0 0 24 24" aria-hidden="true"
                 className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03">
              <g>
                <path
                  d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
          <div>로그인하세요.</div>
        </div>
        <form onSubmit={onSubmit}>
          <div className={style.modalBody}>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="id">아이디</label>
              <input id="id" className={style.input} value={id} onChange={onChangeId} type="text" placeholder=""/>
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="password">비밀번호</label>
              <input id="password" className={style.input} value={password} onChange={onChangePassword} type="password" placeholder=""/>
            </div>
          </div>
          <div className={style.message}>{message}</div>
          <div className={style.modalFooter}>
            <button className={style.actionButton} disabled={!id && !password}>로그인하기</button>
          </div>
        </form>
      </div>
    </div>
  );
}