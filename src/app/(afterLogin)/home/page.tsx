import styles from "@/app/(afterLogin)/home/page.module.css";
import Tab from "./_component/Tab"
import PostForm from "./_component/PostForm";
import Post from "@/app/(afterLogin)/_component/Post";
import TabProvider from "./_component/TabProvider";

export default function Home() : JSX.Element {
  return (
    <main className={styles.main}>
      <TabProvider>
          <Tab />
          <PostForm />
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
      </TabProvider>
    </main>
  );
}
