
$('#gomb').click(function () {
    let beolvasas = $('#szovegbevitel').val();
    $("#felsorolas:last-of-type").append("<li>" + beolvasas + "</li>");
    
});


