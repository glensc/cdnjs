(function ( factory ) {
    if ( typeof define === 'function' && define.amd )
    {
        // AMD. Register as an anonymous module.
        define( [ 'jquery' ], factory );
    }
    else if ( typeof exports === 'object' )
    {
        // Node/CommonJS
        factory( require( 'jquery' ) );
    }
    else
    {
        // Browser globals
        factory( jQuery );
    }
}( function ( jQuery ) {


/*	
 * jQuery mmenu searchfield addon
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(e){function s(s){return"boolean"==typeof s&&(s={add:s,search:s}),"object"!=typeof s&&(s={}),s=e.extend(!0,{},e[d].defaults[c],s),"boolean"!=typeof s.showLinksOnly&&(s.showLinksOnly="menu"==s.addTo),s}function n(e){return e}function t(){h=!0,o=e[d]._c,r=e[d]._d,i=e[d]._e,o.add("search hassearch noresultsmsg noresults nosubresults counter"),i.add("search reset change"),l=e[d].glbl}function a(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var o,r,i,l,d="mmenu",c="searchfield",h=!1;e[d].prototype["_addon_"+c]=function(){h||t(),this.opts[c]=s(this.opts[c]),this.conf[c]=n(this.conf[c]);var l=this,d=this.opts[c];if(this.conf[c],d.add){switch(d.addTo){case"menu":var u=this.$menu;break;case"panels":var u=e("."+o.panel,this.$menu);break;default:var u=e(d.addTo,this.$menu).filter("."+o.panel)}u.length&&u.each(function(){var s=e(this),n=s.is("."+o.list)?"li":"div",t=e("<"+n+' class="'+o.search+'" />');if(t.append('<input placeholder="'+d.placeholder+'" type="text" autocomplete="off" />'),s.is("."+o.menu))t.prependTo(l.$menu);else{var a=s.children().first(),r=a.is("."+o.subtitle)?"After":"Before";t["insert"+r](a)}d.noResults&&(s.is("."+o.menu)&&(s=s.find("."+o.panel).first()),n=s.is("."+o.list)?"li":"div",e("<"+n+' class="'+o.noresultsmsg+'" />').html(d.noResults).appendTo(s))})}if(this.$menu.children("div."+o.search).length&&this.$menu.addClass(o.hassearch),d.search){var f=e("."+o.search,this.$menu);f.length&&f.each(function(){var s=e(this);if("menu"==d.addTo)var n=e("."+o.panel,l.$menu),t=l.$menu;else var n=s.closest("."+o.panel),t=n;var c=n.add(n.children("."+o.list)),h=s.find("input"),u=e("> li",c),f=u.filter("."+o.label),p=u.not("."+o.subtitle).not("."+o.label).not("."+o.search).not("."+o.noresultsmsg),m="> a";d.showLinksOnly||(m+=", > span"),h.off(i.keyup+" "+i.change).on(i.keyup,function(e){a(e.keyCode)||s.trigger(i.search)}).on(i.change,function(){s.trigger(i.search)}),s.off(i.reset+" "+i.search).on(i.reset+" "+i.search,function(e){e.stopPropagation()}).on(i.reset,function(){s.trigger(i.search,[""])}).on(i.search,function(s,a){"string"==typeof a?h.val(a):a=h.val(),a=a.toLowerCase(),n.scrollTop(0),p.add(f).addClass(o.hidden),p.each(function(){var s=e(this);e(m,s).text().toLowerCase().indexOf(a)>-1&&s.add(s.prevAll("."+o.label).first()).removeClass(o.hidden)}),e(n.get().reverse()).each(function(s){var n=e(this),t=n.data(r.parent);if(t){var a=n.add(n.find("> ."+o.list)).find("> li").not("."+o.subtitle).not("."+o.search).not("."+o.noresultsmsg).not("."+o.label).not("."+o.hidden);a.length?t.removeClass(o.hidden).removeClass(o.nosubresults).prevAll("."+o.label).first().removeClass(o.hidden):"menu"==d.addTo&&(n.hasClass(o.opened)&&setTimeout(function(){t.trigger(i.open)},1.5*(s+1)*l.conf.openingInterval),t.addClass(o.nosubresults))}}),t[p.not("."+o.hidden).length?"removeClass":"addClass"](o.noresults),l._update()})})}},e[d].addons=e[d].addons||[],e[d].addons.push(c),e[d].defaults[c]={add:!1,addTo:"menu",search:!1,placeholder:"Search",noResults:"No results found."}}(jQuery);
}));