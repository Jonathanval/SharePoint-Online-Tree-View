<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
/*************************** Attributions ***************************/
/***********- Jonathan Valdes SharePoint Specialist -****************/
/****************** - jonny_cage1@hotmail.com -**********************/
/********************************************************************/ 
$(document).ready(function(){
    $(".dynamic").css({"padding-bottom":"3px","border":"0px"});
    $("#sideNavBox").css({"position":"relative"});
    $(".ms-core-sideNavBox-removeLeftMargin").css({"position":"fixed","max-height":"800px","overflow":"auto"});
       $("#sideNavBox .ms-core-listMenu-verticalBox li").each( function() {
        if( $( this ).children( 'ul' ).length > 0 ) {
            $( this ).prepend( "<img src='/_layouts/15/images/MDNCollapsed.png'/>" );
            $( '#sideNavBox .ms-core-listMenu-verticalBox li > img' ).css({'display':'inline-block','cursor':'pointer','margin-left': '10px','vertical-align': 'middle'});
            $( '#sideNavBox .ms-core-listMenu-verticalBox li > a' ).css({'display':'inline-block'});
            $(this).addClass('parent');  
            $('#sideNavBox .ms-core-listMenu-verticalBox li > a > span').removeClass('additional-background');   
        }
    });
   $( '#sideNavBox .ms-core-listMenu-verticalBox li > img' ).click( function( ) {      
        $( this ).parent().toggleClass( 'active' );
        $( this ).parent().children( 'ul' ).slideToggle( 'slow' );
        if ($( this ).parent().hasClass( 'active' )){
        $( this ).attr('src','/_layouts/15/images/MDNExpanded.png');
        }
        else{
        $( this ).attr('src','/_layouts/15/images/MDNCollapsed.png');
        }
    });
   $( '.ms-core-listMenu-verticalBox' ).mouseleave( function( ) {
        debugger;
        let timerId = setTimeout(myfunct, 2000);
        $(this).mouseenter(function(){
             clearTimeout(timerId);
        });
    });
});
function myfunct(){
        $( '#sideNavBox .ms-core-listMenu-verticalBox li' ).each( function() {
            $( '#sideNavBox .ms-core-listMenu-verticalBox li' ).removeClass( 'active' );
            $( this ).children( 'ul' ).slideUp( 'slow' );
            if ($( this ).hasClass( 'active' )){
            $( '#sideNavBox .ms-core-listMenu-verticalBox li > img' ).attr('src','/_layouts/15/images/MDNExpanded.png');
            }
            else{
            $( '#sideNavBox .ms-core-listMenu-verticalBox li > img' ).attr('src','/_layouts/15/images/MDNCollapsed.png');
            }
        });    
};
