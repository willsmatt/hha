/* **************************************************Name: header_eu_en.jsDescription: JavaScript for HeaderCreate: 2014.07.23Update: XXXX.XX.XXCopyright 2014 Hitachi, Ltd.***************************************************** */
(function($){
        var hd = {
                "common"        : "http://www.hitachi.com/js/en/r1/hd_common.js",
                "search"        : "/sites/all/themes/hitachi/higis-4/js/en/r1/hd_search_gr_el.js",
                "network"       : "http://www.hitachi.com/js/en/r1/hd_network.js",
                "products"      : "/sites/all/themes/hitachi/higis-4/js/en/r1/hd_products_gr_el.js",
                "about"         : "/sites/all/themes/hitachi/higis-4/js/en/r1/hd_about_gr_el.js"
        }

        var hd1 = '<script type="text/javascript" src="';
        var hd2 = '" charset="utf-8"></script>';
        $("head").append(hd1 + hd.search + hd2 + hd1 + hd.network + hd2 + hd1 + hd.products + hd2 + hd1 + hd.about + hd2 + hd1 + hd.common + hd2);
})(jQuery);

