// search : 좌측 퀵 메뉴의 검색 버튼 클릭 시 검색창이 나타나고 재 클릭시 닫힘
const searchUnderButton = document.querySelector('.btn-search')
const searchTopButton = document.querySelector('.ico-search')
const searchBox = document.querySelector('.search-box')

searchTopButton.addEventListener('click', function () { 
  searchBox.classList.add('hide')
})
searchUnderButton.addEventListener('click', function () {
  searchBox.classList.remove('hide')
})

// totalmenu : 좌측 퀵 메뉴의 전체 메뉴 열기 버튼 클릭 시 나타나는 전체 메뉴  
const totalMenuButton = document.querySelector('.btn-total-menu')
const totalMenuCloseButton = document.querySelector('.btn-menu-close')
const totalMenu = document.querySelector('.total-menu')
const body = document.querySelector('body') 

totalMenuButton.addEventListener('click', function () {
  totalMenu.classList.add('open')
  body.classList.add('scroll-hidden')
})

totalMenuCloseButton.addEventListener('click', function () {
  totalMenu.classList.remove('open')
  body.classList.remove('scroll-hidden')
})

// scroll up : 우측 고정 버튼으로 클릭 시 화면 최상단으로 이동 
const scrollupButton = document.querySelector('.scroll-up')
scrollupButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0
  })
})

// swiper : swiper.js를 활용한 배너 슬라이드
new Swiper('.main-visual .swiper', {
  autoplay: {
    delay: 4000
  },
  loop: true,
  pagination: {
    el: '.main-visual .swiper .swiper-pagination',
    clickable: true
  }
})