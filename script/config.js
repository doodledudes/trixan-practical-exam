// JavaScript Document

var modernTouch = function () {
	return {
		
		init : function() {
			
			modernTouch.navEffects(".widget-menu ul li a.main");
			modernTouch.navEffects(".widget-dropdown .select");
			
			modernTouch.placeHolder(".search :text"); // should point to the textbox as selector
			
		},
		
		navEffects : function (obj) {
			jQuery(obj).on("mousemove",function() {
				if (jQuery(this).find(".hidden").is(":hidden")) {
					jQuery(this).find(".hidden").hide().slideDown();
				}
			}).on("mouseleave",function() {
				jQuery(this).find(".hidden").hide();
			});
		},
		
		placeHolder : function (obj) {
			jQuery(obj).on("focus",function() {
				jQuery(this).val("");
			}).on("blur",function() {
				if (jQuery(this).val() == "") {
					jQuery(this).val("Seach the website");
				}
			});
		}
		
	}
}();

jQuery(modernTouch.init());