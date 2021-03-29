let writeHtml = (goodData) => {
    let html = `
    <div class="good">
        <div class="good-info">
            <img src="${goodData.url}" alt="${goodData.alt}" class="good-image">
            <div class="good-name-${goodData.id}">${goodData.name}</div>
        </div>
        <div class="good-price">
            <span>单价：￥</span>
            <input type="number" name="good-price-${goodData.id}" value="${goodData.price}">
        </div>
        <div class="good-number">
            数量：<input type="number" name="good-number-${goodData.id}" value="${goodData.number}" />
        </div>
        <div class="good-total">
            <span>￥</span><span class="good-total-${goodData.id}">${goodData.total}</span>
        </div>
    </div>`
    return html
}

let getHtml = (data) => {
    let html = ''
    for (n in data) {
        html += writeHtml(data[n])
    }
    return html
}

let init = function () {
    resetTotalPrice(shoppingList)
    document.querySelector('.shopping-list').innerHTML = getHtml(shoppingList)
}()

let setWatch = (data) => {
    for (n in data) {
        watchGoodPrice(n)
        watchGoodNumber(n)
    }
}

function watchGoodPrice(key) {
    let price = document.querySelector(`input[name="good-price-${shoppingList[key].id}"]`)
    price.addEventListener('change', function () {
        shoppingList[key].price = this.value
        resetGoodTotal(key)
    })
}

function watchGoodNumber(key) {
    let number = document.querySelector(`input[name="good-number-${shoppingList[key].id}"]`)
    number.addEventListener('change', function () {
        shoppingList[key].number = this.value
        resetGoodTotal(key)
    })
}

function resetGoodTotal(key) {
    let total = document.querySelector(`.good-total-${shoppingList[key].id}`)
    shoppingList[key].total = shoppingList[key].price * shoppingList[key].number
    total.innerText = shoppingList[key].total
    resetTotalPrice(shoppingList)
}

function resetTotalPrice(data) {
    let totalPrice = document.querySelector('.total-price')
    let total = 0
    for (n in data) {
        total += data[n].total
    }
    totalPrice.innerText = total
}

setWatch(shoppingList)