const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        //get XY coords for the button on the page
        const x = e.clientX
        const y = e.clientY
        // console.log(x, y)

        //get XY coords for inside of the button
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        // console.log(buttonTop, buttonLeft)

        //calculate the coord inside button in relation to page
        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        // console.log(xInside, yInside)

        //create span element and add the internal coords
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        //add the circle span to the button
        this.appendChild(circle)

        //wait, then remove the circle span
        setTimeout(() => circle.classList.add('circle'), 500)
    })
})