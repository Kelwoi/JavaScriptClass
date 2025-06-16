const colors = ["red", "green", "blue", "orange", "purple", "cyan", "lime", "teal", "brown", "pink", "gray", "yellow"];

$(document).ready(function() {
  $("#addBlock").click(function() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const $block = $("<div></div>").addClass("color-block").css("background-color", color);
    
    $block.click(function() {
      $(this).remove();
    });

    $(".block-container").append($block);
  });
});
