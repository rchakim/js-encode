(function (root, factory) {
	// UMD wrapper to support CommonJS, AMD, and browser globals
	if (typeof define === 'function' && define.amd) {
		// AMD: Register as an anonymous module
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		// CommonJS: Export for Node.js-like environments
		module.exports = factory();
	} else {
		// Browser globals: Attach to window or global object
		root.TextProcessor = factory();
	}
})(typeof self !== 'undefined' ? self : this, function () {
	/**
	 * TextProcessor class to manage DOM interactions for text processing.
	 * @class TextProcessor
	 */
	class TextProcessor {
		/**
		 * Constructor initializes DOM elements and sets up event listeners.
		 * @constructor
		 */
		constructor() {
			// DOM elements for input, buttons, and output
			this.input = document.getElementById("input");
			this.encode = document.getElementById("encode");
			this.decode = document.getElementById("decode");
			this.output = document.getElementById("output");
			this.copy = document.getElementById("copy");
			this.clear = document.getElementById("clear");

			// Event listener for encode button: applies encode function to input
			this.encode.onclick = () => {
				this.output.value = encode(this.input.value);
				this.output.scrollIntoView({behavior: "smooth"});
			}

			// Event listener for decode button: applies decode function to input
			this.decode.onclick = () => {
				this.output.value = decode(this.input.value);
				this.output.scrollIntoView({behavior: "smooth"});
			}

			// Event listener for copy button: copies output to clipboard
			this.copy.onclick = () => navigator.clipboard.writeText(this.output.value);

			// Event listener for clear button: resets input and output fields
			this.clear.onclick = () => {
				this.input.value = '';
				this.output.value = '';
			};
		}
	}

	// Instantiate the class to set up event listeners
	new TextProcessor();
});