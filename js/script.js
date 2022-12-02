
const dark = document.querySelector('.dark');
const light = document.querySelector('.light');
const night = document.querySelector('.night');
const sideBar = document.querySelector('.sidebar');

dark.addEventListener('click', () => {
    sideBar.className = "sidebar"
})
light.addEventListener('click', () => {
    sideBar.className = "sidebar light"
})
night.addEventListener('click', () => {
    sideBar.className = "sidebar night"
})
