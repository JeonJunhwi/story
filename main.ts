function what () {
    return what_list._pickRandom()
}
function doing () {
    return doing_list._pickRandom()
}
function _for () {
    return for_list._pickRandom()
}
function where () {
    return where_list._pickRandom()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("" + who() + " is " + where() + " " + doing() + " " + what() + " " + _for(), DialogLayout.Bottom)
})
function who () {
    return who_list._pickRandom()
}
let for_list: string[] = []
let what_list: string[] = []
let doing_list: string[] = []
let where_list: string[] = []
let who_list: string[] = []
who_list = [
"me",
"dad",
"mom",
"mr beast",
"a dog",
"a foot"
]
where_list = [
"at home",
"in cheese land",
"on the pacific ocean",
"on mars",
"at school",
"in a dream"
]
doing_list = [
"eating",
"swimming",
"cooking",
"dancing",
"singing",
"playing"
]
what_list = [
"the rainbow",
"galbi",
"youtube",
"tiktok",
"lines",
"kingka"
]
for_list = [
"for breakfast",
"for money",
"for views",
"for love",
"for fun",
"for their life"
]
