$(function() {

    $('#side-menu').metisMenu();
    
    $.ajax({
      url: 'http://api.randomuser.me/?results=30&nat=us',
      dataType: 'json',
      success: function(data) {
        var employee;
          //console.log(data);
        for (var i = 0; i < data.results.length; i++) {
            employee = '<a class="list-group-item" href="#"><img class="employee-img" src="' + data.results[i].picture.thumbnail + '" alt="employee pic"/><span>' + data.results[i].name.first + ' ' + data.results[i].name.last + '</span></a>';
            //console.log(employee);
            $('#searchlist').append(employee);
            //console.log('i: ' + (i-1));
            //console.log('length: ' + data.results.length);
            if ((i - 1) === (data.results.length - 2)) {
                //alert('last one');
                $('#searchlist').btsListFilter('#searchinput');
            }
        }
        
      }
    });

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
     return this.href == url;
    }).addClass('active').parent();

    while(true){
        if (element.is('li')){
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});
