var body = document.body.innerHTML;

words = body.split(' ');

for(var i = 0; i < words.length; i++) {
	words[i] = squidKid(words[i]);
}

function squidKid(word) {

	switch(true) {
		case /\bsquid\b/.test(word):
			word = "kid";
			break;
		case /\bSquid\b/.test(word):
			word = "Kid";
			break;
		case /\bSQUID\b/.test(word):
			word = "KID";
			break;
		case /\bsquids\b/.test(word):
			word = "kids";
			break;
		case /\bSquids\b/.test(word):
			word = "Kids";
			break;
		case /\bSQUIDS\b/.test(word):
			word = "KIDS";
			break;
		case /\bkid\b/.test(word):
			word = "squid";
			break;
		case /\bKid\b/.test(word):
			word = "Squid";
			break;
		case /\bKID\b/.test(word):
			word = "SQUID";
			break;
		case /\bkids\b/.test(word):
			word = "squids";
			break;
		case /\bKids\b/.test(word):
			word = "Squids";
			break;
		case /\bKIDS\b/.test(word):
			word = "SQUIDS";
			break;
	}

	return word;
}

document.body.innerHTML = words.join(' ');