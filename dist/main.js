'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

            console.log('Zzz...');
            return 'Zzz...';
        }
    }, {
        key: 'calculateAge',
        value: function calculateAge() {

            var year = +new Date().getFullYear();
            var age = year - this.yearOfBirth;
            console.log('I am ' + age + ' years old');
            return age;
        }
    }, {
        key: 'eat',
        value: function eat() {

            console.log('This food is really delicious!');
            return 'This food is really delicious!';
        }
    }, {
        key: 'talk',
        value: function talk() {

            console.log('What do you want us to talk about?');
            return 'What do you want us to talk about?';
        }
    }, {
        key: 'walk',
        value: function walk() {

            console.log('Time to stretch my legs');
            return 'Time to stretch my legs';
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
                return 'Take these drugs, they will make you feel better by tomorrow';
            } else {

                console.log('Not available to attend to you right now');
                return 'Not available to attend to you right now';
            }
        }

        //overwrite eat function

    }, {
        key: 'eat',
        value: function eat() {

            if (!this.available) {

                console.log('This food is really delicious!');
                return 'This food is really delicious!';
            } else {

                console.log('No time to eat, gotta attend to my patients first');
                return 'No time to eat, gotta attend to my patients first';
            }
        }
    }, {
        key: 'giveInjection',
        value: function giveInjection() {

            if (this.available) {

                console.log('Don\'t be afraid, it doesn\'t hurt');
                return 'Don\'t be afraid, it doesn\'t hurt';
            } else {

                console.log('Not available to give any injection');
                return 'Not available to give any injection';
            }
        }
    }, {
        key: 'yearsOfPractice',
        value: function yearsOfPractice() {

            var year = +new Date().getFullYear();
            var docYears = year - this.practice;
            console.log('I\'ve been practising as a Doctor for ' + docYears + ' years');
            return docYears;
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

    //overwrites inheritted eat method


    _createClass(Driver, [{
        key: 'eat',
        value: function eat() {

            console.log('Abeg give me more of this delicious meal');
            return 'Abeg give me more of this delicious meal';
        }
    }, {
        key: 'getLicense',
        value: function getLicense() {

            if (this.isLicensed) {

                console.log('I already have a valid license to drive');
                return 'I already have a valid license to drive';
            } else {

                this.isLicensed = true;
                console.log('Now I have a valid license to drive');
                return this.isLicensed;
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

            console.log('No way, sleep is for the weak');
            return 'No way, sleep is for the weak';
        }
    }, {
        key: 'code',
        value: function code() {

            if (this.canCode) {

                console.log('code...code...code');
                return 'code...code...code';
            } else {

                console.log("Learning to code...");
                return 'Learning to code...';
            }
        }
    }]);

    return Programmer;
}(Human);

exports.Human = Human;
exports.Driver = Driver;
exports.Doctor = Doctor;
exports.Programmer = Programmer;