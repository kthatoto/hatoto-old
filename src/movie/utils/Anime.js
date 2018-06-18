import anime from 'animejs'
anime.easings['gravity'] = (t) => {
  return Math.pow(Math.sin(t * 3), 3)
}
export default anime
