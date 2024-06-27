const secbox = document.querySelectorAll('#secbox>div')
const sp = document.querySelectorAll('.scroll')
const allbox = document.querySelectorAll('#box>div')
let flag = 1
// function clk(x) {
//     secbox.forEach((val) => {
//         val.firstElementChild.nextElementSibling.style.display = 'none'
//         allbox[x].style.margin='0px 0px'
//     })
//     sp[x].style.display = 'flex'
//     allbox[x].style.margin = '-3500px 0px'
// }
allbox.forEach((val) => {
    val.setAttribute('data-h', val.offsetTop)
})
window.addEventListener('scroll', () => {
    let st = window.scrollY
    allbox.forEach((val, i) => {
        if ((st + 700) > (val.getAttribute('data-h'))) {
            secbox.forEach((item, i) => {
                sp[i].style.display = 'none'
            })
            sp[i].style.display = 'flex'
        }
    })
})