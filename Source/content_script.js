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
        case /\bsquid-to-kid\b/.test(word):
            word = 'kid-to-squid';
            break;
        case /\bkid-to-squid\b/.test(word):
            word = 'squid-to-kid';
            break;
		case /\bsquid\b/.test(word):
			word = 'kid';
			break;
		case /\bSquid\b/.test(word):
			word = 'Kid';
			break;
		case /\bSQUID\b/.test(word):
			word = 'KID';
			break;
		case /\bsquids\b/.test(word):
			word = 'kids';
			break;
		case /\bSquids\b/.test(word):
			word = 'Kids';
			break;
		case /\bSQUIDS\b/.test(word):
			word = 'KIDS';
			break;
		case /\bkid\b/.test(word):
			word = 'squid';
			break;
		case /\bKid\b/.test(word):
			word = 'Squid';
			break;
		case /\bKID\b/.test(word):
			word = 'SQUID';
			break;
		case /\bkids\b/.test(word):
			word = 'squids';
			break;
		case /\bKids\b/.test(word):
			word = 'Squids';
			break;
		case /\bKIDS\b/.test(word):
			word = 'SQUIDS';
			break;
	}

	return word;
}