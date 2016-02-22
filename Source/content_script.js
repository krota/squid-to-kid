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
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue.toLowerCase();

	v = v.replace(/\ba squid now\b/g, "a kid now");
	v = v.replace(/\ba kid now\b/g, "a squid now");
	v = v.replace(/\bsquid\b/g, "kid");
	v = v.replace(/\bkid\b/g, "squid");
	
	textNode.nodeValue = v;
}


