$(document).ready(function() {
    // Initially hide all paragraphs
    $("#green p, #blue p, #red p, #purple img, #purple p").hide();

    $("#green").hover(
        function() {
            if ($("#green h1").is(":visible")) {
                $("#green h1").fadeOut("fast", function() {
                    $("#green p").fadeIn("fast");
                });
            }
        },
        function() {
            if ($("#green p").is(":visible")) {
                $("#green p").fadeOut("fast", function() {
                    $("#green h1").fadeIn("fast");
                });
            }
        }
    );

    $("#blue").hover(
        function() {
            if ($("#blue h1").is(":visible")) {
                $("#blue h1").fadeOut("fast", function() {
                    $("#blue p").fadeIn("fast");
                });
            }
        },
        function() {
            if ($("#blue p").is(":visible")) {
                $("#blue p").fadeOut("fast", function() {
                    $("#blue h1").fadeIn("fast");
                });
            }
        }
    );

    $("#red").hover(
        function() {
            if ($("#red h1").is(":visible")) {
                $("#red h1").fadeOut("fast", function() {
                    $("#red p").fadeIn("fast");
                });
            }
        },
        function() {
            if ($("#red p").is(":visible")) {
                $("#red p").fadeOut("fast", function() {
                    $("#red h1").fadeIn("fast");
                });
            }
        }
    );

    $("#purple").hover(
        function() {
            if ($("#purple h1").is(":visible")) {
                $("#purple h1").fadeOut("fast", function() {
                    $("#purple img").fadeIn("fast")
                    $("#purple p").fadeIn("fast")
                });
            }
        },
        function() {
            if ($("#purple p").is(":visible")) {
                $("#purple p, #purple img").fadeOut("fast", function() {
                    $("#purple h1").fadeIn("fast");
                });
            }
        }
    );
});

























// More Complex!!! 

// $(document).ready(function() {
//     // Initialize the hover effect for specified divs
//     function setupHoverEffect(id, showElement, hideElement) {
//         $(id).hover(
//             function() {
//                 if ($(hideElement).is(":visible")) {
//                     $(hideElement).fadeOut("fast", function() {
//                         $(showElement).fadeIn("fast");
//                     });
//                 }
//             },
//             function() {
//                 if ($(showElement).is(":visible")) {
//                     $(showElement).fadeOut("fast", function() {
//                         $(hideElement).fadeIn("fast");
//                     });
//                 }
//             }
//         );
//     }

//     // Setup hover effects for each section
//     setupHoverEffect("#green", "#green p", "#green h1");
//     setupHoverEffect("#blue", "#blue p", "#blue h1");
//     setupHoverEffect("#red", "#red p", "#red h1");
//     setupHoverEffect("#purple", "#purple img", "#purple h1");

//     // Initially hide all paragraphs and images
//     $("#green p, #blue p, #red p, #purple img").hide();

    
// });