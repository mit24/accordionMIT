accordionMIT
============

How to use the accordionMIT.

You must initialize a plugin in head of HTML document, where need used a plugin.

<head>
<script src="directory/jquery.js"></script>
<script src="directory/jquery.AccordionMIT.js"></sctipt>
</head>

Then you can use plugin on some element in DOM-structure:
<script>
$(".list-elements").uBankAccordion({
  elementColsInRow: 4, 
  parentBlockRowsDefault:1, 
  elementChild: ".child-element", 
  parentPadding: 0
});
</script>

That's all.
