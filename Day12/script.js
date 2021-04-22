const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

// function toggleSwitcher() {
//     toggle.parentNode.classList.toggle('active')
// }
