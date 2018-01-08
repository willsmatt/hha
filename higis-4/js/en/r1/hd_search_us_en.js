/* **************************************************

Name: hd_search_us_en.js

Description: Search Box for Header

Create: 2014.07.23
Update: XXXX.XX.XX

Copyright 2014 Hitachi, Ltd.

***************************************************** */



var _SText = '<div id="SearchArea">';
_SText += '<div id="SearchSet">';
_SText += '<dl>';
_SText += '<dt>Search within Hitachi</dt>';
_SText += '<dd>';
_SText += '<form action="http://search.hitachi.co.jp/sitesearch/RGN-USA" method="get">';
_SText += '<fieldset>';
_SText += '<legend>Search Form</legend>';
_SText += '<input type="hidden" name="SITE" value="RGN-USA" />';
_SText += '<input type="hidden" name="SC" value="RGN-USA" />';
_SText += '<input type="hidden" name="LANG" value="EN" />';
_SText += '<input type="hidden" name="PL" value="EN" />';
_SText += '<input type="hidden" name="SET" value="1" />';
_SText += '<input type="text" name="Q" size="20" maxlength="40" accesskey="s" title="Search within Hitachi" class="SearchTextBox" /><input type="submit" value="Search" class="BtnSearch" />';
_SText += '</fieldset>';
_SText += '</form>';
_SText += '</dd>';
_SText += '</dl>';
_SText += '<p class="BtnClose"><a href="javascript:void(0);">Close</a></p>';
_SText += '</div>';
_SText += '</div>';
