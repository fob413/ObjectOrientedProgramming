const assert = require ( "chai" ).assert;
const myApp = require ( "../src/main.js" );

describe ( "objectOrientedProgramming", function(){

    describe ( "user can greet", function() {

        it('should return Hi when Driver.greet() ', function(){

            let hammed = new Driver ( 1981, 'black', 'male', false );
            assert.equal(hammed.greet(), 'Hi');

        });

    } );

} );