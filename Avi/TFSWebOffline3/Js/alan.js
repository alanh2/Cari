$(document).ready(function () {
    if(navigator.userAgent.indexOf('Mac') > 0){
        $('body').addClass('mac-os');
    }

});
    function OnMenuClick(Name) {
        inactiveMenus();
        activeMenu(Name);
    }

    function inactiveMenus() {
        $('#menu1 > a').removeClass('active');
        $('#menu2 > a').removeClass('active');
        $('#menu3 > a').removeClass('active');
        $('#menu4 > a').removeClass('active');
        $('#menu5 > a').removeClass('active');
        $('#LiGroups > a').removeClass('active');
        $('#LiRules > a').removeClass('active');
    }

    function activeMenu(Name) {
        $('#'+Name+' > a').addClass('active');
    }
