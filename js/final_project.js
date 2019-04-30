//creates console box, prints console is ready 
$(function() {
  $("#console-box").append("console is ready...");
//whenever a button is pressed, the console prints what class it is in and the value it contains. If a button is pressed again, it removed the previous class and selects the new one. 
  $("li").click(function() {
    $("#console-box").append(
      "<br>class:" + $(this).attr("class") + "|value:" + $(this).text() + "."
    );
    $(this)
      .toggleClass("selected")
      .siblings()
      .removeClass("selected");
  });
});