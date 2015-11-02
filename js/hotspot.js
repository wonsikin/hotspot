(function($) {
	function c(a, b) {
		this.options = b;
		this.root = a
	}
	c.prototype.init = function() {
		var a = "",
			d = "",
			c = "auto",
			g = "",
			h = "",
			e, f, a = a + ('<img src="' + this.root.find("img").first().attr("src") + '">');
		this.root.find(".hs-spot-object").each(function() {
			"rect" == $(this).data("type") ? (d = "hs-rect", e = $(this).data("x"), f = $(this).data("y")) : (d = "hs-spot", e = $(this).data("x") - $(this).data("width") / 2, f = $(this).data("y") - $(this).data("height") / 2);
			g = "visible" == $(this).data("visible") ? "visible" : "";
			c = !1 == $(this).data("tooltip-auto-width") ? $(this).data("tooltip-width") + "px" : "auto";
			h = $(this).data("popup-position");
			a += '<div class="' + d + " " + g + " " + h + ' hs-spot-object" style="left: ' + e + "px; top: " + f + "px; width: " + $(this).data("width") + "px; height: " + $(this).data("height") + 'px;">';
			a += '\t<div class="hs-spot-shape-inner"></div><div class="hs-spot-shape-inner-two"></div>';
			a += '\t<div class="hs-spot-tooltip-outer">';
			a += '\t\t<div class="hs-tooltip-wrap" style="width: ' + c + ';">';
			a += '\t\t\t<div class="hs-tooltip-line"></div>';
			a += '\t\t\t<div class="hs-tooltip">';
			a += $(this).html();
			a += "\t\t\t</div>";
			a += "\t\t</div>";
			a += "\t</div>";
			a += "</div>"
		});
		this.root.html(a);
		this.root.removeClass("hs-loading");
		this.root.addClass(this.options.show_on);
		this.root.addClass(this.options.color_scheme);
		this.options.transparent_spots && this.root.addClass("transparent-spots");
		if ("click" == this.options.show_on){
      $(".hs-spot-object").on("click", function() {
  			$(this).toggleClass("visible-tooltip")
  		});
    }
		"mouseover" == this.options.show_on && ($(".hs-spot-object").on("mouseover", function() {
			$(this).addClass("visible-tooltip")
		}), $(".hs-spot-object").on("mouseout", function() {
			$(this).removeClass("visible-tooltip")
		}))
	};
	$.fn.hotspot = function(a) {
		O = $.extend(!0, {
			show_on: "mouseover",
			transparent_spots: !0,
			color_scheme: "red"
		}, a);
		return this.each(function() {
			(new c($(this), O)).init()
		})
	}
})(jQuery);
