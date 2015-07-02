var dictionary = require('./dictionary');


module.exports = function(segmentCount) {
	if(!segmentCount) {
		segmentCount = 3;
	}

	var segments = [];

	for(var i = 0; i < segmentCount; i++) {
		segments.push(getRandomWord());
	}

	return segments.join('-');
}

function getRandomWord() {
	var index = Math.floor(Math.random() * dictionary.length);

	return dictionary[index];
}
