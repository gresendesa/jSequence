var module = $jSpaghetti.module("myModule")

module.config.debugMode = true
//module.config.developerMode = true

module.procedure("foo", function(shared, hooks){
    console.log("message-foo")
    return true
})

module.procedure("baz", function(shared, hooks){
    console.log("message-baz")
    shared.count++
    if(shared.count>10){
        hooks.next('baz-returned')
    }
    return location.reload()
})

module.procedure("bar", function(shared, hooks){
    console.log("message-bar", "last return:", shared.$)
    return true
})


var sequence = module.sequence("example")

sequence.instructions = [
    {"@init": ["foo"]},
    {"@run": ["baz","bar"]},
    {"@finish": ["_exit"]}
]

sequence.events.addEventListener("terminated", function(){
	sequence.reset()
})
sequence.run()

//Output: quick brown fox jumps over the lazy dog