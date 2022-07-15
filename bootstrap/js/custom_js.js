$(document).ready( function() {

    $("#input").change( function() {

        var input = $(this).val();

        $("ul").append('<li>'+input+' <i class="glyphicon glyphicon-ok"></i> <i class="glyphicon glyphicon-trash"></i> </li>');

        $(this).val('');
    });

    $("ul").on("click", ".glyphicon-trash", function() {

        $(this).parent('li').fadeOut(200);
    });

    $("ul").on("click", ".glyphicon-ok", function() {

        $(this).parent('li').toggleClass('checked');
    });
});