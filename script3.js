window.onload = function () {
    var contain = document.querySelector('.contain')
    var page = 0
    document.querySelector('.right').addEventListener('click', function () {
        if (page > -6500) {
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
}