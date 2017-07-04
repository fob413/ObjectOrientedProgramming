'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Human = function () {
    function Human(yearOfBirth, skinColor, sex) {
        _classCallCheck(this, Human);

        this.yearOfBirth = yearOfBirth;
        this.skinColor = skinColor;
        this.sex = sex;
        this.legs = 2;
        this.hands = 2;
    }

    _createClass(Human, [{
        key: 'greet',
        value: function greet() {
            var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hi';


            console.log(greeting);
            return 'Hi';
        }
    }, {
        key: 'sleep',
        value: function sleep() {

            console.log('zzz...');
        }
    }, {
        key: 'calculateAge',
        value: function calculateAge() {

            var year = +new Date().getFullYear();
            var age = year - this.yearOfBirth;
            console.log('I am ' + age + ' years old');
        }
    }, {
        key: 'eat',
        value: function eat() {

            console.log('This food is really delicious!');
        }
    }, {
        key: 'talk',
        value: function talk() {

            console.log('What do you want us to talk about?');
        }
    }, {
        key: 'walk',
        value: function walk() {

            console.log('Time to strech my legs');
        }
    }]);

    return Human;
}();

/* Doctor class inherits from Human class */


var Doctor = function (_Human) {
    _inherits(Doctor, _Human);

    //inherit properties and has addtional properties
    function Doctor(yearOfBirth, skinColor, sex, available, practice) {
        _classCallCheck(this, Doctor);

        var _this = _possibleConstructorReturn(this, (Doctor.__proto__ || Object.getPrototypeOf(Doctor)).call(this, yearOfBirth, skinColor, sex));

        _this.available = available;
        _this.practice = practice;

        return _this;
    }

    _createClass(Doctor, [{
        key: 'treat',
        value: function treat() {

            if (this.available) {

                console.log('Take these drugs, they will make you feel better by tomorrow');
            } else {

                console.log('Not available to attend to you right now');
            }
        }

        //overwrite eat function

    }, {
        key: 'eat',
        value: function eat() {

            if (!this.available) {

                console.log('This food is really delicious!');
            } else {

                console.log('No time to eat, gotta attend to my patients first');
            }
        }
    }, {
        key: 'giveInjection',
        value: function giveInjection() {

            if (this.available) {

                console.log('Don\'t be afraid, it doesn\'t hurt');
            } else {

                console.log('Not available to give any injection');
            }
        }
    }]);

    return Doctor;
}(Human);

/*inherits from human class*/


var Driver = function (_Human2) {
    _inherits(Driver, _Human2);

    function Driver(yearOfBirth, skinColor, sex, isLicensed) {
        _classCallCheck(this, Driver);

        var _this2 = _possibleConstructorReturn(this, (Driver.__proto__ || Object.getPrototypeOf(Driver)).call(this, yearOfBirth, skinColor, sex));

        _this2.isLicensed = isLicensed;

        return _this2;
    }

    //overwrites inheritted eat function


    _createClass(Driver, [{
        key: 'eat',
        value: function eat() {

            console.log('Abeg give me more of this delicious meal');
        }
    }, {
        key: 'getLicense',
        value: function getLicense() {

            if (this.isLicensed) {

                console.log('I already have a valid license to drive');
            } else {

                this.isLicensed = true;
                console.log('Now I have a valid license to drive');
            }
        }
    }]);

    return Driver;
}(Human);

/* Programmer class inherits from Human  */


var Programmer = function (_Human3) {
    _inherits(Programmer, _Human3);

    function Programmer(yearOfBirth, skinColor, sex, canCode) {
        _classCallCheck(this, Programmer);

        var _this3 = _possibleConstructorReturn(this, (Programmer.__proto__ || Object.getPrototypeOf(Programmer)).call(this, yearOfBirth, skinColor, sex));

        _this3.canCode = canCode;

        return _this3;
    }

    //overwrites the inherited sleep method


    _createClass(Programmer, [{
        key: 'sleep',
        value: function sleep() {

            console.log(' No way, sleep is for the weak');
        }
    }, {
        key: 'code',
        value: function code() {

            console.log('code...code...code');
        }
    }]);

    return Programmer;
}(Human);

var mike = new Human(1994, 'black', 'male');
mike.greet();
console.log(mike.legs);
console.log(mike.sex);
mike.calculateAge();
mike.talk();
mike.eat();
mike.walk();

var susan = new Doctor(1997, 'light', 'female', false, 2000);

susan.greet('Hi, I am Susan');
console.log(susan.legs);
susan.eat();
susan.giveInjection();

var hammed = new Driver(1981, 'black', 'male', false);
console.log(hammed.isLicensed);
hammed.greet();

var funsho = new Programmer();
funsho.code();
funsho.greet();
funsho.sleep();
console.log(funsho.hands);

module.exports = {

    Human: Human,
    Driver: Driver

};