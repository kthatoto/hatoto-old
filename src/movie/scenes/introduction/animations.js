export const nameAnimations = {
  fadein (width) {
    return {
      targets: '.name',
      translateX: { value: -width / 2 - 200, duration: 1 * 1000 }
    }
  },
  wave (option) {
    return Object.assign({
      targets: '.name__char',
      easing: 'gravity',
      translateY: -50,
      delay: (_, i) => {
        return i * 20
      },
      duration: 200
    }, option)
  },
  disappear () {
    return {
      offset: '-=350',
      targets: '.name__char.-leave',
      opacity: 0,
      duration: 300,
      delay: (_, i) => {
        return i * 20
      }
    }
  },
  rotateScale () {
    return {
      targets: '.name__char.-remain',
      scale: 2,
      rotate: 360
    }
  }
}
