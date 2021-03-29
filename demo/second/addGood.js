let addBtn = document.querySelector('.add-good-btn')

function showToast() {
    let toast = document.createElement('div')
    let body = document.querySelector('body')
    body.appendChild(toast)
}

addBtn.onclick = showToast