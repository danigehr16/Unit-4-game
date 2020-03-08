
$(document).ready(function() {
    // var mysteryGang = ["scooby", "shaggy", "velma", "daphne", "fred"];
    // var villian = ["knight", "phantom", "cutler", "miner", "witchDoctor" ];

    var mysteryGang = {
        'scooby': {
            name: 'scoobyDoo',
            health: 170,
            // clues are attack power
            clues: 20,
            // ? are counter attack power
            counterAttackPower: 15,
            
        },

        'shaggy': {
            name: 'shaggyRogers',
            health: 160,
            clues: 6,
            counterAttackPower: 15,
            
        },

        'velma': {
            name: 'velmaDinkley',
            health: 150,
            clues: 3,
            counterAttackPower: 12,
            
        },

        'daphne': {
            name: 'daphneBlake',
            health: 150,
            clues: 3,
            counterAttackPower: 12,
            
        },

        'fred': {
            name: 'fredJones',
            health: 150,
            clues: 3, 
            counterAttackPower: 12,
            
        }


    }

    var villian = {
        'knight': {
            name: "blackKnight",
            health: 140,
            // scares are the counter attack power
            scares: 4,
            
             
        },

        'phantom': {
            name: "thePhantom",
            health: 140,
            // scares are the counter attack power
            scares: 2,
            
             
        },

        'cutler': {
            name: "captianCutler",
            health: 140,
            // scares are the counter attack power
            scares: 3,
            
             
        },

        'miner': {
            name: "miner49er",
            health: 140,
            // scares are the counter attack power
            scares: 3,
            
             
        },

        'witchDoctor': {
            name: "IndianWitchDoctor",
            health: 140,
            // scares are the counter attack power
            scares: 4,
            
             
        }
    }

    $("#scooby").click(function() {
            $("#scooby").appendTo("#yourMember");
        var mysteryGang = false;
        if($('#scooby').val().length == 0 ) {
        $("#scooby").css("border","1px solid green");
        return false;
        };
            

        console.log("scooby");

    });

    $("#shaggy").click(function() {
        $("#shaggy").appendTo("#yourMember");
        if($('#shaggy').val().length == 0 ) {
            $("#shaggy").css("border","1px solid green");
            return false;
            };
            
        console.log("shaggy")

    });

    $("#velma").click(function() {
        $("#velma").appendTo("#yourMember");
        if($('#velma').val().length == 0 ) {
            $("#velma").css("border","1px solid green");
            return false;
            };
            
        console.log("velma")

    });

    $("#daphne").click(function() {
        $("#daphne").appendTo("#yourMember");
        if($('#daphne').val().length == 0 ) {
            $("#daphne").css("border","1px solid green");
            return false;
            };
            
        console.log("daphne")

    });

    $("#fred").click(function() {
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

    

    // // var characters = {
    //     'scoobyDoo': {
    //         name: Scooby,
    //         health: 150,
    //         attack: 20,
    //         enemyAttack: 15,

    //     }
    // };
});