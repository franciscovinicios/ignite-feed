import styles from './style.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar'

export function Siderbar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=40"
      />

      <div className={styles.profile}>
        <Avatar
          src="https://github.com/franciscovinicios.png"
        />
        <strong>Francisco Vinicios</strong>
        <span>Web Developer </span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}