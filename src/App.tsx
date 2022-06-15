import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import { Post } from "./components/Post";

interface Author {
  name: string
  role: string
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

interface PostData {
  id: number
  author: Author
  content: Content[]
  publishedAt: Date
}

const posts: PostData[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    publishedAt: new Date('2022-05-03 20:00:00'),
    content: [
      {
        type: "paragraph",
        content: 'Fala galeraa 👋'
      },
      {
        type: "paragraph",
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: "link",
        content: '👉 diego3g/rocketseat'
      },
      {
        type: "link",
        content: '#rocketseat'
      }
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat"
    },
    publishedAt: new Date('2022-06-06 20:00:00'),
    content: [
      {
        type: "paragraph",
        content: 'Fala galeraa 👋'
      },
      {
        type: "paragraph",
        content: 'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi earum architecto eligendi vero autem facilis voluptatem placeat excepturi vel tempore inventore minus, incidunt, a consequatur delectus rem hic sapiente quos!'
      },
      {
        type: "link",
        content: '👉 maykbrito/rocketseat'
      },
      {
        type: "paragraph",
        content: 'Até mais'
      }
    ]
  }
]

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}
