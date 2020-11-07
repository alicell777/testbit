let Light = 0
input.onButtonPressed(Button.A, function () {
    music.rest(music.beat(BeatFraction.Sixteenth))
    Light = input.lightLevel()
    if (Light < 100) {
        serial.writeLine("お客さんが来ました。")
        LED()
        Music()
    } else {
        serial.writeLine("退店しました。")
    }
})
// 音鳴らす処理
function Music () {
    let half = BeatFraction.Half;
    let whole = BeatFraction.Whole;
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
}
// 光らせる処理
function LED () {
    basic.showIcon(IconNames.Happy)
}
