$('#i_file').on('change', function(event) {
    var patch = URL.createObjectURL(event.target.files[0]);
    $('#file_name').attr('src', patch);

});