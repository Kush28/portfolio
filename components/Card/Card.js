import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Button from '../Button/Button'
import styles from './Card.tw-style'

export default function Card({ variant }) {
  const twStyle = styles[variant] || styles.default
  return (
    <Button to="/test" className={twStyle.wrapper}>
      <div className={twStyle.imgWrapper}>
        <img
          className={twStyle.img}
          alt="10 pointers for a clean code"
          src="https://res.cloudinary.com/doxldod5y/image/upload/v1608581639/portfolio/posts/writing-quality-code/image-blog-what-code-quality_sw7ipk.jpg"
        />
      </div>
      <div className={twStyle.contentWrapper}>
        <h2 className={twStyle.title}>10 pointers for a clean code</h2>
        <p className={twStyle.text}>
          Code quality is as essential as having a software which is functional. Here are 10 simple
          things you can do to make your code clean as a whistle.
        </p>
        <p className={twStyle.arrow}>
          <HiArrowNarrowRight size="2em" />
        </p>
      </div>
    </Button>
  )
}
