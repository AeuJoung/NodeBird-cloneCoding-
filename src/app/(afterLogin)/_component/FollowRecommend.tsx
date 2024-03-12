"use client"

import styles from "@/app/(afterLogin)/_component/followRecommend.module.css"

export default function FollowRecommend() {

    const user : {id:string, nickname:string, image:string} = {
        id:"zerocho",
        nickname:"제로초",
        image:"/5Udwvqim.jpg"
    }

    const onFollow = () =>{
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.userLogoSection}>
                <div className={styles.userLogo}>
                    <img src={user.image} alt={user.id} />
                </div>
            </div>
            <div className={styles.userInfo}>
                <div className={styles.title}>{user.nickname}</div>
                <div className={styles.count}>@{user.id}</div>
            </div>
            <div className={styles.followButtonSection}>
                <button onClick={onFollow}>팔로우</button>
            </div>
        </div>
    )
 }