input.onButtonPressed(Button.A, function () {
    スプライト.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    スプライト.change(LedSpriteProperty.X, 1)
})
let ライフ__変数 = 0
let ボール2: game.LedSprite = null
let ボール1: game.LedSprite = null
let スプライト: game.LedSprite = null
スプライト = game.createSprite(2, 5)
let _1tick = 500
game.setLife(3)
radio.setGroup(100)
basic.forever(function () {
    ボール1 = game.createSprite(randint(0, 5), 0)
    ボール2 = game.createSprite(randint(0, 5), -1)
    basic.pause(_1tick)
    if (ボール1.get(LedSpriteProperty.Y) != 5) {
        if (Math.randomBoolean()) {
        	
        }
    }
    while (ボール1.get(LedSpriteProperty.Y) < 4) {
        ボール1.change(LedSpriteProperty.Y, 1)
        basic.pause(_1tick)
    }
    while (ボール2.get(LedSpriteProperty.Y) < 4) {
        ボール2.change(LedSpriteProperty.Y, 1)
        basic.pause(_1tick)
    }
    if (スプライト.isTouching(ボール1)) {
        _1tick += -50
        game.addScore(1)
        radio.sendValue("tensuu", game.score())
        music.playTone(277, music.beat(BeatFraction.Half))
    } else {
        game.removeLife(1)
        ライフ__変数 += -1
        music.playTone(139, music.beat(BeatFraction.Half))
        if (ライフ__変数 == 0) {
            game.gameOver()
        }
    }
    if (スプライト.isTouching(ボール2)) {
        _1tick += -50
        game.addScore(1)
        radio.sendValue("tensuu", game.score())
        music.playTone(277, music.beat(BeatFraction.Half))
    } else {
        game.removeLife(1)
        ライフ__変数 += -1
        music.playTone(139, music.beat(BeatFraction.Half))
        if (ライフ__変数 == 0) {
            game.gameOver()
        }
    }
    ボール1.delete()
    ボール2.delete()
})
