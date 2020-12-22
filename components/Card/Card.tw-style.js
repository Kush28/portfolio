module.exports = {
  default: {
    wrapper: 'max-h-200',
    imgWrapper: 'h-100 md:h-200 min-h-100',
    img: 'h-full w-full object-cover rounded-md',
    contentWrapper: 'pt-paragraph',
    title: 'md:text-xl mb-paragraph',
    text: 'hidden mb-paragraph',
    arrow: 'arrow',
  },
  featured: {
    wrapper: 'flex max-h-300',
    imgWrapper: 'min-h-100 sm:min-h-200 w-1/2 h-200 sm:h-auto',
    img: 'h-full w-auto object-cover rounded-md',
    contentWrapper: 'w-1/2 px-paragraph',
    title: 'text-xl md:text-2xl mb-paragraph',
    text: 'text mb-paragraph hidden sm:block',
    arrow: 'arrow',
  },
}
