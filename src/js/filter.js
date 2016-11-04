angular.module('app.filter', [])

.filter('is_css', function(){
	return function(input, opt1, opt2){
		if(input) {
			return opt1;
		} else {
			return "";
		}
	}
});