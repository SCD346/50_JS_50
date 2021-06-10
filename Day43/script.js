const ratings = document.querySelectorAll('.rating')
const send = document.querySelector('#send')
const panel = document.querySelector('#panel')

panel.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
       removeActive()
        e.target.parentNode.classList.add('active')
    }
})

// Using a ForLoop
function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}

// Using a ForEach
// function removeActive() {
//    ratings.forEach(rating => {
//     rating.classList.remove('active')
//    });
// }