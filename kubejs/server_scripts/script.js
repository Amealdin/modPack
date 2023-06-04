// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
    event.shaped('1x minecraft:slime_ball', [
        'SA ',
        'AS ',
        '   '
    ], {
        S: 'create:dough',
        A: 'minecraft:lime_dye'
    })
})