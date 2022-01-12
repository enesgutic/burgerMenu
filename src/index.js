import $ from 'jquery'
import jQuery from 'jquery'

import '../public/styles/_mixins.scss'
import '../public/styles/_variables.scss'
import '../public/styles/style.scss'

jQuery (() => {
  
  $('.burgerMenu').on('click', () => {
    $('.mobileMenu').addClass('show');
  })
  
  $('.wrapLine').on('click', () => {
    $('.mobileMenu').removeClass('show');
  })
  
})