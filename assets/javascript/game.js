var scoobySnacks;
var clues;
var scares;
var mysteryGangMembers;
var villianMembers;
var mysteryGangMembersClues;
var villianMembersScares;
var mysteryGangMembersSS
var villianMembersSS;
var yourMysteryGangMember= "";
var villianToUnmask= "";

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

    mysteryGang.scooby.clues = 170;
    mysteryGang.shaggy.clues = 160;
    mysteryGang.velma.clues = 150;
    mysteryGang.daphne.clues = 150;
    mysteryGang.fred.clues = 150;

    villian.knight.scares = 150;
    villian.phantom.scares = 150;
    villian.cutler.scares = 150;
    villian.miner.scares = 150;
    villian.witchDoctor.scares = 150;

}




$(document).ready(function() {
    reset();
 

    var mysteryGang = {
        'scooby': {
            name: 'scoobyDoo',
            // scoobySnacks are the health points of each character
            scoobySnacks: 170,
            // clues are attack power
            clues: 6,
            // scoobySnacksUpdate: function(scareDamage) {
            //     this.scoobySnacks -= scareDamage;
            //     $("#scooby").text(this.health);
            // }
           
            
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

    $("#scooby").click(function() {
        $("#scoobyScoobySnacks").appendTo("#yourMember")
        $("#scooby").appendTo("#yourMember");
        var mysteryGang = false;
        if($('#scooby').val().length == 0 ) {
        $("#scooby").css("border","1px solid green");
        return false;
        };
            

        console.log("scooby");

    });

    $("#shaggy").click(function() {
        $("#shaggyScoobySnacks").appendTo("#yourMember")
        $("#shaggy").appendTo("#yourMember");
        if($('#shaggy').val().length == 0 ) {
            $("#shaggy").css("border","1px solid green");
            return false;
            };
            
        console.log("shaggy")

    });

    $("#velma").click(function() {
        $("#velmaScoobySnacks").appendTo("#yourMember")
        $("#velma").appendTo("#yourMember");
        if($('#velma').val().length == 0 ) {
            $("#velma").css("border","1px solid green");
            return false;
            };
            
        console.log("velma")

    });

    $("#daphne").click(function() {
        $("#daphneScoobySnacks").appendTo("#yourMember")
        $("#daphne").appendTo("#yourMember");
        if($('#daphne').val().length == 0 ) {
            $("#daphne").css("border","1px solid green");
            return false;
            };
            
        console.log("daphne")

    });

    $("#fred").click(function() {
        $("#fredScoobySnacks").appendTo("#yourMember")
        $("#fred").appendTo("#yourMember");
        if($('#fred').val().length == 0 ) {
            $("#fred").css("border","1px solid green");
            return false;
            };
            
        console.log("fred")

    });


    $("#knight").click(function() {
        $("#knight").appendTo("#unmask");
        if($('#knight').val().length == 0 ) {
            $("#knight").css("border","1px solid red");
            return false;
            };
           
        console.log("knight")

    });

    $("#phantom").click(function() {
        $("#phantom").appendTo("#unmask");
        if($('#phantom').val().length == 0 ) {
            $("#phantom").css("border","1px solid red");
            return false;
            };
            
        console.log("phantom")

    });

    $("#cutler").click(function() {
        $("#cutler").appendTo("#unmask");
        if($('#cutler').val().length == 0 ) {
            $("#cutler").css("border","1px solid red");
            return false;
            };
        console.log("captian cutler")

    });

    $("#miner").click(function() {
        $("#minerScoobySnacks").appendTo("#unmask");
        $("#miner").appendTo("#unmask");
        if($('#miner').val().length == 0 ) {
            $("#miner").css("border","1px solid red");
            return false;
            };
        console.log("Miner49er")

    });

    $("#witchDoctor").click(function() {
        $("#witchDoctor").appendTo("#unmask");
        if($('#witchDoctor').val().length == 0 ) {
            $("#witchDoctor").css("border","1px solid red");
            return false;
            };
        console.log("Indian Witch Doctor")

    });

    $("#machine").on("click",function () {
        
    });

    
});