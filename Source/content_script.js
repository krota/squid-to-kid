walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			splitAndProcess(node);
			break;
	}
}

function splitAndProcess(text) {
	var words = text.nodeValue.split(' ');
	for(var i = 0; i < words.length; i++) {
		words[i] = squidKid(words[i]);
	}

	text.nodeValue = words.join(' ');
}

function squidKid(word) {

	switch(true) {
		case /\bsquid-to-kid/.test(word):
			word = word.replace(/\bsquid-to-kid/, 'kid-to-squid');
			break;
		case /\bkid-to-squid/.test(word):
			word = word.replace(/\bkid-to-squid/, 'squid-to-kid');
			break;
		case /\bsquid\b/.test(word):
			word = word.replace(/\bsquid\b/, 'kid');
			break;
		case /\bSquid\b/.test(word):
			word = word.replace(/\bSquid\b/, 'Kid');
			break;
		case /\bSQUID\b/.test(word):
			word = word.replace(/\bSQUID\b/, 'KID');
			break;
		case /\bsquids\b/.test(word):
			word = word.replace(/\bsquids\b/, 'kids');
			break;
		case /\bSquids\b/.test(word):
			word = word.replace(/\bSquids\b/, 'Kids');
			break;
		case /\bSQUIDS\b/.test(word):
			word = word.replace(/\bSQUIDS\b/, 'KIDS');
			break;
		case /\bkid\b/.test(word):
			word = word.replace(/\bkid\b/, 'squid');
			break;
		case /\bKid\b/.test(word):
			word = word.replace(/\bKid\b/, 'Squid');
			break;
		case /\bKID\b/.test(word):
			word = word.replace(/\bKID\b/, 'SQUID');
			break;
		case /\bkids\b/.test(word):
			word = word.replace(/\bkids\b/, 'squids');
			break;
		case /\bKids\b/.test(word):
			word = word.replace(/\bKids\b/, 'Squids');
			break;
		case /\bKIDS\b/.test(word):
			word = word.replace(/\bKIDS\b/, 'SQUIDS');
			break;
	}

	return word;
}