import { Fragment } from "react"

import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

export function App() {

  return (
    <Fragment>
      <Header/>
      
     <div className={styles.wrapper}>
      <Sidebar/>
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

