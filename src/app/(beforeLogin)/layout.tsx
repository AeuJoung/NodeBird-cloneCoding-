//default.tsx는 패러랠라우터에 대한 기본값. 패러랠라우터가 필요 없을 때 사용하는 컴퓨넌트.
import { ReactNode } from "react";
import styles from "@/app/(beforeLogin)/_component/main.module.css"; //@ : 소스 폴더

type Props = {children : ReactNode, modal : ReactNode};

export default function Layout({children, modal}:Props) {
    return (<div className={styles.container}>
        {children}
        {modal}
    </div>)
}


//주소가 z.com(localhost)일 때는 children->page.tsx, modal->@modal/default.tsx
//주소가 z.com(localhost)/i/flow/login일 때는 children->i/flow/login/page.tsx, modal->@modla/i/flow/login/page.tsx