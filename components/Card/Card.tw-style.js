module.exports = {
  default: {
    wrapper: 'max-h-200',
    imgWrapper: 'min-h-100',
    img: 'h-auto w-auto object-cover rounded-md',
    contentWrapper: 'mt-paragraph',
    title: 'text-xl mb-paragraph',
    text: 'hidden mb-paragraph',
    arrow: 'arrow',
  },
  featured: {
    wrapper: 'flex max-h-300',
    imgWrapper: 'min-h-100 sm:min-h-200 w-1/2 h-200 sm:h-auto',
    img: 'h-full w-auto object-cover rounded-md',
    contentWrapper: 'w-1/2 mx-paragraph',
    title: 'text-2xl mb-paragraph',
    text: 'text mb-paragraph hidden sm:block',
    arrow: 'arrow',
  },
}
