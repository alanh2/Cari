$(document).ready(function () {
    console.log(navigator.userAgent.indexOf('Mac'));
    if(navigator.userAgent.indexOf('Mac') > 0){
        console.log("entro en mac");
        $('body').addClass('mac-os');
    }
});