import styles from './Comment.module.css';
import { ThumbsUp, Trash} from 'phosphor-react';
import { Avatar } from './Avatar';


export function Comment() {
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

          <button title="Deletar comentário">
            <Trash size={24}/>
          </button>
        </header>
        
        <p>Muito bom Rato, parabéns!!</p>
      </div>
      
      <footer>
        <button>
          <ThumbsUp/>
          Aplaudir <span>20</span>
        </button>
      </footer>
      </div>
    </div>
  )
}