const assert = require ( "chai" ).assert;

import  {

    Human,
    Driver,
    Doctor,
    Programmer

}

from '../src/main.js';

describe ( "Human", function(){

    describe ( "Valid Inputs", function() {

        it( 'Human.greet() returns Hi', function(){

            let testUser = new Human ( 1981, 'black', 'male' );
            assert.equal( testUser.greet(), 'Hi');

        });

        it( 'Human.sleep() returns Zzz...', function(){

            let testUser = new Human ( 1981, 'black', 'male' );
            assert.equal( testUser.sleep(), 'Zzz...');

        });

        it( 'Human.calculateAge() returns 36', function(){

            let testUser = new Human ( 1981, 'black', 'male' );
            assert.equal( testUser.calculateAge(), 36);

        });

        it( 'Human.eat() return This food is really delicious!', function(){

            let testUser = new Human ( 1981, 'black', 'male' );
            assert.equal( testUser.eat(), 'This food is really delicious!');

        });

        it( 'Human.talk() returns What do you want us to talk about?', function(){

            let testUser = new Human ( 1981, 'black', 'male' );
            assert.equal( testUser.talk(), 'What do you want us to talk about?');

        });

        it( 'Human.walk() returns Time to stretch my legs', function(){

            let testUser = new Human ( 1981, 'black', 'male' );
            assert.equal( testUser.walk(), 'Time to stretch my legs');

        });

    } );

} );

describe ( "Doctor", function(){

    describe ( "Valid Inputs", function() {

        it( 'Human.eat() return This food is really delicious!', function(){

            let testUser = new Doctor ( 1981, 'black', 'male', false, 1990 );
            assert.equal( testUser.eat(), 'This food is really delicious!');

        });

        it( 'Human.eat() return No time to eat, gotta attend to my patient', function(){

            let testUser = new Doctor ( 1981, 'black', 'male', true, 1990 );
            assert.equal( testUser.eat(), 'No time to eat, gotta attend to my patients first');

        });

        it( 'Human.giveInjection() return Not available to give any injection', function(){

            let testUser = new Doctor ( 1981, 'black', 'male', false, 1990 );
            assert.equal( testUser.giveInjection(), 'Not available to give any injection');

        });

        it( 'Human.giveInjection() return Don\'t be afraid, it doesn\'t hurt', function(){

            let testUser = new Doctor ( 1981, 'black', 'male', true, 1990 );
            assert.equal( testUser.giveInjection(), 'Don\'t be afraid, it doesn\'t hurt');

        });

        it( 'Human.yearsOfPractice() return 27', function(){

            let testUser = new Doctor ( 1981, 'black', 'male', true, 1990 );
            assert.equal( testUser.yearsOfPractice(), 27);

        });

    } );

});

describe ( "Driver", function(){

    describe ( "Valid Inputs", function() {

        it( 'Driver.eat() Abeg give me more of this delicious meal', function(){

            let testUser = new Driver ( 1981, 'black', 'male', false );
            assert.equal( testUser.eat(), 'Abeg give me more of this delicious meal');

        });

        it( 'Driver.getLicense() return I already have a valid license to drive', function(){

            let testUser = new Driver ( 1981, 'black', 'male', true );
            assert.equal( testUser.getLicense(), 'I already have a valid license to drive');

        });

        it( 'Driver.getLicense() return true', function(){

            let testUser = new Driver ( 1981, 'black', 'male', false );
            assert.equal( testUser.getLicense(), true);

        });

    } );

});

describe ( "Programmer", function(){

    describe ( "Valid Inputs", function() {

        it( 'Programmer.sleep() No way, sleep is for the weak', function(){

            let testUser = new Programmer ( 1981, 'black', 'male', true );
            assert.equal( testUser.sleep(), 'No way, sleep is for the weak');

        });

        it( 'Programmer.code() return code...code...code', function(){

            let testUser = new Programmer ( 1981, 'black', 'male', true );
            assert.equal( testUser.code(), 'code...code...code');

        });

        it( 'Driver.code() return Learning to code...', function(){

            let testUser = new Programmer ( 1981, 'black', 'male', false );
            assert.equal( testUser.code(), 'Learning to code...');

        });

    } );

});