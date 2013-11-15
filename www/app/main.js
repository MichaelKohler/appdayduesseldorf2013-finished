define(function (require) {
    var jquery = require('jquery');

    $(document).ready(function() {
    	console.log('here?');
    	$('submit').on('click', function() {
            console.log('there?');
        	$('title').innerHTML = $('name').value;
    	});
    }); 	
});