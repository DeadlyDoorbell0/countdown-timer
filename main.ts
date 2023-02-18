let counter = 0
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(10)
    basic.pause(1000)
    basic.showNumber(9)
    basic.pause(1000)
    basic.showNumber(8)
    basic.pause(1000)
    basic.showNumber(7)
    basic.pause(1000)
    basic.showNumber(6)
    basic.pause(1000)
    basic.showNumber(5)
    basic.pause(1000)
    basic.showNumber(4)
    basic.pause(1000)
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.showNumber(10)
        basic.pause(1000)
        counter += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    counter = 10
    for (let index = 0; index < 10; index++) {
        basic.showNumber(counter)
        basic.pause(1000)
        counter += -1
    }
})
