import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
export default function Footer(props) {
  return (
    <nav className='bg-blue-gradient'>
      <ul className='nav-ul'>
        <li className='nav-item'>
          <Link to="/pedidos" className={props.active == 'pedidos' ? "icon-background-circle link active" : "icon-background-circle link"}>
            <i className="bi bi-list-ul"></i>
          </Link>
          Pedidos
        </li>
      </ul>
    </nav>
  )
}
