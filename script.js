

/*      CREATE THE CONTACT FORM TOGGLE FOR      */
if(this.document.getElementById("form-control")){
    //if the form-control element exists on this page
    this.document.getElementById("form-control").addEventListener("click", function(event){
        event.preventDefault();
        var element_to_unhide = document.getElementById("contact-form");
        if(element_to_unhide.classList.contains("hidden")){
            // if already hidden, unhide
            element_to_unhide.classList.remove("hidden");
            element_to_unhide.classList.add("form-content");
            document.getElementById("contact-title").classList.add("hidden");
        }
        else{
            element_to_unhide.classList.add("hidden");
            element_to_unhide.classList.remove("form-content");
            document.getElementById("contact-title").classList.remove("hidden");
        }
    
   
    });
}


/*  SKILLS PAGE BUTTONS  */
var skillsButtons = this.document.getElementsByClassName("skills-control");
if(skillsButtons){
    for(var i=0; i < skillsButtons.length; i++ ){
        skillsButtons[i].addEventListener("click", function(event){
            event.preventDefault();
            var targetedTab = event.srcElement.name;
            for(var j=0; j<skillsButtons.length; j++){
                if(String(j) != event.srcElement.id){
                    // make all other siblings hidden
                    var tabToHide = "tab-"+String(j);
                    document.getElementById(tabToHide).classList.add("hidden");
                    document.getElementById(tabToHide).classList.remove("show");
                }
            }
            document.getElementById(targetedTab).classList.add("show");
            document.getElementById(targetedTab).classList.remove("hidden");
            
        });
    }
    
    
}
