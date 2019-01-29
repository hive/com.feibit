'use strict';

const Homey = require('homey');

class MyApp extends Homey.App {

	onInit() {
		this.log('<com.feibit>');
	}

}

module.exports = MyApp;
