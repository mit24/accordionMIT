jQuery plugin accordionMIT
==========

RULES AND LICENSE

Develope by PHP-developer Pavlov Alex from Workshop of IT (site http://mit24.ru).
The LLC Web have all rights on this plugin. The plugin is available for free use on an "as is".
The developer is not responsible for any errors or malicious code.

==========

INSTRUCTION
Any list or a set of identical blocks with the help of this plug-in you can convert accordion. Example:

JS:
<pre>
$(".parent").AccordionMIT({
  parentBlockRowsDefault: 2,             //Count rows, shows when plugin is loaded
  parentPadding: 20,                     //Margin button from parent block
  elementColsInRow: 3,                   //Numbers elements in row
  elementChild: ".child",                //Child class in DOM structure
  toggle: true,                          //Show button after click
  toggleImg: "/i/arrow/down.png",        //Button image
  toggleWidth: "100%",                   //Width button
  toggleHeight: 60,                      //Height button
  animateSpeed: 1000,                    //Animation speed
});
</pre>

HTML:
<pre>
<div class="parent">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>
</pre>


==========

TECH INFO

Plugin work on framework jQuery 1.8+. 
Support browsers IE6+, Safary2+, Opera11+, FF13+, Chrome 2+
