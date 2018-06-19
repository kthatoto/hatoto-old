export const nameAnimations = {
  fadein (width) {
    return {
      targets: '.name',
      translateX: { value: -width / 2 - 250, duration: 1 * 1000 }
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
      duration: 500
    }, option)
  },
  disappear () {
    return {
      offset: '-=450',
      targets: '.name__char.-leave',
      opacity: 0,
      duration: 200,
      delay: (_, i) => {
        return i * 20
      }
    }
  },
  rotateScale () {
    return {
      targets: '.name__char.-remain',
      fontSize: 60,
      rotate: 360,
      duration: 1500
    }
  },
  deleteDisappeared () {
    return {
      targets: ['.name__char.-leave', '.name__char.-dummy'],
      minWidth: 0,
      maxWidth: 0,
      duration: 1000,
      offset: '-=1500'
    }
  },
  appearClone (option) {
    return Object.assign({
      targets: '.name__char.-cloned',
      fontSize: 60,
      rotate: 360,
      duration: 1500,
      offset: '-=1000'
    }, option)
  },
  moveLogoPosition (width, height, posX, posY) {
    return {
      targets: '.name',
      translateX: -width + posX,
      translateY: -(height / 2 - posY - 25),
      duration: 1500
    }
  },
  changeWidth () {
    return {
      targets: '.name__chars',
      width: 200,
      offset: '-=1500'
    }
  }

}
