var programNot = [
    [0,"in",0,1,2],
    ["out",1,0,"end","end"],
    ["out",0,0,"end","end"]
];

var programAnd = [
    [0,"in",0,1,2],
    [0,"in",0,4,4],
    [0,"in",0,4,3],
    ["out",1,0,"end","end"],
    ["out",0,0,"end","end"]
];

var programBitCopy = [
    [0,"in",0,1,2],
    [1,0,0,3,3],
    [1,1,0,3,3],
    [2,0,1,4,5],
    ["out",0,0,"end","end"],
    ["out",1,0,"end","end"]
];

var programToRun = programNot;

/**
 * Runs the program.
 * @argument {array} program the program to execute
 * @returns {nothing} returns nothing
 */
function run (program){
    var memorySet = [];
    var ip = 0;
    var bit = 0;

    while(ip !== "end"){
        var line = program[ip];

        if(line[1]==="in") {
            bit = parseInt(prompt("bit?"), 10);
        }else{
            bit = line[1];
        }

        if(line[0] === "out") {
            console.log(bit);
        }else{
            memorySet[line[0]] = bit;
        }

        if(memorySet[line[2]] === 0) {
            ip = line[3];
        }else{
            ip = line[4];
        }
    }
}

run(programToRun);
