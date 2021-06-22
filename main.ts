input.onButtonPressed(Button.A, function () {
    スプライト.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    スプライト.change(LedSpriteProperty.X, 1)
})
let ライフ__変数 = 0
let ボール1: game.LedSprite = null
let スプライト: game.LedSprite = null
スプライト = game.createSprite(2, 5)
let _1tick = 500
game.setLife(3)
basic.forever(function () {
    ボール1 = game.createSprite(randint(0, 5), 0)
    basic.pause(_1tick)
    if (ボール1.get(LedSpriteProperty.Y) != 5) {
        if (Math.randomBoolean()) {
            _1tick += 10
        }
    }
    while (ボール1.get(LedSpriteProperty.Y) < 4) {
        ボール1.change(LedSpriteProperty.Y, 1)
        basic.pause(_1tick)
    }
    if (スプライト.isTouching(ボール1)) {
        if (スプライト.get(LedSpriteProperty.X) == ボール1.get(LedSpriteProperty.X)) {
            _1tick += -50
            game.addScore(1)
            music.playTone(277, music.beat(BeatFraction.Half))
        }
    } else {
        game.removeLife(1)
        ライフ__変数 += -1
        music.playTone(139, music.beat(BeatFraction.Half))
        if (ライフ__変数 == 0) {
            game.gameOver()
        }
    }
    ボール1.delete()
})
