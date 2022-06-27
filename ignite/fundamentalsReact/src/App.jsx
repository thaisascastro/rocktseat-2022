import { Fragment } from "react"
import Post from "./Post"

export function App() {

  return (
    <Fragment>
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

