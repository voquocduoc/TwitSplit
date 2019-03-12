const MAX_SENT_LEN = 50;

/**
 * @param {string} msg - The input string
 * @return {array<string>} - The array of splitting messages
 * If the input one does not need to split, this function will return an
 * array of one item.
 */
function splitMessage(msg) {
	const nmsg = msg.trim();
  const msgLen = nmsg.length;

	if (msgLen === 0) {
		return [];
	}

  if (msgLen <= MAX_SENT_LEN) {
  	return [nmsg];
  }

	let integer = Math.round(msgLen / MAX_SENT_LEN);
	let chunks = [];
	const words = nmsg.split(' ');
	let chunksCount = 0;
	let currentString = '';
	try {
		words.forEach(word => {
			if (word.length > MAX_SENT_LEN) {
				throw '<error>: there is a word over 50 letters!';
			}

			currentString = currentString + " " + word;
			if (currentString.length <= MAX_SENT_LEN - 3) {
				chunks[chunksCount] = currentString;
			} else {
				currentString = '';
				currentString = currentString + word;
				chunksCount++;
			}
		});

		chunks = chunks.map((block, index) => `${index + 1}/${integer} ${block}`);
		return chunks;
	} catch(e) {
		return [e];
	}
}

module.exports = splitMessage;
