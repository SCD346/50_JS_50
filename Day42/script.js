const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const data = await res.json()

    console.log(data)
}