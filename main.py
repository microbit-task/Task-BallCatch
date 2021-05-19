def on_button_pressed_a():
    スプライト.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    スプライト.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

ライフ__変数 = 0
ボール2: game.LedSprite = None
ボール1: game.LedSprite = None
スプライト: game.LedSprite = None
スプライト = game.create_sprite(2, 5)
_1tick = 500
game.set_life(3)
radio.set_group(100)

def on_forever():
    global ボール1, ボール2, _1tick, ライフ__変数
    ボール1 = game.create_sprite(randint(0, 5), 0)
    ボール2 = game.create_sprite(randint(0, 5), -1)
    basic.pause(_1tick)
    if ボール1.get(LedSpriteProperty.Y) != 5:
        if Math.random_boolean():
            pass
    while ボール1.get(LedSpriteProperty.Y) < 4:
        ボール1.change(LedSpriteProperty.Y, 1)
        basic.pause(_1tick)
    while ボール2.get(LedSpriteProperty.Y) < 4:
        ボール2.change(LedSpriteProperty.Y, 1)
        basic.pause(_1tick)
    if スプライト.is_touching(ボール1):
        _1tick += -50
        game.add_score(1)
        radio.send_value("tensuu", game.score())
        music.play_tone(277, music.beat(BeatFraction.HALF))
    else:
        game.remove_life(1)
        ライフ__変数 += -1
        music.play_tone(139, music.beat(BeatFraction.HALF))
        if ライフ__変数 == 0:
            game.game_over()
    if スプライト.is_touching(ボール2):
        _1tick += -50
        game.add_score(1)
        radio.send_value("tensuu", game.score())
        music.play_tone(277, music.beat(BeatFraction.HALF))
    else:
        game.remove_life(1)
        ライフ__変数 += -1
        music.play_tone(139, music.beat(BeatFraction.HALF))
        if ライフ__変数 == 0:
            game.game_over()
    ボール1.delete()
    ボール2.delete()
basic.forever(on_forever)
