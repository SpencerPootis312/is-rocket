var SayMyName = function (name) {
alert('MyNameIs: '+name);	
}

var car = {
	make: 'VW',
	type: 'polo',
	color: 'blue',
	isTurnedOn: false,
	number0fwheels: 4,
	seats: ['seat 1',
	'seat 2',
	'seat 3',
	'seat 4'
	],
	turn0n: function () {
     this.isturnedOn = true;
	},
	fly: function () {
		alert('fly');
	},
	switchcar: function (isOn) {
		console.log('turn car '+isOn);
       if (isOn == true) {
       	this.isturnedOn = true;
       } else {
       	this.isturnedOn = false;
       }
	}
};



	console.log('hello there friends')