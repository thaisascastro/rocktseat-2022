import { Fragment } from "react"

import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/58372020?v=4',
      name: 'Thaísa Castro',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph', content: 'Fala galeraa 👋<'
      },
      {
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link', content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2022-09-01 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/47450207?v=4',
      name: 'Leandro Dias',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph', content: 'Fala galeraa 👋<'
      },
      {
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link', content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2022-09-01 21:02:00')
  }
]

export function App() {

  return (
    <Fragment>
      <Header/>
      
     <div className={styles.wrapper}>
      <Sidebar/>
      <main>
     {posts.map(post => {
      return (
      <Post author={post.author} content={post.content} publishedAt={post.publishedAt}/>
      )
     })}
      </main>
     </div>
   </Fragment>
  )
}

