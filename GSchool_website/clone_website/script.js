window.onload = function () {

    document.getElementById('XMas').addEventListener('click', function () {
        document.getElementById('case1').style.backgroundColor = ('green')
        document.getElementById('case2').style.backgroundColor = ('rgb(170,40,40)')
        document.getElementById('case3').style.backgroundColor = ('green')
        document.getElementById('footer').style.backgroundColor = ('rgb(170,40,40)')
    });

    document.getElementById('XMsg').addEventListener('click', function () {
        document.getElementById('case1').style.backgroundColor = ('#2C44AA')
        document.getElementById('case2').style.backgroundColor = ('#001255')
        document.getElementById('case3').style.backgroundColor = ('#2C44AA')
        document.getElementById('footer').style.backgroundColor = ('#001255')
    });
}