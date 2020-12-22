module.exports = {
  default: {
    wrapper: '',
    imgWrapper: 'h-100 md:h-200 min-h-100 overflow-hidden rounded-md',
    img: 'h-full w-full object-cover transition duration-500 ease-in-out',
    contentWrapper: 'pt-paragraph',
    title: 'md:text-xl mb-paragraph',
    text: 'hidden mb-paragraph',
    arrow: 'arrow transition-all duration-100 ease-in-out',
  },
  featured: {
    wrapper: 'flex',
    imgWrapper: 'min-h-100 sm:min-h-200 w-1/2 h-200 sm:h-auto max-h-300 overflow-hidden rounded-md',
    img: 'h-full w-auto object-cover transition duration-500 ease-in-out',
    contentWrapper: 'w-1/2 px-paragraph',
    title: 'text-xl md:text-2xl mb-paragraph',
    text: 'text mb-paragraph hidden sm:block',
    arrow: 'arrow transition-all duration-100 ease-in-out',
  },
}
