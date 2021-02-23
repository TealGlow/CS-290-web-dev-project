
/*      CREATE THE CONTACT FORM TOGGLE FOR      */
document.getElementById("form-control").addEventListener("click", function(event){
    event.preventDefault();
    var element_to_unhide = document.getElementById("contact-form");
    if(element_to_unhide.classList.contains("hidden")){
        // if already hidden, unhide
        element_to_unhide.classList.remove("hidden");
        element_to_unhide.classList.add("form-content");
    }
    else{
        element_to_unhide.classList.add("hidden");
        element_to_unhide.classList.remove("form-content");
    }
    
   
});

