// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

function hasWon(element, key, array) {
    return element.result === "W";
}

function superbowlWin(superbowlYears) {
    const yearWonObject = superbowlYears.find(hasWon);
    if(yearWonObject) {
        return yearWonObject.year;
    }
    else {
        return undefined;
    }
    //console.log(yearWon);
    //return yearWon;
}

//superbowlWin(record);
