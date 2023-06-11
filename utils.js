const mainEl = document.getElementById('main')
const labCtn = document.getElementById('label-container')
const inputEl = document.getElementById('email')
const htmlGenerator = (email) => {
   const submit = `
    <section id="top-section" class="top">
        <img id="success-img" class="success-img" src="./assets/images/icon-list.svg" />
    </section>
    <section id="bottom-section" class="bottom">
        <div>
            <h1 class="suc-title">Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to
            <span class="email">${email}</span>. 
            Please open it and click the button inside to confirm your 
            subscription.</p>
        </div>
        <button id="dismiss-btn">Dismiss message</button>
    </section>
`
   if (isEmail(email)) {
      mainEl.classList.add('suc-main')
      mainEl.style.flexDirection = 'column'

      return submit
   } else {
      labCtn.innerHTML += '<span class="red">Valid email required</span>'
      inputEl.classList.add('red-email')
   }
   return initial
}

const render = (email) => {
   mainEl.innerHTML = htmlGenerator(email)
}

function isEmail(email) {
   // Regular expression to match valid email addresses
   const exp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+")){1,64}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

   // Return true if the string matches the regular expression
   return exp.test(email)
}

export { render }
