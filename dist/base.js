/**
 * Code Encoder and Decoder
 * Creator: Alicia Suya Firmansyah
 * Copyright (c) 2025 Alicia Suya Firmansyah. All rights reserved.
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		// CommonJS
		const { encode, decode } = factory();
		module.exports.encode = encode;
		module.exports.decode = decode;
	} else {
		// Browser global
		const { encode, decode } = factory();
		root.encode = encode;
		root.decode = decode;
	}
}(typeof self !== 'undefined' ? self : this, function () {
	/**
	 * Encodes a string into a new Function call with character codes.
	 * @param {string} code - The input code string to encode.
	 * @returns {string} The encoded function string or an error message.
	 * Creator: Alicia Suya Firmansyah
	 * Copyright (c) 2025 Alicia Suya Firmansyah. All rights reserved.
	 */
	function encode(code) {
		if (!code) return "Code can't be empty!";

		try {
			new Function(code);
		} catch (error) {
			return error.message;
		}

		const charCodes = Array.from(code).map(char => char.charCodeAt(0));
		return `new Function(String.fromCharCode(${charCodes.join(",")}))();`;
	}

	/**
	 * Decodes a string containing a new Function call back to its original code.
	 * @param {string} text - The encoded function string to decode.
	 * @returns {string} The decoded code string or an error message.
	 * Creator: Alicia Suya Firmansyah
	 * Copyright (c) 2025 Alicia Suya Firmansyah. All rights reserved.
	 */
	function decode(text) {
		if (!text) return "Code can't be empty!";

		try {
			new Function(text);
		} catch (error) {
			return error.message;
		}

		if (!text.includes("new Function") && !text.includes("eval")) {
			return "No function call found!";
		}

		const numbers = text.match(/\d+/g)?.map(Number) || [];
		return String.fromCharCode(...numbers);
	}

	return { encode, decode };
}));