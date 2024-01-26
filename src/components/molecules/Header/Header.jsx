import React from 'react'
import "./Header.css"
import MenuSVG from '../../atoms/Icons/MenuSVG'

export default function Header() {
  return (
    <header className=" header">
        <span className="date">
            Segunda-feira, 03 de janeiro
        </span>
        <MenuSVG/>
    </header>
  )
}
