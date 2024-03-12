"use client"

import styles from "@/app/(afterLogin)/_component/logoutButton.module.css"

export default function LogoutButton() {
    const me : {id:string, nickname:string, image:string} = {
        //임시로 내 정보 있는 것 처러
        id : 'zerocho',
        nickname : '제로',
        image : '/5Udwvqim.jpg'
    }

    const onLogout = () => {};

    return (
        <button className={styles.logOutButton} onClick={onLogout}>
            <div className={styles.logOutUserImage}>
                <img src={me.image} alt={me.id} />
            </div>
            <div className={styles.logOutUserName}>
                <div>{me.nickname}</div>
                <div>@{me.id}</div>
            </div>
        </button>
    );
}