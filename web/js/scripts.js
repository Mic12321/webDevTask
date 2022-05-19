// Reference: https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/

// Reference: https://devcom.w3schools.com/jsref/dom_obj_html_nodelist.asp

//Change thecolour, by its selector with colour value
function queryChangeColor(pos, val) {
    const myNodelist = document.querySelectorAll(pos);
    let quantity=myNodelist.length;
    for (let i = 0; i < quantity; i++) {
      myNodelist[i].style.color = val;
    }
}

//Change the background colour, by its selector with colour value
function queryChangeBackgroundColor(pos, val) {
    const myNodelist = document.querySelectorAll(pos);
    let quantity=myNodelist.length;
    for (let i = 0; i < quantity; i++) {
      myNodelist[i].style.backgroundColor = val;
    }
}

//Change elements to dark theme colour
function dark_theme() {
    // change Attritbute colour
    queryChangeColor("a", "white");

    // Body
    document.body.style.backgroundColor = "rgb(24, 24, 24)";
    document.body.style.color ="white";

    // Nav
    queryChangeBackgroundColor(".nav > ul > li", "#383838");
    queryChangeBackgroundColor(".nav > ul > li > ul > li", "#383838");

    //Small main nav (small devices)
    queryChangeBackgroundColor("#small_nav_1 > li > a", "#383838");

    //Small nav dropdown (small devices)
    document.getElementById("small_nav_2").style.backgroundColor="#383838";

    
    //Current_page
    queryChangeBackgroundColor("#current_page", "rgb(83, 83, 83)");

    //Title animation
    document.getElementById("title_animation").style.backgroundImage="linear-gradient(to right, rgb(183, 183, 183), rgb(77, 77, 77))";

    //Back to Top
    document.getElementById("back_to_top").style.backgroundColor="rgb(83, 83, 83)";
    document.getElementById("back_to_top").style.Color="white";

    //footer
    document.getElementById("footer").style.backgroundColor="rgb(46, 46, 46)";
    document.getElementById("footer").style.borderTopColor="rgb(83, 83, 83)";
    document.getElementById("footer").style.Color="white";

    //Small main nav MENU button (small devices)
    document.getElementById("ver_nav_button").style.backgroundColor="#383838";

    //Small web logo li
    document.getElementById("small_web_logo").style.backgroundColor="#383838";
    
    current_color_theme="dark";
    localStorage.setItem("current_color_theme", "dark");
    console.log("Current color theme is dark");
}

//Change elements to light theme colour
function light_theme() {
    // change Attritbute colour
    queryChangeColor("a", "black");
    
    // Body
    document.body.style.backgroundColor = "#adc2eb";
    document.body.style.color ="black";

    // Nav
    queryChangeBackgroundColor(".nav > ul > li", "#d6e2f5");
    queryChangeBackgroundColor(".nav > ul > li > ul > li", "#d6e2f5");

    //Small main nav (small devices)
    queryChangeBackgroundColor("#small_nav_1 > li > a", "#d6e2f5");

    //Small nav dropdown (small devices)
    document.getElementById("small_nav_2").style.backgroundColor="#d6e2f5";

    
    //Current_page
    queryChangeBackgroundColor("#current_page", "#6f94dc");

    //Title animation
    document.getElementById("title_animation").style.backgroundImage="linear-gradient(to right, rgb(0, 102, 255),rgb(153, 1, 255)";

    //Back to Top
    document.getElementById("back_to_top").style.backgroundColor="#4da6ff";
    document.getElementById("back_to_top").style.Color="black";
    
    //footer
    document.getElementById("footer").style.backgroundColor="#d6e2f5";
    document.getElementById("footer").style.borderTopColor="rgb(255, 255, 255)";
    document.getElementById("footer").style.Color="rgb(255, 255, 255)";


    //Small main nav MENU button (small devices)
    document.getElementById("ver_nav_button").style.backgroundColor="#d6e2f5";

    //Small web logo li
    document.getElementById("small_web_logo").style.backgroundColor="#d6e2f5";


    current_color_theme="light";
    localStorage.setItem("current_color_theme", "light");
    console.log("Current color theme is light");
}




//Change theme
function change_theme() {
    console.log("Change theme function executed");
    if (current_color_theme=="light") {
        dark_theme();
    }
    else {
        light_theme();
    }


}


//Show the small screen dropdown navigation
function show_more_menu() {
    const nav_button = document.getElementById("small_nav_2").style;

    if (nav_button.height=="0%" || nav_button.height=="") {
        openNav("small_nav_2");
        document.body.style.position="fixed";
    }

    else {
        document.body.style.position="relative";
        closeNav("small_nav_2");

    }

}


function openNav(id_name) {
    document.getElementById(id_name).style.height = "100%";
}


function closeNav(id_name) {
    document.getElementById(id_name).style.height = "0%";
}





// Main
var current_color_theme;
if (window.matchMedia("(prefers-color-scheme:light)").matches) {
    console.log("Detected prefer color is light");
    current_color_theme="light";
} else {
    console.log("Detected prefer color is dark");
    current_color_theme="dark";
}


// https://www.w3schools.com/js/js_api_web_storage.asp
//Get and set the colour theme
if (localStorage.getItem("current_color_theme")=="light") {
    light_theme();
    console.log('Custom color theme is white')
    current_color_theme="light";
} 
else if (localStorage.getItem("current_color_theme")=="dark"){
    dark_theme();
    console.log('Custom color theme is dark')
    current_color_theme="dark";
}
else {
    console.log('Custom color theme is not existed');
}


// Reference: https://www.codespeedy.com/get-the-scroll-position-of-a-web-page-in-javascript/
window.addEventListener("scroll", function(){
    if (window.scrollY>74) {    
        document.getElementById("back_to_top").style.display="block";
        document.getElementById("back_to_top").style.transition="1s";       
    }
    
    else {
        document.getElementById("back_to_top").style.display="none";
    }
});