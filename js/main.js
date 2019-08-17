$(document).ready(function() {
    $(".hidetable").click(function () {
    $(".table-showhide").hide("slow");
    });

    $(".showtable").click(function () {
    $(".table-showhide").show(2000);
    });

  });

function refresh() {
    location.reload()
}

/*
function showPhotos(id) {
    document.getElementById(id).style.display = "block";
}

function hidePhotos(id){
    document.getElementById(id).style.display = "none";
} */

