
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
    $(".restart").hide();
    $("#machine").show();

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
        // var mysteryGang = false;
        if($('#scooby').val().length == 0 ) {
        $("#scooby").css("border","1px solid green");
        return false;
        };
            

        console.log("scooby");

    });

    $("#shaggy").click(function() {
        myCharacter = mysteryGang.shaggy;
        $("#shaggyScoobySnacks").appendTo("#yourMember")
        $("#shaggy").appendTo("#yourMember");
        if($('#shaggy').val().length == 0 ) {
            $("#shaggy").css("border","1px solid green");
            return false;
            };
            
        console.log("shaggy")

    });

    $("#velma").click(function() {
        myCharacter = mysteryGang.velma;
        $("#velmaScoobySnacks").appendTo("#yourMember")
        $("#velma").appendTo("#yourMember");
        if($('#velma').val().length == 0 ) {
            $("#velma").css("border","1px solid green");
            return false;
            };
            
        console.log("velma")

    });

    $("#daphne").click(function() {
        myCharacter = mysteryGang.daphne;
        $("#daphneScoobySnacks").appendTo("#yourMember")
        $("#daphne").appendTo("#yourMember");
        if($('#daphne').val().length == 0 ) {
            $("#daphne").css("border","1px solid green");
            return false;
            };
            
        console.log("daphne")

    });

    $("#fred").click(function() {
        myCharacter = mysteryGang.fred;
        $("#fredScoobySnacks").appendTo("#yourMember")
        $("#fred").appendTo("#yourMember");
        if($('#fred').val().length == 0 ) {
            $("#fred").css("border","1px solid green");
            return false;
            };
            
        console.log("fred")

    });


    $("#knight").click(function() {
        villianCharacter = villian.knight;
        $("#knightScoobySnacks").appendTo("#VillianScoobySnacksRemaining");
        $("#knight").appendTo("#villianImage");
        if($('#knight').val().length == 0 ) {
            $("#knight").css("border","1px solid red");
            return false;
            };
           
        console.log("knight")

    });

    $("#phantom").click(function() {
        villianCharacter = villian.phantom;
        $("#phantomScoobySnacks").appendTo("#unmask");
        $("#phantom").appendTo("#unmask");
        if($('#phantom').val().length == 0 ) {
            $("#phantom").css("border","1px solid red");
            return false;
            };
            
        console.log("phantom")

    });

    $("#cutler").click(function() {
        villianCharacter = villian.cutler;
        $("#cutlerScoobySnacks").appendTo("#unmask");
        $("#cutler").appendTo("#unmask");
        if($('#cutler').val().length == 0 ) {
            $("#cutler").css("border","1px solid red");
            return false;
            };
        console.log("captian cutler")

    });

    $("#miner").click(function() {
        villianCharacter = villian.miner;
        $("#minerScoobySnacks").appendTo("#unmask");
        $("#miner").appendTo("#unmask");
        if($('#miner').val().length == 0 ) {
            $("#miner").css("border","1px solid red");
            return false;
            };
        console.log("Miner49er")

    });

    $("#witchDoctor").click(function() {
        villianCharacter = villian.witchDoctor;
        $("#witchDoctorScoobySnacks").appendTo("#unmask");
        $("#witchDoctor").appendTo("#unmask");
        if($('#witchDoctor').val().length == 0 ) {
            $("#witchDoctor").css("border","1px solid red");
            return false;
            };
        console.log("Indian Witch Doctor")

    });

    

    $("#solve").click (function() {
        myCharacter.scoobySnacks = myCharacter.scoobySnacks - villianCharacter.scares;
        $("#scoobySnacksRemaining").text(myCharacter.scoobySnacks);

        villian.ScoobySnacks = villian.ScoobySnacks - yourCharacter.clues;
        $("#villianCharacter.scoobySnacks").html(scoobySnacks);
        
    // if (myCharacter == mysteryGang.scooby.name) {
    //     myCharacter.ScoobySnacks = mysteryGang.scooby.scoobySnacks;
    //     myCharacter.clues = mysteryGang.scooby.clues;
    // };

    // if (villianCharacter == villian.knight.name) {
    //     villian.ScoobySnacks = villian.knight.scoobySnacks;
    //     villianCharacter.scares = villian.knight.scares;
    // }; 
        
    });




    
});