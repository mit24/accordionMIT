(function($){
	jQuery.fn.AccordionMIT = function(options){
		options = $.extend({
			parentBlockRowsDefault: 2,		//Count rows, shows when plugin is loaded
			parentPadding: 20,				//Margin button from parent block
			elementColsInRow: 3,			//Numbers elements in row
			elementChild: ".child-element",	//Child class in DOM structure
			toggle: true,					//Show button after click
			toggleImg: "/i/arrow/down.png",	//Button image
			toggleWidth: "100%",			//Width button
			toggleHeight: 60,				//Height кнопки
			animateSpeed: 1000,				//Animation speed
		}, options);

		//Check of integer
		var isInteger = function(val) {
			return (val ^ 0) === val;
		}

		//Controll of size
		var controller = function(val) {
			var totalCol = $(val).find(options.elementChild).length,
				realRow = parseInt(totalCol/options.elementColsInRow);
			if(realRow<=options.parentBlockRowsDefault) {
				return true;
			}
			else return false;
		}

		//Assembly
		var make = function(){
			var element = $(this),
				rowHeight = parseInt($(this).children(options.elementChild).css("height")) + 
							parseInt($(this).children(options.elementChild).css("margin-top")) + 
							parseInt($(this).children(options.elementChild).css("margin-bottom"))+	
							parseInt($(this).children(options.elementChild).css("border-top-width"))+
							parseInt($(this).children(options.elementChild).css("border-bottom-width"))+
							parseInt($(this).children(options.elementChild).css("padding-top"))+
							parseInt($(this).children(options.elementChild).css("padding-bottom")),
				sizeBlockDefault = rowHeight*options.parentBlockRowsDefault,
				keyBlock = (Math.random() * (200 - 1) + 1).toFixed(0);

			//Make parent block
			$(this).addClass("AccordionMIT"+keyBlock)
			.addClass('deactiveToggleU') 
			.attr("data-height-default",sizeBlockDefault);

			var sizeControl = controller(".AccordionMIT"+keyBlock);
			if(sizeControl==false) {
				$(".AccordionMIT"+keyBlock).css("height",sizeBlockDefault);
				$(this).after($('<div />')
						.addClass('toggle')
						.css({
							"display"	: "block",
							"position"	: "relative",
							"bottom"	: 0,
							"width"		: options.toggleWidth,
							"height"	: options.toggleHeight,
							"background-image": "url("+options.toggleImg+")",
							"background-position": "center",
							"background-repeat": "no-repeat",
							"cursor"	:"pointer"
						})
						.attr("rel",".AccordionMIT"+keyBlock)
						.click(function() {
							var toggleSpan = $(this),
								relToggle = $(this).attr("rel"),
								countDivs = $(relToggle).find(options.elementChild).length,
								rowsCount = countDivs/options.elementColsInRow;

							if($(relToggle).hasClass("deactiveToggleU")) {
								if(isInteger(rowsCount)==true) {
									sizeBlock = rowsCount*rowHeight+options.parentPadding;
								}
								else {
									var intRowsCount = parseInt(rowsCount);
									sizeBlock = ((intRowsCount + 1) * rowHeight) + options.parentPadding;
								}
								if(options.toggle==false) {
									$(this).fadeOut(options.animateSpeed);
								}
								$(relToggle).animate({height:sizeBlock},options.animateSpeed).removeClass("deactiveToggleU").addClass("activeToggleU");
								toggleSpan.addClass("up-img");
							}
							else {
								$(relToggle).animate({height:sizeBlockDefault},options.animateSpeed).removeClass("activeToggleU").addClass("deactiveToggleU");
								toggleSpan.removeClass("up-img");
							}
						}));
			}
	    };

	    return this.each(make);
	};
})(jQuery);
