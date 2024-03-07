"use client"

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
    
    const router = useRouter();
    router.replace('/i/flow/login');
    return (
        <Main /> 
    );
    //redirect('/i/flow/login');
    //리다이렉트는 서버 쪾에서 리다이렉트를 시킨다. 하지만 서버에서 리다이렉트를 시키면 
    //인터셉팅 라우트가 제대로 작동하지 않는다. 클라이언트 단에서 리다이렉트 해야 한다.
    //useRouter라는 훅에 클라이언트 단에서 리다이렉트해주는 기능을 갖고 있다.
}

//router.push -> 뒤로 가기 시 바로 이전 페이지로 감. 무한 루프 발생.
//               이 경우에서는 직전 페이지가 리다이렉트 페이지라서 무한루프.
//router.replace -> 이동 후에 직전 히스토리 없애버림.