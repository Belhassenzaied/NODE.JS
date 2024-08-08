var generator = require('generate-password');

var password = generator.generateMultiple(10,{
	length: 30,
	numbers: false,
    uppercase : true,
    lowercase : false

});
console.log(password)
