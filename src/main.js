import str from './css'

const player = {
    n: 1,
    timer: undefined,
    time: 50,
    ui: {
        demo1: document.querySelector('#demo1'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        "#btnPause": 'pause',
        "#btnPlay": 'play',
        "#btnSlow": 'slow',
        "#btnNormal": 'normal',
        "#btnFast": 'fast',
    },
    init: () => {
        player.ui.demo1.innerText = str.substr(0, player.n)
        player.ui.demo2.innerHTML = str.substr(0, player.n)
        player.bindEvents()
        player.play()
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        if (player.n > str.length) {
            window.clearInterval(player.timer)
            return;
        }
        player.n += 1
        player.ui.demo1.innerText = str.substr(0, player.n)
        player.ui.demo2.innerHTML = str.substr(0, player.n)
        player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight
    },
    play: () => {
        window.clearInterval(player.timer)
        player.timer = setInterval(player.run, player.time)
    },
    clear: () => {
        window.clearInterval(player.timer)
    },
    pause: () => {
        window.clearInterval(player.timer)
    },
    slow: () => {
        player.pause()
        player.time = 300
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    }
}

player.init()