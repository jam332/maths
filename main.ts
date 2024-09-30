input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
        radio.setGroup(255)
        basic.showString("take the L looser")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(5)
    basic.showString("right")
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Tortoise)
    basic.showIcon(IconNames.Confused)
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Chessboard)
    basic.showString("smart")
    basic.showString("smart")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("rong")
    basic.showString("2.5+2.5=?")
    basic.showString("try agen")
    basic.showString("noob")
    basic.showString("face plant")
})
for (let index = 0; index < 2; index++) {
    basic.showString("2.5+2.5=?")
}
