(function($){
  jQuery.fn.AccordionMIT = function(options){		
		options = $.extend({
			parentBlockRowsDefault: 2,	//The number of rows that are visible when the plugin is loaded
			parentPadding: 20,		//Indent button from parent
			elementColsInRow: 3,		//The number of elements in a row
			elementChild: ".child-element",	//Identifekator child element
			toggle: true, 			//Show button after turning
			toggleImg: "/ down.png", 	//Button image
			toggleWidth: "100%", 		//width of the button
			toggleHeight: 60, 		//height of the button
			animateSpeed: 1000 		//animation speed
		}, options);
		
		//Check for integrality
		var isInteger = function(val) {
			return (val ^ 0) === val;
		}
		
		//controller size
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
				
			var 	rowHeight = parseInt($(this).children(options.elementChild).css("height")) +			
					parseInt($(this).children(options.elementChild).css("margin-top")) +
					parseInt($(this).children(options.elementChild).css("margin-bottom"))+
					parseInt($(this).children(options.elementChild).css("border-top-width"))+
					parseInt($(this).children(options.elementChild).css("border-bottom-width"))+
					parseInt($(this).children(options.elementChild).css("padding-top"))+
					parseInt($(this).children(options.elementChild).css("padding-bottom")),
				sizeBlockDefault = rowHeight*options.parentBlockRowsDefault,
				keyBlock = (Math.random() * (200 - 1) + 1).toFixed(0);
			
			//Formation of the parent unit
			$(this).addClass("uBankAccordion"+keyBlock)		//Uniq key of block
			.addClass('deactiveToggleU') 				//Class presence of an active unit
			.attr("data-height-default",sizeBlockDefault);		//Saving the height of default attribute
			
			var sizeControl = controller(".uBankAccordion"+keyBlock);
			if(sizeControl==false) {
				$(".uBankAccordion"+keyBlock).css("height",sizeBlockDefault);
			}
			else {
				//options.toggle=false;
			}
			
			//Making button switch
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
			.attr("rel",".uBankAccordion"+keyBlock)
			.click(function() {
				var 	relToggle = $(this).attr("rel"),
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
				}
				else {
					$(relToggle).animate({height:sizeBlockDefault},options.animateSpeed).removeClass("activeToggleU").addClass("deactiveToggleU");
				}
			}));
	    };

	    return this.each(make);
	};
})(jQuery);
