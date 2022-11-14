basic.forever(function () {
    led.setBrightness(0)
    if (input.lightLevel() >= led.brightness()) {
        led.setBrightness(255 - input.lightLevel())
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
