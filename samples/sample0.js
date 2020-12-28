var module = $jSpaghetti.module("myModule")

module.config.debugMode = true

module.procedure("A", function(){
    console.log("brown fox jumps ")
    return true
})
module.procedure("B", function(){
    console.log("over the lazy dog")
    return true
})
module.procedure("C", function(shared, hooks){
    console.log("quick ")
    return true
})

var sequence = module.sequence("showPhrase")

sequence.instructions = [
    {0: "C"},
    {"foo": ["A", "B", {"exit": "2 == 2"}, "C"]}
]

sequence.events.addEventListener("terminated", function(){
	sequence.reset()
})
sequence.run()

//Output: quick brown fox jumps over the lazy dog