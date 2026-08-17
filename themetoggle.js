function themeToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
document.getElementById("toggle").addEventListener('change', function () {
    localStorage.setItem('dark-mode', this.checked);
    if (this.checked) {
        element.classList.add('dark-mode')
        document.getElementById("toggle").textContent = "🌙"

    } else {
        element.classList.remove('dark-mode')
        document.getElementById("toggle").textContent = "☀️"
    }
    console.log (this.checked)
});
if (localStorage.getItem('dark-mode')) {
    element.classList.add('dark-mode');
}