/*
 |---------------------------
 | Application View
 |---------------------------
*/
Exyht.ApplicationView = Ember.View.extend({
  
  	templateName: "application",

  	didInsertElement: function(){
    	$(window).scroll( function() {
        	if ( $(window).scrollTop() > 20 ) {
        		if (window.matchMedia('(min-width: 1200px)').matches || window.matchMedia('(min-width: 768px)').matches) {
                    $('#toprow-for-title').css({'position':'fixed', 'top':'0px', 'z-index': '1', 'width': '60%', 'background-color': '#fff'});
            		$('#sidebar').css({'position':'fixed', 'left':'60%', 'top':'auto','bottom':'0px'});
            	} else {
            		$('#sidebar').css({'position':'relative','top':'auto', 'left': 'auto', 'bottom':'auto'});
            	}
        	} else {
        		if (window.matchMedia('(min-width: 1200px)').matches || window.matchMedia('(min-width: 768px)').matches) {
            		$('#sidebar').css({'position':'relative','top':'0px', 'left': 'auto', 'bottom':'auto'});
            	} else {
            		$('#sidebar').css({'position':'relative','top':'auto', 'left': 'auto', 'bottom':'auto'});
            	}
                $('#toprow-for-title').css({'position':'relative', 'top':'0px'});
        	}
    	});
  	}
});