const name = document.getElementById('name')
const title = document.getElementById('title')
const profile = document.getElementById('profile')
const signature = document.getElementById('signature')
const jobTitle = document.getElementById('job-title')
const getAward = document.getElementById('get-award')
const page = document.getElementById('page')
const cert = document.getElementById('cert')

profile.addEventListener('submit', (e) => {
  e.preventDefault
})

name.addEventListener('input', () => {
  signature.textContent = name.value
})

title.addEventListener('input', () => {
  jobTitle.textContent = title.value
})

getAward.addEventListener('click', () => {
  page.classList.toggle("hidden")
  cert.classList.toggle("hidden")
})

