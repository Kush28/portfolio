import React from 'react'
import { FaAngular, FaCss3Alt, FaNodeJs, FaReact } from 'react-icons/fa'
import { ImHtmlFive2 } from 'react-icons/im'
import { SiNextDotJs, SiRedux } from 'react-icons/si'
import ProgressBar from '../ProgressBar/ProgressBar'

function getSkillDetails(skill) {
  switch (skill) {
    case 'react':
      return {
        label: 'ReactJS',
        color: '#5AD2F3',
        progress: 99,
        icon: <FaReact size="2em" color="#5AD2F3" />,
      }
    case 'angular':
      return {
        label: 'Angular',
        color: '#DD0031',
        progress: 75,
        icon: <FaAngular size="2em" color="DD0031" />,
      }
    case 'node':
      return {
        label: 'NodeJS',
        color: '#689F63',
        progress: 70,
        icon: <FaNodeJs size="2em" color="#689F63" />,
      }
    case 'html':
      return {
        label: 'HTML',
        color: '#F06529',
        progress: 99,
        icon: <ImHtmlFive2 size="2em" color="#F06529" />,
      }
    case 'css':
      return {
        label: 'CSS',
        color: '#1E90FF',
        progress: 85,
        icon: <FaCss3Alt size="2em" color="#1E90FF" />,
      }
    case 'nextjs':
      return {
        label: 'NextJS',
        color: 'bg-gray',
        progress: 95,
        icon: <SiNextDotJs size="2em" />,
      }
    case 'redux':
      return {
        label: 'Redux',
        color: 'bg-violet',
        progress: 95,
        icon: <SiRedux size="2em" color="#8E44AD" />,
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
        {/* <div>{progress}%</div> */}
      </div>
      {/* <ProgressBar progress={progress} bgClass={color} /> */}
    </div>
  )
}
