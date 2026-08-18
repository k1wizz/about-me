function themeToggle() {
    darkmode = localStorage.getItem('dark-mode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
}

let darkmode = localStorage.getItem('dark-mode')
// const themeToggle = document.getElementById('toggle')

const enableDarkmode = () => {
    document.body.classList.add('dark-mode')
    localStorage.setItem('dark-mode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('dark-mode')
    localStorage.setItem('dark-mode', null)
}

if (darkmode === "active") enableDarkmode()
