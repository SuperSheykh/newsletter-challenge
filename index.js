import { render } from './utils.js'
const subBtn = document.getElementById('sub-btn')
const disBtn = document.getElementById('dismiss-btn')
const newsletterFormEl = document.getElementById('newsletter-form')

const sampleEmail = 'bahsekousidi@gmail.com'

subBtn.addEventListener('click', (e) => {
   e.preventDefault()
   const formData = new FormData(newsletterFormEl)
   const email = formData.get('email')
   console.log(email)

   render(email)
})

disBtn.addEventListener('click', (e) => {
   e.preventDefault()
   render()
})
