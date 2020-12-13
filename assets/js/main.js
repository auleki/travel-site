const menuToggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')
const trailer = document.querySelector('.trailer')
const play = document.querySelector('.play')
const close = document.querySelector('.close')

const toggleMenu = () => {
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
}
const videoToggle = () => {
  trailer.classList.toggle('active')
  const video = document.querySelector('video')
  video.currentTime = 0
  video.pause()
}

play.addEventListener('click', videoToggle)
menuToggle.addEventListener('click', toggleMenu)
close.addEventListener('click', videoToggle)

