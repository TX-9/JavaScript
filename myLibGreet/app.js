var g = G$('Jacob', 'Lee');
g.greet().setLang('en').greet(true).log();

$('#login').click(function(){

    var loginGrtr = G$('Jacob', 'Lee');
    $('#logindiv').hide();

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

})
