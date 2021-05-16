import React from 'react'
import { CSSTransition } from 'react-transition-group'
import MobileNavTransitionStyles from '../styles/mobilenav.module.scss'

const MobileNavTransition = ({ isOpen, children }) => (
  <CSSTransition in={isOpen} timeout={200} classNames={MobileNavTransitionStyles} unmountOnExit>
    {children}
  </CSSTransition>
)

export default MobileNavTransition
