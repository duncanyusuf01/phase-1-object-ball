function gameObject(){
    return{
        home: {
            teamName:"Brooklyn Nets",
            colors:["Black","White"],
            players: {
                'Alan Anderson':{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1,
                },
                'Reggie Evans':{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7,
                },
                'Brook Lopez':{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15,
                },
                'Mason Plumlee':{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5,
                },
                'Jason Terry':{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1,
                },
            },
    },
        away:{
            teamName:'Charlotte Hornets',
            colors:['Turquoise','Purple'],
            players:{
                'Jeff Adrien':{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2,
                },
                'Bismak Biyombo':{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10,
                },
                'DeSagna Diop':{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5,
                },
                'Ben Gordon':{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0
                },
                'Brendan Haywood':{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12,
                },
            },
    },
    }
}
const game=gameObject();
console.log(gameObject());
function homeTeamName() {
    return game.home.teamName;
}
console.log(homeTeamName());

function playerStats(playerName) {
    for (let team of Object.values(game)) {
        if (playerName in team.players) return team.players[playerName];
    }
    return null; 
}
console.log(playerStats("Ben Gordon"));


function numPointsScored(playerName) {
    for (let team of Object.values(game)) {
        if (playerName in team.players) {
            return team.players[playerName].points;
        }
    }
    return null;
}
console.log(numPointsScored("Jason Terry"));


function shoeSize(playerName) {
    for (let team of Object.values(game)) {
        if (playerName in team.players) {
            return team.players[playerName].shoe;
        }
    }
    return null;
}
console.log(shoeSize("Brook Lopez"));

function teamColors(teamName) {
    for (let team of Object.values(game)) {
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
    return null;
}
console.log(teamColors("Charlotte Hornets"));


function playerWithBiggestShoe() {
    let largestShoePlayer = null;
    let maxShoeSize = 0;

    for (let team of Object.values(game)) {
        for (let [player, stats] of Object.entries(team.players)) {
            if (stats.shoe > maxShoeSize) {
                maxShoeSize = stats.shoe;
                largestShoePlayer = player;
            }
        }
    }
    return largestShoePlayer;
}
console.log(playerWithBiggestShoe());