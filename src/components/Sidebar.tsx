import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1654455103120-e33ac58ab56a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/72226013?v=4" />
        <strong>Rafael Manfrim</strong>
        <span>Web developer</span>
      </div>
      <footer>
        <a href="#"><PencilLine size={20} />  Editar seu perfil</a>
      </footer>
    </aside>
  )
}