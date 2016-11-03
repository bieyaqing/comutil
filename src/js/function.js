var UTIL = (function() {
	var app = {};

	app.viatickConsole = function() {
		console.log("%c__      __  _      __    _______   _    ____   _   __\n" +
				"%c\\ \\    / / | |    /  \\  |__   __| | |  / ___\\ | | / /\n" +
				"%c \\ \\  / /  | |   / /\\ \\    | |    | | / /     | |/ /\n" +
				"%c  \\ \\/ /   | |  / /  \\ \\   | |    | | \\ \\____ |  _ \\\n" +
				"%c   \\__/    |_| /_/    \\_\\  |_|    |_|  \\____/ |_| \\_\\\n\n",
				'color:#A1C7E3','color:#A1C7E3','color:#91BEDE','color:#91BEDE','color:#81B5D9');
		console.log('%cWe are looking for talents\n'+
				'Refer to the About page for detailed job description:)\n\n' +
				'Email: bieyaqing@viatick.com\n'+
				'Phone: +65 9069 6851', 'color:#009999');
	};

	return app;
})();
