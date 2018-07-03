export const animations = {
  wave (option) {
    return Object.assign({
      easing: 'gravity',
      translateY: -20,
      delay: (_, i) => {
        return i * 20
      },
      duration: 500
    }, option)
  },
  underline (option) {
    return Object.assign({
      underlineWidth: '100%',
      round: 1,
      easing: 'linear',
      duration: 1000,
      offset: '-=300'
    }, option)
  }
}
