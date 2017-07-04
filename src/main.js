class Human{

    constructor ( yearOfBirth, skinColor, sex ) {

        this.yearOfBirth = yearOfBirth;
        this.skinColor = skinColor;
        this.sex = sex;
        this.legs = 2;
        this.hands = 2;
        
    }

    greet ( greeting = 'Hi' ) {

        console.log( greeting );
        return 'Hi';

    }

    sleep () {

        console.log( 'Zzz...' );
        return 'Zzz...'

    }

    calculateAge () {

        let year = +( new Date().getFullYear());
        let age = year - this.yearOfBirth;
        console.log( `I am ${age} years old` );
        return `I am ${age} years old`;

    }

    eat () {

        console.log( 'This food is really delicious!' );
        return 'This food is really delicious!';

    }

    talk () {

        console.log( 'What do you want us to talk about?' );
        return 'What do you want us to talk about?';

    }

    walk () {

        console.log( 'Time to strech my legs' );
        return 'Time to strech my legs';

    }

    
}


/* Doctor class inherits from Human class */
class Doctor extends Human {

    //inherit properties and has addtional properties
    constructor ( yearOfBirth, skinColor, sex, available, practice ) {

        super ( yearOfBirth, skinColor, sex );
        this.available = available;
        this.practice = practice;

    }

    treat () {

        if ( this.available ) {

            console.log('Take these drugs, they will make you feel better by tomorrow');
            return 'Take these drugs, they will make you feel better by tomorrow';

        } else {

            console.log('Not available to attend to you right now');
            return 'Not available to attend to you right now';

        }

    }

    //overwrite eat function
    eat () {

        if ( !this.available ){

            console.log( 'This food is really delicious!' );
            return 'This food is really delicious!';

        } else {

            console.log( 'No time to eat, gotta attend to my patients first' );
            return 'No time to eat, gotta attend to my patients first';

        }

    }

    giveInjection () {

        if ( this.available ) {

            console.log( 'Don\'t be afraid, it doesn\'t hurt' );
            return 'Don\'t be afraid, it doesn\'t hurt';

        } else {

            console.log( 'Not available to give any injection' );
            return 'Not available to give any injection';

        }

    }

}


/*inherits from human class*/
class Driver extends Human {

    constructor ( yearOfBirth, skinColor, sex, isLicensed ) {

        super ( yearOfBirth, skinColor, sex );

        this.isLicensed = isLicensed;

    }

    //overwrites inheritted eat method
    eat () {

        console.log( 'Abeg give me more of this delicious meal' );
        return 'Abeg give me more of this delicious meal';

    }

    getLicense () {

        if ( this.isLicensed ){

            console.log( 'I already have a valid license to drive' );
            return 'I already have a valid license to drive';

        } else {

            this.isLicensed = true;
            console.log( 'Now I have a valid license to drive' );
            return 'Now I have a valid license to drive';

        }

    }

}


/* Programmer class inherits from Human  */
class Programmer extends Human {

    constructor ( yearOfBirth, skinColor, sex, canCode ){

        super (  yearOfBirth, skinColor, sex );

        this.canCode = canCode;

    }

    //overwrites the inherited sleep method
    sleep () {

        console.log( 'No way, sleep is for the weak' );
        return 'No way, sleep is for the weak';

    }

    code () {

        console.log( 'code...code...code' );
        return 'code...code...code';

    }

}

















let mike = new Human ( 1994, 'black', 'male' );
mike.greet();
console.log( mike.legs );
console.log( mike.sex );
mike.calculateAge();
mike.talk();
mike.eat();
mike.walk();

let susan = new Doctor ( 1997, 'light', 'female', false, 2000 );

susan.greet( 'Hi, I am Susan' );
console.log( susan.legs );
susan.eat();
susan.giveInjection();

let hammed = new Driver ( 1981, 'black', 'male', false );
console.log( hammed.isLicensed );
hammed.greet();

let funsho = new Programmer();
funsho.code();
funsho.greet();
funsho.sleep();
console.log( funsho.hands );

export  {

    Human,
    Driver

}