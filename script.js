$(".nav_name_cont").children().click(function(){
  $(this).parent().children().each(function(){
    $(this).css({"font-weight": "normal","border-bottom": "0px solid #fff"});
  });
  $(this).css({"font-weight": "bold","border-bottom": "1px solid #fff"});
});