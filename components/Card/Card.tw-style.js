module.exports = {
  default: {
    wrapper: 'flex flex-col mb-default sm:mb-0',
    imgWrapper: 'h-200 overflow-hidden rounded-md',
    img: 'h-full w-full object-cover transition duration-500 ease-in-out',
    contentWrapper: 'pt-paragraph relative flex-grow flex flex-col',
    title: 'text-xl mb-paragraph',
    text: 'mb-paragraph',
    arrow: 'mt-auto transition-all duration-100 ease-in-out',
  },
  featured: {
    wrapper: 'flex flex-col sm:flex-row',
    imgWrapper: 'h-200 md:h-250 lg:h-300 sm:w-1/2 overflow-hidden rounded-md',
    img: 'h-full w-full object-cover transition duration-500 ease-in-out',
    contentWrapper: 'sm:w-1/2 pt-paragraph sm:pt-0 sm:px-paragraph ',
    title: 'text-xl md:text-2xl mb-paragraph',
    text: 'text mb-paragraph text-sm md:text-base',
    arrow: 'arrow transition-all duration-100 ease-in-out',
  },
}
