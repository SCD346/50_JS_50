const APIURL = 'https://api.github.com/users/'

getUser('scd346')

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)

        console.log(data)
    } catch(err) {
        console.log(err)
    }
}