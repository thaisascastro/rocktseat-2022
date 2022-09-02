import styles from "./Post.module.css";
import { Comment } from "./Comment.jsx";
import { Avatar } from "./Avatar";

export function Post() {
  return (
   <article className={styles.post}>
    <header>
    <div className={styles.author}>
      <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/58372020?v=4"/>
      <div className={styles.authorInfo}>
        <strong>Thaísa Castro</strong>
        <span>Frontend Developer</span>
      </div>
    </div>

    <time title="30 de Junho às 21:03h" dateTime="2022-06-30 00:13:30">Publicado há 1h</time>
    </header>

    <div className={styles.content}>
   
    </div>

    <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>

        <textarea
        placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
    </form>

    <div className={styles.commentList}>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
   </article>
  )
  
}