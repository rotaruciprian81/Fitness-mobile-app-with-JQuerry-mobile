    $(function() {
    var images = $('.images');
    var image = $('.images>img');
    var current = -1;
    var focus = $('.focus');
    var container = $('.focus .container');
    var close = $('.close');
    var next = $('.next');
    var prev = $('.prev');
    image.on('click', function() {
        current = $('img').index($(this));
        container.empty();
        container.append('<img src=\"' + image.eq(current).attr('src') + '\" />');
        focus.fadeIn().addClass('enabled');
        images.addClass('darken');
        images.append('<div class="overlay"></div>');
        $('html, body').animate({
            scrollTop: focus.offset().top - 50
        }, 500);
    });
    close.on('click', function() {
        focus.css('display', 'none').removeClass('enabled');
        images.removeClass('darken');
        $('.overlay').remove();
    });
    prev.on('click', function() {
        current = (current - 1 < 0) ? image.length - 1 : current - 1;
        container.empty();
        container.append('<img src=\"' + image.eq(current).attr('src') + '\" />');
    });
    next.on('click', function() {
        current = (current + 1 > image.length - 1) ? 0 : current + 1;
        container.empty();
        container.append('<img src=\"' + image.eq(current).attr('src') + '\" />');
    });
});
var p = 1,
    b = 1;
$(document).one('pagebeforecreate', function () {
    $.mobile.pageContainer.find("[data-role=page]").each(function () {
        var panel = '<div data-role="panel" id="panel' + p + '"  data-position="left" data-display="push" style="background:#D5E8FB" data-theme="a"><a href="#p1" class="ui-btn ui-icon-home ui-btn-icon-left ui-btn-b ui-corner-all ui-mini ui-shadow" >Home</a><a href="#index" class="ui-btn ui-icon-star ui-btn-icon-left ui-btn-b ui-corner-all ui-mini ui-shadow">Gallery</a><a href="#p3" class="ui-btn ui-icon-clock ui-btn-icon-left ui-btn-b ui-corner-all ui-mini ui-shadow">Training</a><a href="#p4" class="ui-btn ui-icon-shop ui-btn-icon-left ui-btn-b ui-corner-all ui-mini ui-shadow">Shop</a><a href="#p5" class="ui-btn ui-icon-comment ui-btn-icon-left ui-btn-b ui-corner-all ui-mini ui-shadow">Reviews</a><a href="#p6" class="ui-btn ui-icon-mail ui-btn-icon-left ui-btn-b ui-corner-all ui-mini ui-shadow">Contact</a><a href="#header" class="ui-btn ui-icon-power ui-btn-icon-left ui-btn-b ui-corner-all ui-mini ui-shadow" id="btnClose"  data-rel="close">Close panel</a></div>';
        $(this).prepend(panel);
        p++;
    });
    $.mobile.pageContainer.find("[data-role=header]").each(function () {
        var panelBtn = '<a href="#panel' + b + '" class="ui-btn ui-btn-left ui-btn-icon-notext ui-icon-grid ui-corner-all ui-mini"></a>'
        $(this).append(panelBtn);
        b++;
    });
});

$(document).on('pagecreate', '#p1', function(event){
                    setTimeout(function () {
                    $('#myPopup').popup('open');
                    }, 0);
});


    

