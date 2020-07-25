// wow - 2020

const stream = require('stream');

class ShoutStream extends stream.Writable {
	constructor(shout) {
		super();
		this.shout = shout;
	}

	_write = function (chunk, encoding, done) {
		this.shout.send(chunk, chunk.length);

		let delay = Math.abs(this.shout.delay());

		setTimeout(function () {
			done();
		}, delay);
	};
}

module.exports = ShoutStream;
