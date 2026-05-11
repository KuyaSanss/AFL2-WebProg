$(function () {
    $("#navBar").load("navbar.html", function () {
        var location = window.location.pathname.split("/").pop();

        if (location === "") { location = "home.html"; }

        $("#navBar a").each(function () {
            var href = $(this).attr("href");

            if (href === location) {
                $(this).addClass("bg-[#8B7355] text-white font-bold"); 
                $(this).removeClass("hover:bg-[#E8E0D5]"); 
            }
        });

        $("#menu-btn").click(function() {
            $("#mobile-menu").toggleClass("hidden");
        });
    });

    $("#footerPlaceholder").load("footer.html", function() {
        console.log("Footer loaded.");
    });
});