module.exports = {
  default: {
    wrapper: '',
    imgWrapper: 'min-h-postCard',
    img: 'h-full w-auto object-cover rounded-md',
    contentWrapper: 'mt-paragraph',
    title: 'text-xl mb-paragraph',
    text: 'hidden mb-paragraph',
    arrow: 'arrow',
  },
  featured: {
    wrapper: 'flex',
    imgWrapper: 'min-h-featureCard w-1/2',
    img: 'h-full w-auto object-cover rounded-md',
    contentWrapper: 'w-1/2 mx-paragraph',
    title: 'text-2xl mb-paragraph',
    text: 'text mb-paragraph hidden sm:block',
    arrow: 'arrow',
  },
}
