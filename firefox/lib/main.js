var cm = require("sdk/context-menu");

// Create a context menu item for selected text
cm.Item({
	label: "Search in Online Etymology Dictionary",
	context: cm.SelectionContext(),
	contentScript: 'self.on("click", function(node, data) { ' + 
		'window.open("http://etymonline.com/index.php?search=" + escape(window.getSelection().toString()));' + 
	'});'
});

