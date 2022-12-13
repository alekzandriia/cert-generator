const name = document.getElementById('name')
const title = document.getElementById('title')
const profile = document.getElementById('profile')
const signature = document.getElementById('signature')
const jobTitle = document.getElementById('job-title')

profile.addEventListener('submit', (e) => {
  e.preventDefault
  signature.textContent = title.value
  
})