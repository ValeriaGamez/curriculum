import styles from "./blogPage.module.css" 
import CardList from "@/Components/CardList/CardList"

const BlogPage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>style Blog</h1>
        <div className={styles.content}>
            <CardList/>
        </div>
    </div>
  )
}

export default BlogPage
