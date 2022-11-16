//form
//dog results form validation
const dogResultsList = document.getElementById('dog_results')
new URLSearchParams(window.location.search).forEach((value , name) => {
    dogResultsList.append(`${name}: ${value}`)
    dogResultsList.append(document.createElement('br'))
})
//cat results form validation
