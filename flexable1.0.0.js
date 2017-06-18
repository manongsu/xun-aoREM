function flex() {
    var width = $(window).width();
    if(width<=540){
        $("html").css("fontSize",width/10);
    }else if(width>540){
        $("html").css("fontSize",76.8);
    }
}
flex();
$(window).resize(function () {
    flex();
})

