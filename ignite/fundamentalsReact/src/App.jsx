import { Fragment } from "react"
import { Header } from "./components/Header";
import Post from "./Post";
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

export function App() {

  return (
    <Fragment>
      <Header/>
      
     <div className={styles.wrapper}>
      <Sidebar/>
      <aside>
        sidebar
      </aside>
      <main>
      <Post
        author="Thaísa Castro"
        content="Trazendo as propriedade dentro de um objeto"
        />
      <Post
        author="Leandro Dias"
        content="Trazendo novo seguidor"
      />
      </main>
     </div>
   </Fragment>
  )
}

