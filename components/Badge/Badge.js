import React from 'react'
import { FaAngular, FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { ImHtmlFive2 } from 'react-icons/im'
import { SiNextDotJs } from 'react-icons/si'
import ProgressBar from '../ProgressBar/ProgressBar'

function getSkillDetails(skill) {
  switch (skill) {
    case 'react':
      return {
        label: 'ReactJS',
        color: 'bg-alternate',
        progress: 99,
        icon: <FaReact size="2em" />,
      }
    case 'angular':
      return {
        label: 'Angular',
        color: 'bg-secondary',
        progress: 75,
        icon: <FaAngular size="2em" />,
      }
    case 'node':
      return {
        label: 'NodeJS',
        color: 'bg-primary',
        progress: 70,
        icon: <FaNodeJs size="2em" />,
      }
    case 'html':
      return {
        label: 'HTML',
        color: 'bg-alternate',
        progress: 99,
        icon: <ImHtmlFive2 size="2em" />,
      }
    case 'css':
      return {
        label: 'CSS',
        color: 'bg-secondary',
        progress: 85,
        icon: <FaCss3Alt size="2em" />,
      }
    case 'nextjs':
      return {
        label: 'NextJS',
        color: 'bg-gray',
        progress: 95,
        icon: <SiNextDotJs size="2em" />,
      }
    default:
      return {
        color: 'bg-alternate',
        progress: 0,
      }
  }
}

export default function Badge({ skill }) {
  const { label, color, progress, icon } = getSkillDetails(skill)
  return (
    <div className="mb-paragraph">
      <div className="flex justify-between mb-item">
        <div className="flex items-center">
          {icon}
          <p className="ml-2">{label}</p>
        </div>
        <div>{progress}%</div>
      </div>
      <ProgressBar progress={progress} bgClass={color} />
    </div>
  )
}
