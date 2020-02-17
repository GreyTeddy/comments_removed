window.onload = function () {
    //gets the "comments" <ytd-comments> div amd removes it
    let comments = document.getElementById("comments");
    comments.parentNode.removeChild(comments);

    //removes the the bottom border (on the secondary info)
    let description = document.getElementsByTagName("ytd-video-secondary-info-renderer")[0];
    if (description) description.style.border = "none";

}