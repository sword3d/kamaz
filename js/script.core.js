;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			//self.NameFunction();

		},

		windowLoad: function(){

			var self = this;

			self.preloader();

		},

		/**
		**	Preloader
		**/

		preloader: function(){

			var self = this;

			self.preloader = $('#page-preloader');
	        self.spinner   = self.preloader.find('.preloader');

		    self.spinner.fadeOut();
		    self.preloader.delay(350).fadeOut('slow');
		},



	}


	$(document).ready(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});


})(jQuery);