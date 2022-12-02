import styles from './Comment.module.css';
import { ThumbsUp, Trash} from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';


export function Comment({content, onDeleteComment}) {

  const [likeCount, setlikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setlikeCount((state) => {
      return state + 1});
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/58372020?v=4" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Thaísa Castro</strong>
            <time title="30 de Junho às 21:03h" dateTime="2022-06-30 00:13:30">Cerca de 1h atrás</time>
          </div>

          <button onClick={handleDeleteComment} title="Deletar comentário">
            <Trash size={24}/>
          </button>
        </header>
        
        <p>{content}</p>
      </div>
      
      <footer>
        <button onClick={handleLikeComment}>
          <ThumbsUp/>
          Aplaudir <span>{likeCount}</span>
        </button>
      </footer>
      </div>
    </div>
  )
}