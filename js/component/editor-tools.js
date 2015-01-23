/*
 |---------------------------------
 | Editor tools Component
 |---------------------------------
*/
Exyht.EditorToolsComponent = Ember.Component.extend({
	actions: {
    	// Editor tools
    	ctv: function(input){
      		var textarea = $('textarea');
      		textarea.val(textarea.val() + input);
    	},
    	citv: function(input1, input2){
      		var textarea = $('textarea');
      		if (textarea.val() === ''){
        		textarea.val(textarea.val() + input1);
      		}else{
        		textarea.val(textarea.val() + input2);
      		}
    	},
    	insertBold: function(){
      		this.send('ctv', " **bold** ");
    	},
    	insertItalic: function(){
      		this.send('ctv', " *italic* ");
    	},
    	insertLink: function(){
      		this.send('citv', "[Link description](http://example.com)", "\n [Link description](http://example.com)");
    	},
    	insertQuote: function(){
      		this.send('ctv', "\n > your quote here");
    	},
    	insertCode: function(){
      		this.send('citv', "`For inline code` \n\n\tFor pre code", "\n\n`For inline code` \n\n\tFor pre code");
    	},
    	insertOrderedlist: function(){
      		this.send('ctv', "Indent one space after the dot \'.\'\n\n1. Ordered list1\n2. Ordered list2");
    	},
    	insertUnorderedlist: function(){
      		this.send('ctv', "Indent one space after the + or -.\n\n- Unordered list1\n\t+ Nested list");
    	},
    	insertHorizontalrule: function(){
      		this.send('citv', "-----\nNew line", "\n\n-----\nNew line");
    	},
    	insertStrikethrough: function(){
      		this.send('ctv', "<del>Strike through</del>");
    	},
    	insertSubscript: function(){
      		this.send('ctv', "Sub<sub>script</sub>");
    	},
    	insertSuperscript: function(){
      		this.send('ctv', "Sub<sup>script</sup>");
    	},
    	insertHeading1: function(){
      		this.send('citv', "# Heading1\n", "\n# Heading1\n");
    	},
    	insertHeading2: function(){
      		this.send('citv', "# Heading2\n", "\n# Heading2\n");
    	},
    	insertHeading3: function(){
      		this.send('citv', "# Heading3\n", "\n# Heading3\n");
    	}
  	}
});