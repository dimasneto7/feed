import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/dimasneto7.png" />
          <div className={styles.authorInfo}>
            <strong>Dimas Neto</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="07 de Fevereiro as 23:17h" dataTime="2023-02-07">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Hey guys!!!</p>
        <p>
          I just added another project to my portfolio. it's a project using
          Vite and React Js.
        </p>
        <p>
          <a href="">isabella.com/react-feed</a>
        </p>
        <p>
          <a href="">#react</a> <a href="">#vite</a> <a href="">#javascript</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
