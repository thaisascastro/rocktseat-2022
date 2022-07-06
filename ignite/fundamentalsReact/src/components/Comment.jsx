import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/58372020?v=4" alt=""/>

      <div className={styles.commentBox}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Thaísa Castro</strong>
            <time title="30 de Junho às 21:03h" dateTime="2022-06-30 00:13:30">Cerca de 1h atrás</time>
          </div>

          <button title="Deletar comentário">
            <Trash size={20}/>
          </button>
        </header>
        
        <p>Muito bom Devon, parabéns!!</p>
      </div>
      
      <footer>
        <button>
          <ThumbUp/>
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>
  )
}