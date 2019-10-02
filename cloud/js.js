$(document).ready(function() {
    $.ajax({
        type : "GET",
        url : "http://www.yoonchild.com/cloud/key.html",
        dataType : "text",
        error : function(){
            $("body").empty();
            $("body").text('error!!');
        }
    });
});
