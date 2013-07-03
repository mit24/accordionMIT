(function($){
  jQuery.fn.AccordionMIT = function(options){		
		options = $.extend({
			parentBlockRowsDefault: 2,				//Количество строк, которые видно при загрузке плагина
			parentPadding: 20,								//Отступ кнопки от родителя
			elementColsInRow: 3,							//Количество элементов в строке
			elementChild: ".child-element",		//Идентифекатор дочернего элемента
			toggle: true,									    //Показывать кнопку после разворота
  		toggleImg: "/down.png",           //Изображение кнопки
			toggleWidth: "100%",							//Ширина кнопки
			toggleHeight: 60,									//Высота кнопки
			animateSpeed: 1000,								//Скорость анимации
		}, options);
		
		//Проверка на целочисленность
		var isInteger = function(val) {
			return (val ^ 0) === val;
		}
		
		//Контроллер размеров
		var controller = function(val) {
			var totalCol = $(val).find(options.elementChild).length,
				realRow = parseInt(totalCol/options.elementColsInRow);
			if(realRow<=options.parentBlockRowsDefault) {
				return true;
			}
			else return false;
		}
		
		//Сборка
		var make = function(){
				
			var rowHeight = parseInt($(this).children(options.elementChild).css("height")) + 			//Складываем все величины дочернего блока
							parseInt($(this).children(options.elementChild).css("margin-top")) + 		//для расчета реальной высоты блока
							parseInt($(this).children(options.elementChild).css("margin-bottom"))+		//По необходимости можно добавить padding
							parseInt($(this).children(options.elementChild).css("border-top-width"))+
							parseInt($(this).children(options.elementChild).css("border-bottom-width")),
				sizeBlockDefault = rowHeight*options.parentBlockRowsDefault,							//Дефолтный размер блока
				keyBlock = (Math.random() * (200 - 1) + 1).toFixed(0);									//Уникальный ключ блока
				//totalCount = $(this).(options.elementChild).length;
			
			//Формирование родительского блока
			$(this).addClass("uBankAccordion"+keyBlock)		//Уникальный ключ блока
			.addClass('deactiveToggleU') 					//Класс наличия активности блока
			.attr("data-height-default",sizeBlockDefault);	//Сохранение дефолтной высоты в атрибуте
			
			var sizeControl = controller(".uBankAccordion"+keyBlock);
			if(sizeControl==false) {
				$(".uBankAccordion"+keyBlock).css("height",sizeBlockDefault);
			}
			else {
				//options.toggle=false;
			}
			/*
			.css("height",sizeBlockDefault)					//Установка дефолтного размера
			*/
			
			
			//Формирование кнопки переключателя
			$(this).after($('<div />')									//Создание кнопки переключателя
			.addClass('toggle')											//Присвоение класса
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
			})															//Дизайн кнопки переключателя
			.attr("rel",".uBankAccordion"+keyBlock)						//Установка ключа родительского блока
			.click(function() {
				var relToggle = $(this).attr("rel"),
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
