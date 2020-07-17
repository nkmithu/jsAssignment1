//------------ Feet to Mile----------//

function feetToMile(feet) {
    let mile = feet / 5280;
    return mile;
}

let outputMile = feetToMile(123654);
console.log(Math.round(outputMile));


//------------ Wood Calculator----------//


function woodCalculator(chair, table, bed) {
    let woodForChair = chair * 1;
    let woodForTable = table * 3;
    let woodForBed = bed * 5;

    let totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;
}

let furnituresWood = woodCalculator(5, 7, 3);
console.log(furnituresWood);



//------------ Brick Calculator----------//

function brickCalculator(floorsNum) {

    let oneToTen = 15;
    let tenToTwenty = 12;
    let twentyUp = 10;
    let feetInFloor = 0

    if (floorsNum <= 10) {
        feetInFloor = oneToTen * floorsNum;

    } else if (floorsNum > 10 && floorsNum <= 20) {
        feetInFloor = (oneToTen * 10) + (tenToTwenty * (floorsNum - 10));
    } else if (floorsNum > 20) {
        feetInFloor = (oneToTen * 10) + (tenToTwenty * 10) + (twentyUp * (floorsNum - 20));
    }

    let totalBricks = feetInFloor * 1000;

    return totalBricks;
}

let bricksForbuilding = brickCalculator(63);
console.log(bricksForbuilding);





//------------ Tiny friend----------//

function tinyFriend(friends) {
    tinyNameNum = friends[0].length;
    tinyFriendName = friends[0];

    for (let i = 0; i < friends.length; i++) {

        let currentNameNum = friends[i].length;

        if (currentNameNum < tinyNameNum) {
            tinyNameNum = currentNameNum;
            tinyFriendName = friends[i];
        }

    }

    return tinyFriendName;

}

let tinyFreiendResult = tinyFriend(["Rakib", "Mumu", "Om", "Nazimuddin"]);

console.log(tinyFreiendResult);