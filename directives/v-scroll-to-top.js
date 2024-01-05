import Vue from 'vue'

Vue.directive('scroll-to-top', {
  inserted: (el) => {
    const top = window.scrollY
    if (top >= 100) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
    el.addEventListener('click', () => {
      window.scroll({ top: 0, behavior: 'smooth' })
    })
  },
})
