window.addEventListener("message", function(event) {
    let types = ["success","warning","error","info"]
    $(".notify-main").fadeIn().append(
        `<div class='notifytext'><i class='fas fa-${event.data.icon}'></i><p>${event.data.message}</p></div>`
    );
    if ($.inArray(event.data.bg, types) === -1) {
        $(".notifytext:last").css("background-color", event.data.bg);
    } else {
        $(".notifytext:last").addClass(event.data.bg);
    }
    setTimeout(function() {
       $.when($(".notifytext:last").fadeOut()).done(function() {
          $(".notifytext:last").remove();
     })
    }, 4500);
});
