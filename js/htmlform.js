const scriptURL = 'https://script.google.com/macros/s/AKfycbw2fy_RhXXbW0IpPuDH8ppiNx1ji06AzIJ-ooSQrxCsEHsued0/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
