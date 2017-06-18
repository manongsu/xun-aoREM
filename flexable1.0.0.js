function flex() {
    var width = $(window).width();
    if(width<=414){
        $("html").css("fontSize",width/10);
    }

}
flex();
$(window).resize(function () {
    flex();
})

