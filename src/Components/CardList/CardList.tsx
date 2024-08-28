import styles from "./cardList.module.css"
import Card from "../Card/Card"

import React from 'react'

const CardList = () => {
  return (
    <div>
        <h1>Recent Posts</h1>
        <div>Posts
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default CardList;

 