let icon = document.getElementById('icon')
let dd = document.getElementsByClassName('dd')[0]
let isOpen = false

icon.addEventListener('click', () => {
    if(isOpen){
        dd.style.top = '-100%';
        isOpen = false
    }
    else{
        dd.style.top = '72px';
        isOpen = true
    }
})

let abc = document.getElementById('abc')
let dd2 = document.getElementsByClassName('dd2')[0]
let isOPen = false

abc.addEventListener('click', () => {
    if (isOPen) {
        dd2.style.display = 'none';
        isOPen = false
    }
    else{
        dd2.style.display = 'block';
        isOPen = true
    }
})

let xyz = document.getElementById('xyz')
let dd3 = document.getElementsByClassName('dd3')[0]
let isOPEn = false

xyz.addEventListener('click', () => {
    if (isOPEn) {
        dd3.style.display = 'none';
        isOPEn = false
    }
    else {
        dd3.style.display = 'block';
        isOPEn = true
    }
})
