jQuery('ul.menu_custom li').click(function () {
    jQuery('.navigation_wrap:visible').add(jQuery(this).find('.navigation_wrap:first')).toggle();
});
