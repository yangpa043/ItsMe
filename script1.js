window.onload = function () {
    // 주제박스 이벤트
    var sbox = document.getElementById('sbox')
    var gbox = document.getElementById('gbox')
    var cbox = document.getElementById('cbox')

    sbox.addEventListener('mouseover', function () {
        sbox.style.backgroundColor = "rgb(230,230,230";
    })
    sbox.addEventListener('mouseout', function () {
        sbox.style.backgroundColor = "white";
    })
    gbox.addEventListener('mouseover', function () {
        gbox.style.backgroundColor = "rgb(230,230,230";
    })
    gbox.addEventListener('mouseout', function () {
        gbox.style.backgroundColor = "white";
    })
    cbox.addEventListener('mouseover', function () {
        cbox.style.backgroundColor = "rgb(230,230,230";
    })
    cbox.addEventListener('mouseout', function () {
        cbox.style.backgroundColor = "white";
    })
}