input.onButtonPressed(Button.A, function () {
    music.rest(music.beat(BeatFraction.Sixteenth))
    serial.writeLine("お客さんが来ました。")
    Music()
})
// 入店
function Music () {
    let half = BeatFraction.Half;
    let whole = BeatFraction.Whole;
    basic.showIcon(IconNames.Happy)
    pins.analogSetPitchVolume(10)
    music.playTone(440, music.beat(half))
    music.playTone(349, music.beat(half))
    music.playTone(262, music.beat(half))
    music.playTone(349, music.beat(half))
    music.playTone(392, music.beat(half))
    music.playTone(523, music.beat(whole))
    music.playTone(523, music.beat(half))
    music.playTone(392, music.beat(half))
    music.playTone(440, music.beat(half))
    music.playTone(392, music.beat(half))
    music.playTone(262, music.beat(half))
    music.playTone(349, music.beat(whole))
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    serial.writeLine("お客さんが退店しました。")
    basic.clearScreen()
})
let Light = 0
let Count = true
