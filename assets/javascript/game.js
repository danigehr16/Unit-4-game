
// var name;
// var mysteryGangClues;
// var villianScares;
// var mysteryGangSS
// var villianSS;
// var yourMysteryGangMember= "";
// var villianToUnmask= "";
var solvebutton;

var myCharacter;
var villianCharacter;

function reset() {
    $("#Reset").hide();
    $("#solve").show();

    var yourMysteryGangMember="";
    var villianToUnmask="";

    mysteryGang.scooby.scoobySnacks = 170;
    mysteryGang.shaggy.scoobySnacks = 160;
    mysteryGang.velma.scoobySnacks = 150;
    mysteryGang.daphne.scoobySnacks = 150;
    mysteryGang.fred.scoobySnacks = 150;
    villian.knight.scoobySnacks = 150;
    villian.phantom.scoobySnacks = 150;
    villian.cutler.scoobySnacks = 150;
    villian.miner.scoobySnacks = 150;
    villian.witchDoctor.scoobySnacks = 150;

    mysteryGang.scooby.clues = 6;
    mysteryGang.shaggy.clues = 6;
    mysteryGang.velma.clues = 3;
    mysteryGang.daphne.clues = 3;
    mysteryGang.fred.clues = 3;

    villian.knight.scares = 4;
    villian.phantom.scares = 2;
    villian.cutler.scares = 3;
    villian.miner.scares = 3;
    villian.witchDoctor.scares = 4;

}
    var mysteryGang = {
        'scooby': {
            name: 'scoobyDoo',
            // scoobySnacks are the health points of each character
            scoobySnacks: 170,
            // clues are attack power
            clues: 6,
        },

        'shaggy': {
            name: 'shaggyRogers',
            scoobySnacks: 160,
            clues: 6,    
        },

        'velma': {
            name: 'velmaDinkley',
            scoobySnacks: 150,
            clues: 3,   
        },

        'daphne': {
            name: 'daphneBlake',
            scoobySnacks: 150,
            clues: 3,    
        },

        'fred': {
            name: 'fredJones',
            scoobySnacks: 150,
            clues: 3,     
        }


    }

    var villian = {
        'knight': {
            name: "blackKnight",
            // scooby snacks are the health points
            scoobySnacks: 150,
            // scares are the counter attack power
            scares: 4,     
        },

        'phantom': {
            name: "thePhantom",
            scoobySnacks: 150,
            // scares are the counter attack power
            scares: 2,     
        },

        'cutler': {
            name: "captianCutler",
            scoobySnacks: 150,
            // scares are the counter attack power
            scares: 3,    
        },

        'miner': {
            name: "miner49er",
            scoobySnacks: 150,
            // scares are the counter attack power
            scares: 3,    
        },

        'witchDoctor': {
            name: "IndianWitchDoctor",
            scoobySnacks: 150,
            // scares are the counter attack power
            scares: 4,
          }  
             
    }  

$(document).ready(function() {
    reset();
    
    

    $("#scooby").click(function() {
        myCharacter = mysteryGang.scooby;
        $("#scoobyScoobySnacks").appendTo("#scoobySnacksRemaining")
        $("#scooby").appendTo("#memberimage");
        if($('#scooby').val().length == 0 ) {
        $("#scooby").css("border","2px solid green");
        return false;
        };
            

        console.log("scooby");

    });

    $("#shaggy").click(function() {
        myCharacter = mysteryGang.shaggy;
        $("#shaggyScoobySnacks").appendTo("#scoobySnacksRemaining")
        $("#shaggy").appendTo("#memberimage");
        if($('#shaggy').val().length == 0 ) {
            $("#shaggy").css("border","2px solid green");
            return false;
            };
            
        console.log("shaggy")

    });

    $("#velma").click(function() {
        myCharacter = mysteryGang.velma;
        $("#velmaScoobySnacks").appendTo("#scoobySnacksRemaining")
        $("#velma").appendTo("#memberimage");
        if($('#velma').val().length == 0 ) {
            $("#velma").css("border","2px solid green");
            return false;
            };
            
        console.log("velma")

    });

    $("#daphne").click(function() {
        myCharacter = mysteryGang.daphne;
        $("#daphneScoobySnacks").appendTo("#scoobySnacksRemaining")
        $("#daphne").appendTo("#memberimage");
        if($('#daphne').val().length == 0 ) {
            $("#daphne").css("border","2px solid green");
            return false;
            };
            
        console.log("daphne")

    });

    $("#fred").click(function() {
        myCharacter = mysteryGang.fred;
        $("#fredScoobySnacks").appendTo("#scoobySnacksRemaining")
        $("#fred").appendTo("#memberimage");
        if($('#fred').val().length == 0 ) {
            $("#fred").css("border","2px solid green");
            return false;
            };
            
        console.log("fred")

    });


    $("#knight").click(function() {
        villianCharacter = villian.knight;
        $("#knightScoobySnacks").appendTo("#VillianScoobySnacksRemaining");
        $("#knight").appendTo("#villianImage");
        if($('#knight').val().length == 0 ) {
            $("#knight").css("border","2px solid red");
            return false;
            };
           
        console.log("knight")

    });

    $("#phantom").click(function() {
        villianCharacter = villian.phantom;
        $("#phantomScoobySnacks").appendTo("#VillianScoobySnacksRemaining");
        $("#phantom").appendTo("#villianImage");
        if($('#phantom').val().length == 0 ) {
            $("#phantom").css("border","2px solid red");
            return false;
            };
            
        console.log("phantom")

    });

    $("#cutler").click(function() {
        villianCharacter = villian.cutler;
        $("#cutlerScoobySnacks").appendTo("#VillianScoobySnacksRemaining");
        $("#cutler").appendTo("#villianImage");
        if($('#cutler').val().length == 0 ) {
            $("#cutler").css("border","2px solid red");
            return false;
            };
        console.log("captian cutler")

    });

    $("#miner").click(function() {
        villianCharacter = villian.miner;
        $("#minerScoobySnacks").appendTo("#VillianScoobySnacksRemaining");
        $("#miner").appendTo("#villianImage");
        if($('#miner').val().length == 0 ) {
            $("#miner").css("border","2px solid red");
            return false;
            };
        console.log("Miner49er")

    });

    $("#witchDoctor").click(function() {
        villianCharacter = villian.witchDoctor;
        $("#witchDoctorScoobySnacks").appendTo("#VillianScoobySnacksRemaining");
        $("#witchDoctor").appendTo("#villianImage");
        if($('#witchDoctor').val().length == 0 ) {
            $("#witchDoctor").css("border","2px solid red");
            return false;
            };
        console.log("Indian Witch Doctor")

    });

    

    $("#solve").click (function() {
        
        myCharacter.scoobySnacks = myCharacter.scoobySnacks - villianCharacter.scares;
        $("#scoobySnacksRemaining").text(myCharacter.scoobySnacks)

         

        villianCharacter.scoobySnacks = villianCharacter.scoobySnacks - myCharacter.clues;
        $("#VillianScoobySnacksRemaining").html(villianCharacter.scoobySnacks);
    });

    // I could not get the pictures to disappear
    // i also could not get the numbers of wins and losses to increase i know you have to use if else statements and then ++ but i just couldnt get the code right.




    
});