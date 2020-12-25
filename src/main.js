import str from './css'
let n = 1
demo1.innerText = str.substr(0, n)
demo2.innerHTML = str.substr(0, n)
let timer = setInterval(() => {
    if (n > str.length) {
        window.clearInterval(timer)
        return;
    }
    n += 1
    demo1.innerText = str.substr(0, n)
    demo2.innerHTML = str.substr(0, n)
    demo1.scrollTop = 999999999
}, 1)
btnPause.onclick = () => {
    window.clearInterval(timer)
}