// console.log('Client side jacascript file is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

message1.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    message1.textContent = 'Loading'
    message2.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if ('submit' && data.error){
            message1.textContent = 'Error'
            message2.textContent = data.error
        }else {
            message1.textContent = data[0].location
            message2.textContent = data[0].forecast  
        }
    })    
})
})