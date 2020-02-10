let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . 
. . . . . . . . 2 . . . . . 2 . . 
. . . . . . . . . . . 2 2 . . . . 
. . . . . . . . . . . 2 . . . . . 
. . . . . . . 2 . . . 2 2 2 2 2 3 
. . . . . . . . . . 3 3 2 2 3 2 . 
. . . . . . . . . . . 3 3 2 2 2 . 
. . . . . . . . . . 3 3 3 3 2 2 . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
`, 0)
let name = game.askForString("what is your name?")
let favorite_color = game.askForString("What is your favorite color?")
game.splash("Your name " + name)
""