const smallCups = document.querySelectorAll('.cup-small')
const liters = document.querySelector('#liters')
const percentage = document.querySelector('.percentage')
const remained = document.querySelector('.remained')

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index))
})

function highlightCups(index) {
    smallCups.forEach((cup, index2) => {
        if(index2 <= index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
}
