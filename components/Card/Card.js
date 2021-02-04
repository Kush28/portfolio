import React from 'react'
import classNames from 'classnames'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Button from '../Button/Button'
import styles from './Card.tw-style'
import css from './Card.module.scss'

export default function Card({ variant, title, desc, url, image }) {
  const twStyle = styles[variant] || styles.default
  return (
    <Button to={url} className={classNames(twStyle.wrapper, css.cardWrapper)}>
      <div className={twStyle.imgWrapper}>
        <img className={twStyle.img} alt={title} src={image} />
      </div>
      <div className={twStyle.contentWrapper}>
        <h2 className={classNames(twStyle.title, css.title)}>{title}</h2>
        <p className={classNames(twStyle.text, css.desc)}>{desc}</p>
        <p className={classNames(twStyle.arrow, css.arrow)}>
          <HiArrowNarrowRight size="2em" />
        </p>
      </div>
    </Button>
  )
}
