$(document).ready(function() {
    var win = $(window);

    // Each time the user scrolls
    win.scroll(function() {
        // End of the document reached?
        if (win.scrollTop() + win.height() == $(document).height()) {
            $('#example').append(randomPost());
        }
    });
});

function randomPost() {
var html = '<h3>WORST FEELING FOR THE SIGN</h3>' +
'<p>ARIES: anger</p>'+
'<p>TAURUS: neglect</p>';
return html;
}
