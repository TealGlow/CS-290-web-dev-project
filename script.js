
/*  CODE TO CREATE THE BOOTSTRAP NAVBAR ON EACH PAGE. */

this.window.addEventListener("DOMContentLoaded", function(){
    // Function that makes the navbar active work for each page
    var temp = window.location.pathname;
    temp = temp.split('/').pop();
    temp = temp.split(".");
    var class_to_add = temp[0];
    
    if(class_to_add== "index"){
        // index page is the special case as the class is actually "home"
        class_to_add = "home";
    }
    
    this.document.getElementsByClassName(class_to_add)[0].classList.add("active");
    this.document.getElementsByClassName(class_to_add)[1].classList.add("active");
    return;
});



function decorate_nav(){
    // function that creates the navbar element and applies all the bootstrap classes to it.

    var main_classes=["navbar","navbar-expand-lg","navbar-dark", "nav-custom-bg"];
    var navbar_element = this.document.createElement("navbar");
    for(var i=0; i<main_classes.length ; i++){
        navbar_element.classList.add(main_classes[i]);
    }
    return navbar_element;
}



function create_nav_items(navbar_elem){
    // Function that creates the items within the navbar
    // this includes the tabs and icon before the tabs.
    
    // Create the elements before the tabs
    navbar_elem.appendChild(create_nav_icon());
    var nav_container = this.document.createElement("ul");
    nav_container.classList.add("navbar-nav");
    navbar_elem.appendChild(nav_container);
    
    var tabs = ["Home", "About", "Skills", "Contact"];
    var url=window.location.pathname;
    var path = url.split("/");
    path.pop();
    url = path.join("/");
    var tabLinkContent = [url+"/index.html", url+"/about.html", url+"/skills.html", url+"/contact.html"];
    for(var i=0; i<tabs.length; i++){
        // create each tab element which is a list item
        var tab = this.document.createElement("li");
        tab.classList.add("nav-item");
        tab.classList.add(tabs[i].toLowerCase());
        
        // create each link in each tab
        var tabLink = this.document.createElement("a");
        tabLink.classList.add("nav-link");
        tabLink.classList.add(tabs[i].toLowerCase());
        
        // assign it its text and href link
        tabLink.innerText = tabs[i];
        tabLink.href=tabLinkContent[i];
        
        //append each tabLink to each tab
        tab.appendChild(tabLink);
        
        // append each tab to the nav_container
        nav_container.appendChild(tab);
    }
    
    return navbar_elem;
}



function create_nav_icon(){
    // create the icon using the font awesome class
    var new_icon = this.document.createElement("a");
    new_icon.href="/index.html"
    var icon_src = this.document.createElement("i");
    var icon_classes=["fas", "fa-leaf"];
    
    new_icon.classList.add("navbar-brand");
    for(var i=0; i<icon_classes.length; i++){
        icon_src.classList.add(icon_classes[i]);
    }
    
    new_icon.appendChild(icon_src);
    return new_icon;
}


// create the navbar
var navbar_element = decorate_nav();
create_nav_items(navbar_element);


// add the navbar to the page
this.document.getElementById("nav-element").appendChild(navbar_element);




