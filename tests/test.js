const assert = require ( "chai" ).assert;

import  {

    Human, Driver, greet

}

from '../src/main.js';

describe ( "objectOrientedProgramming", function(){

    describe ( "Human", function() {

        it('Human.greet() returns Hi', function(){

            let testUser = new Human ( 1981, 'black', 'male' );
            assert.equal(testUser.greet(), 'Hi');

        });

        it('Human.sleep() returns Zzz...', function(){

            let testUser = new Human ( 1981, 'black', 'male' );
            assert.equal(testUser.sleep(), 'Zzz...');

        });

        it('Human.calculateAge() returns 36', function(){

            let testUser = new Human ( 1981, 'black', 'male' );
            assert.equal(testUser.calculateAge(), 36);

        });

        it('Human.eat() return This food is really delicious!', function(){

            let testUser = new Human ( 1981, 'black', 'male' );
            assert.equal(testUser.eat(), 'This food is really delicious!');

        });

        it('Human.talk() returns What do you want us to talk about?', function(){

            let testUser = new Human ( 1981, 'black', 'male' );
            assert.equal(testUser.talk(), 'What do you want us to talk about?');

        });

        it('Human.walk() returns Time to stretch my legs', function(){

            let testUser = new Human ( 1981, 'black', 'male' );
            assert.equal(testUser.walk(), 'Time to stretch my legs');

        });

    } );

} );