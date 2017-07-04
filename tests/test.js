const assert = require ( "chai" ).assert;

import  {

    Human, Driver, greet

}

from '../src/main.js';

describe ( "objectOrientedProgramming", function(){

    describe ( "Human", function() {

        it('Human.greet() says Hi', function(){

            let hammed = new Human ( 1981, 'black', 'male' );
            assert.equal(hammed.greet(), 'Hi');

        });

    } );

} );