const illustCoffee = document.querySelector('.coffee')
const illustPlate = document.querySelector('.plate')
const illustSticks = document.querySelector('.sticks')
const illustBgOne = document.querySelector('.bg-1')
const illustBgTwo = document.querySelector('.bg-2')
const illustBgThree = document.querySelector('.bg-3')

const WINDOW_HEIGHT = document.documentElement.clientHeight
const WINDOW_WIDTH = document.documentElement.clientWidth

document.body.style.overflow = "hidden"

document.addEventListener('mousemove', moveElements, false)

function moveElements(e) {


    let posX = 0
    let posY = 0

    let diffX = 0
    let diffY = 0

    getMousePos(e)
    

    getDifference(posX, Math.round(WINDOW_WIDTH/2),posY, Math.round(WINDOW_HEIGHT/2))

    move(diffX*2, diffY*2)


    function getMousePos(e) {
        posX = e.pageX
        posY = e.pageY
    }

    function getDifference(xMouse,xCenter,yMouse,yCenter) {
        diffX = xMouse-xCenter
        diffY = yMouse-yCenter
    }

    

    function move(x, y) {
        const ease = 'rough'
        gsap.to(illustCoffee, {x: x*0.5, y: y*.45, ease: ease, duration: 4 })
        gsap.to(illustCoffee, {x: x*0.4, y: y*.4, ease: ease, duration: 4 })
        gsap.to(illustPlate, {x: x*0.41, y: y*0.24, ease: ease, duration: 4 })
        gsap.to(illustSticks, {x: x*0.3, y: y*0.4, ease: ease, duration: 4 })
        gsap.to(illustBgOne, {x: x*0.1, y: y*0.05,ease: ease, duration: 4 })
        gsap.to(illustBgTwo, {x: x*0.05, y: y*0.1, ease: ease, duration: 4 })
        gsap.to(illustBgThree, {x: x*0.09, y: y*0.1, ease: ease, duration: 4 })
    }
}






