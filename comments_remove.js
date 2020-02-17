window.onload = function(){
    //gets the "comments" <ytd-comments> div amd removes it
    var comments = document.getElementById("comments");
    comments.parentNode.removeChild(comments);
}