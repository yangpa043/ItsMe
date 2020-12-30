window.onload = function () {
    var contain = document.querySelector('.contain')
    var page = 0
    document.querySelector('.right').addEventListener('click', function () {
        if (page > -4500) {
            page = page - 500
            contain.style.transform = 'translate(' + page + 'px)'
        }
    })
    document.querySelector('.left').addEventListener('click', function () {
        if (page < 0) {
            page = page + 500
            contain.style.transform = 'translate(' + page + 'px)'
        }
    })
    var contain2 = document.querySelector('.contain2')
    var page2 = 0
    document.querySelector('.right2').addEventListener('click', function () {
        if (page2 > -6500) {
            page2 = page2 - 500
            contain2.style.transform = 'translate(' + page2 + 'px)'
        }
    })
    document.querySelector('.left2').addEventListener('click', function () {
        if (page2 < 0) {
            page2 = page2 + 500
            contain2.style.transform = 'translate(' + page2 + 'px)'
        }
    })
}