jQuery.noConflict();
var currentIndx;
var anchorheight; var currentIndx; var isIE6=false;var menuleft=0;var menuactive=0;

if(navigator.userAgent.toLowerCase().indexOf('msie 6') != -1){ isIE6=true }

var halmegamenu={

effectduration: 0, delaytimer: 50, megamenulabels: [], megamenus: [], zIndexVal: 1000, 

alignmenu:function($, e, mm_pos){

	var megamenu=this.megamenus[mm_pos]

	var $anchor=megamenu.$anchorobj

	var $menu=megamenu.$menuobj

	//Edited from here

		var menutop=0
		jQuery(".mmcont:[_megamenupos="+mm_pos+"pos]").css({"display":"block","visibility":"hidden"})
		var currentloc=(this.megamenus[mm_pos].offsetx-this.megamenus[0].offsetx)+jQuery(".mmcont:[_megamenupos="+mm_pos+"pos]").outerWidth()
		jQuery(".mmcont:[_megamenupos="+mm_pos+"pos]").css({"display":"none","visibility":"visible"})
		if((currentloc)>765){

			menuleft=765-(this.megamenus[mm_pos].offsetx-this.megamenus[0].offsetx+$anchor.outerWidth()+13);

			$menu.css({right:menuleft+"px", top:menutop+"px"})

			}

		else{

		menuleft=this.megamenus[mm_pos].offsetx-this.megamenus[0].offsetx;

		if(mm_pos=="0"){menuleft=0}

		$menu.css({left:"0px", top:menutop+"px"})

		}

},

showmenu:function(e, mm_pos){

	var megamenu=this.megamenus[mm_pos]

	var $menu=megamenu.$menuobj

	var $menuinner=megamenu.$menuinner

	jQuery("#megaanchor"+(mm_pos+1)).parent("li").addClass("mmenabled");
/*	if(currentIndx!=-1 && !jQuery("#megaanchor"+(mm_pos+1)).parent("li").hasClass('Current')){
		jQuery("#GlobalNaviTop li:eq("+currentIndx+")").removeClass("Current");
	}*/

	if ($menu.css("display")=="none"){

		this.alignmenu(jQuery, e, mm_pos)

		$menu.css("z-index", ++this.zIndexVal)

		$menu.show(this.effectduration, function(){

			$menuinner.css('visibility', 'visible')

		})
		
		jQuery("#BrandingImgStyle1").css('z-index', '-1');

	}

	else if ($menu.css("display")=="block" && e.type=="click"){

		this.hidemenu(e, mm_pos)

	}

	return false

},

hidemenu:function(e, mm_pos){

	var megamenu=this.megamenus[mm_pos]

	var $menu=megamenu.$menuobj

	var $menuinner=megamenu.$menuinner

	$menuinner.css('visibility', 'hidden')

		jQuery("#megaanchor"+(mm_pos+1)).parent("li").removeClass("mmenabled");

	$menu.hide(this.effectduration)

},

definemenu:function(anchorid, menuid, revealtype){

	this.megamenulabels.push([anchorid, menuid, revealtype])

},

render:function($){

	for (var i=0, labels=this.megamenulabels[i]; i<this.megamenulabels.length; i++, labels=this.megamenulabels[i]){

		if ($('#'+labels[0]).length!=1 || $('#'+labels[1]).length!=1)

			return

		this.megamenus.push({$anchorobj:$("#"+labels[0]), $menuobj:$("#"+labels[1]), $menuinner:$("#"+labels[1]).children('ul:first-child'), revealtype:labels[2], hidetimer:null})
		
		var megamenu=this.megamenus[i]	

		megamenu.$anchorobj.add(megamenu.$menuobj).attr("_megamenupos", i+"pos") //remember index of this drop down menu

		megamenu.actualwidth=0

		megamenu.actualheight=0

		megamenu.offsetx=0

		megamenu.offsety=0

		megamenu.anchorwidth=0

		megamenu.anchorheight=0

		//$(document.body).append(megamenu.$menuobj) //move drop down menu to end of document

		megamenu.$menuobj.css("z-index", ++this.zIndexVal).hide()

		megamenu.$menuinner.css("visibility", "hidden")

		megamenu.$anchorobj.bind(megamenu.revealtype=="click"? "click" : "mouseenter", function(e){

			var menuinfo=halmegamenu.megamenus[parseInt(this.getAttribute("_megamenupos"))]

			clearTimeout(menuinfo.hidetimer) //cancel hide menu timer

			return halmegamenu.showmenu(e, parseInt(this.getAttribute("_megamenupos")))

		})

		megamenu.$anchorobj.bind("mouseleave", function(e){

			var menuinfo=halmegamenu.megamenus[parseInt(this.getAttribute("_megamenupos"))]

			if (e.relatedTarget!=menuinfo.$menuobj.get(0) && $(e.relatedTarget).parents("#"+menuinfo.$menuobj.get(0).id).length==0){ //check that mouse hasn't moved into menu object

				menuinfo.hidetimer=setTimeout(function(){ //add delay before hiding menu

					halmegamenu.hidemenu(e, parseInt(menuinfo.$menuobj.get(0).getAttribute("_megamenupos")))

				}, halmegamenu.delaytimer)

			}

		})

		megamenu.$menuobj.bind("mouseenter", function(e){

			var menuinfo=halmegamenu.megamenus[parseInt(this.getAttribute("_megamenupos"))]

			clearTimeout(menuinfo.hidetimer) //cancel hide menu timer

		})

		megamenu.$menuobj.bind("click mouseleave", function(e){

			var menuinfo=halmegamenu.megamenus[parseInt(this.getAttribute("_megamenupos"))]

			menuinfo.hidetimer=setTimeout(function(){ //add delay before hiding menu

				halmegamenu.hidemenu(e, parseInt(menuinfo.$menuobj.get(0).getAttribute("_megamenupos")))

			}, halmegamenu.delaytimer)

		})

	} //end for loop

	if(/Safari/i.test(navigator.userAgent)){ //if Safari

		$(window).bind("resize load", function(){

			for (var i=0; i<halmegamenu.megamenus.length; i++){

				var megamenu=halmegamenu.megamenus[i]

				var $anchorisimg=(megamenu.$anchorobj.children().length==1 && megamenu.$anchorobj.children().eq(0).is('img'))? megamenu.$anchorobj.children().eq(0) : null

				if ($anchorisimg){ //if anchor is an image link, get offsets and dimensions of image itself, instead of parent A

					megamenu.offsetx=$anchorisimg.offset().left

					megamenu.offsety=$anchorisimg.offset().top

					megamenu.anchorwidth=$anchorisimg.width()

					megamenu.anchorheight=$anchorisimg.height()

				}

			}

		})

	}

	else{

		$(window).bind("resize", function(){

			for (var i=0; i<halmegamenu.megamenus.length; i++){

				var megamenu=halmegamenu.megamenus[i]	

				megamenu.offsetx=megamenu.$anchorobj.offset().left

				megamenu.offsety=megamenu.$anchorobj.offset().top

			}

		})

	}

//	halmegamenu.addshim($)

}



}



jQuery(document).ready(function($){
	currentIndx=jQuery("#GlobalNaviTop li").index(jQuery("#GlobalNaviTop li.Current")); 
    setInterval(function(){
    	if(jQuery("div.mm:visible").length==0){
 			if(currentIndx!=-1){
			jQuery("#GlobalNaviTop li:eq("+currentIndx+")").addClass("Current")}
			jQuery("#BrandingImgStyle1").css('z-index', '1');
 		}
 	}, 300);
	halmegamenu.render($)
var $jqm = jQuery.noConflict();
$jqm("#megaanchor1").on({mouseenter: function(){
        $(".linkedin").hide();
    },
    mouseleave: function(){
       $(".linkedin").show();
    }
});

$jqm(".mm3col").on({mouseenter: function(){
        $(".linkedin").hide();
    },
    mouseleave: function(){
       $(".linkedin").show();
    }
});


})
