import { Fragment } from "react"
import { Header } from "./components/Header";
import Post from "./Post"
import './global.css';

export function App() {

  return (
    <Fragment>
      <Header/>
      <Post
        author="Thaísa Castro"
        content="Trazendo as propriedade dentro de um objeto"
        />
      <Post
        author="Leandro Dias"
        content="Trazendo novo seguidor"
      />
   </Fragment>
  )
}

