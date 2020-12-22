import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Button from '../Button/Button'
import styles from './Card.tw-style'

export default function Card({ variant, title, desc, url, image }) {
  const twStyle = styles[variant] || styles.default
  return (
    <Button to={url} className={twStyle.wrapper}>
      <div className={twStyle.imgWrapper}>
        <img className={twStyle.img} alt={title} src={image} />
      </div>
      <div className={twStyle.contentWrapper}>
        <h2 className={twStyle.title}>{title}</h2>
        <p className={twStyle.text}>{desc}</p>
        <p className={twStyle.arrow}>
          <HiArrowNarrowRight size="2em" />
        </p>
      </div>
    </Button>
  )
}
