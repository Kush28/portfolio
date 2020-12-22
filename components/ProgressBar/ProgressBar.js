import React from 'react'

export default function ProgressBar({ progress, bgClass }) {
  return (
    <div className="shadow w-full bg-lightgray rounded-full">
      <div
        className={`${bgClass} text-xs leading-none py-2 rounded-full`}
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
