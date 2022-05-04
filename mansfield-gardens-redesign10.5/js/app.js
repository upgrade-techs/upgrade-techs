$(function(){
    /* Navigation Interactions 
        1. Menu Toggler
        2. Dropdown Toggler    
    */

    // Menu Toggler
    // 1. listen for a click on navbar-toggler
    // 2. store the property in the attribute "data-target"
    // 3. use the attributes value to select the navigation it wants to affect
    $(".navbar-toggler").on("click", function(){
        let toggler = $(this).attr("data-target");
        $(toggler).toggleClass("open");
    })


    // Dropdown Toggler
    // 1. listen for click on dropdown > a
    // 2. toggle the class of "open" on the dropdown element
    $(".navbar .dropdown > a") .on("click", function(e){
        e.preventDefault();
        $(this).parent().toggleClass("open");
    })
})