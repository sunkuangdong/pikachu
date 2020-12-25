const string = `
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.skin *::after,
.skin *::before {
    box-sizing: border-box;
}

.skin {
    position: relative;
    background-color: #ffe600;
    min-height: 50vh;
}

.nose {
    border: 10px solid red;
    border-color: red transparent transparent;
    border-bottom: none;
    width: 0;
    height: 0;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }

    33% {
        transform: rotate(8deg);
    }

    66% {
        transform: rotate(-8deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

.nose:hover {
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
}

.yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background-color: red;
}

.eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    border-radius: 50%;
    background-color: #2e2e2e;
}

.eye::after {
    content: "";
    border: 1px solid #000;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    left: 6px;
    top: 2px;
    animation: eyeLeft 2s infinite;
}

@keyframes eyeLeft {
    0% {
        left: 6px;
    }

    50% {
        left: 30px;
    }

    100% {
        left: 6px;
    }
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

.mouth {
    width: 150px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -75px;
}



.mouth .up .lip {
    position: absolute;
    border: 2px solid black;
    border-top: none;
    width: 75px;
    height: 20px;
    z-index: 9;
    background-color: #ffe600;
}

.mouth .up .lip.left {
    border-right: none;
    transform: rotate(-20deg);
    border-bottom-left-radius: 50% 100%;
}

.mouth .up .lip.right {
    border-left: none;
    right: 0;
    top: 0;
    transform: rotate(20deg);
    border-bottom-right-radius: 50% 100%;
}

.mouth .down {
    width: 100%;
    height: 230px;
    position: absolute;
    top: 8px;
    overflow: hidden;
}

.mouth .down .tongue {
    width: 120px;
    height: 460px;
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 82px/300px;
    background-color: #9b000a;
    overflow: hidden;
}

.mouth .down .tongue .tipTongue {
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: #ff485f;
}

.face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    border-radius: 50%;
    background-color: red;
}

.face.left {
    transform: translateX(-160px);
}

.face>img {
    position: absolute;
    top: 50%;
    left: 50%;
}

.face.left>img {
    transform: rotate(180deg);
    transform-origin: 0 0;
}

.face.right {
    transform: translateX(160px);
}

.face.right>img {
    transform: rotateX(180deg);
    transform-origin: 0 0;
}
`
export default string;