import React from 'react'
import PropTypes, { number, string } from 'prop-types'
import MImage from 'next/image'

export default function Image({ src, height, width, alt, className }) {
  return <MImage src={src} className={className} height={height} width={width} alt={alt} />
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([number, string]),
  width: PropTypes.number,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Image.defaultProps = {
  height: '100%',
  width: '100%',
  className: '',
}
