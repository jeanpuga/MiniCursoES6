'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _maths = require('js/maths.js');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Spread
var a = 1,
    b = 2,
    rest = [3, 4, 5];


console.log(a); // 1
console.log(b); // 2
console.log(rest); // 3, 4, 5


//Destruturing
var person1 = { name: 'Jean', age: 43 };

var name = person1.name,
    age = person1.age;


console.log(name);
console.log(age);

//Class

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this._name = name;
    }

    _createClass(Person, [{
        key: 'getName',
        value: function getName() {
            return this._name;
        }
    }, {
        key: 'setName',
        value: function setName(name) {
            this._name = name;
        }
    }]);

    return Person;
}();

var Dev = function (_Person) {
    _inherits(Dev, _Person);

    function Dev() {
        _classCallCheck(this, Dev);

        return _possibleConstructorReturn(this, (Dev.__proto__ || Object.getPrototypeOf(Dev)).apply(this, arguments));
    }

    _createClass(Dev, [{
        key: 'speak',
        value: function speak() {
            console.log(this._name + ' faz pbi.');
        }
    }]);

    return Dev;
}(Person);

var PO = function (_Person2) {
    _inherits(PO, _Person2);

    function PO() {
        _classCallCheck(this, PO);

        return _possibleConstructorReturn(this, (PO.__proto__ || Object.getPrototypeOf(PO)).apply(this, arguments));
    }

    _createClass(PO, [{
        key: 'speak',
        value: function speak() {
            console.log(this._name + ' pede pbi.');
        }
    }]);

    return PO;
}(Person);

var person2 = new Person('Moacir');
person2.getName();
person2.setName('Teobaldo');
person2.getName();

//Modulos


(0, _maths.soma)(1, 2);
