var currTheme_d = "l";
var currTheme_t = "l";
var currTheme_m = "l";

// to save previous width to later use for transition in screen size to save the details of theme of previous size of screen

function theme_window_resize() {
    var curr_width = document.documentElement.clientWidth;

    if(curr_width<=1200&&480<=curr_width){

        if(currTheme_t=="l"){
            currTheme_t="d";
        }
        else{
            currTheme_t="l";
        }
        changeTheme(2);
    }

    else if(curr_width<480){

        if(currTheme_m=="l"){
            currTheme_m="d";
        }

        else{
            currTheme_m="l";

        }
        changeTheme(3);
    }

    else{

        if(currTheme_d=="l"){
            currTheme_d="d";
        }
        else{
            currTheme_d="l";
        }
        changeTheme(1);
    }
}

window.addEventListener("resize", theme_window_resize);

function changeTheme(device) {
    if(device == 1){
        if(currTheme_d == "l"){
            setDark_theme(device);
        }
        
        else{
            setLight_theme(device);
        }
    }
    else if(device==2){
        if(currTheme_t == "l"){
            setDark_theme(device);
        }
        
        else{
            setLight_theme(device);
        }
    }
    else{
        if(currTheme_m == "l"){
            setDark_theme(device);
        }
        
        else{
            setLight_theme(device);
        }
    }
}


function setDark_theme(device) {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#d17d0f";

    document.getElementById('table1').style.color = "#bf4c17";
    document.getElementById('table1').style.backgroundColor = "#232626";

    document.getElementById('table2').style.borderColor = "#009933";
    document.getElementById('table3').style.borderColor = "#009933";
    document.getElementById('blink_text').style.borderColor = "#009933";
    document.getElementById('table3_1').style.borderColor = "#009933";
    document.getElementById('table3_2').style.borderColor = "#009933";

    //changing background of input box
    document.getElementById('ldap_d').style.backgroundColor = "#bfbfbf";
    document.getElementById('password_d').style.backgroundColor = "#bfbfbf";
    document.getElementById('ldap_t').style.backgroundColor = "#bfbfbf";
    document.getElementById('password_t').style.backgroundColor = "#bfbfbf";
    // document.getElementById('ldap_m').style.backgroundColor = "#bfbfbf";
    // document.getElementById('password_m').style.backgroundColor = "#bfbfbf";

    //changing status of current theme to dark
    if(device==1){
        currTheme_d = 'd';
    }
    else if(device==2){
        currTheme_t = 'd';
    }
    else{
        currTheme_m = 'd';
    }

}

function setLight_theme(device) {
    //body style change
    if (device==1){
        document.body.style.backgroundColor = "#FFFFFF";
        document.getElementById('table1').style.backgroundColor = "#4E387E";
        currTheme_d = 'l';
    }
    else if (device==2) {
        document.body.style.backgroundColor = "#fef9f8";
        document.getElementById('table1').style.backgroundColor = "#ef9273";
        currTheme_t = 'l';
    }

    else {
        document.body.style.backgroundColor = "#5bccf6";
        document.getElementById('table1').style.backgroundColor = "#fcde67";
        currTheme_m = 'l';
    }

    document.body.style.color = "black";
    //tabke borders and text change
    document.getElementById('table1').style.color = "#FFFFFF";

    document.getElementById('table2').style.borderColor = "black";
    document.getElementById('table3').style.borderColor = "black";
    document.getElementById('blink_text').style.borderColor = "black";
    document.getElementById('table3_1').style.borderColor = "black";
    document.getElementById('table3_2').style.borderColor = "black";
    //changing background of input box
    document.getElementById('ldap_d').style.backgroundColor = "#FFFFFF";
    document.getElementById('password_d').style.backgroundColor = "#FFFFFF";
    document.getElementById('ldap_t').style.backgroundColor = "#FFFFFF";
    document.getElementById('password_t').style.backgroundColor = "#FFFFFF";
    // document.getElementById('ldap_m').style.backgroundColor = "#FFFFFF";
    // document.getElementById('password_m').style.backgroundColor = "#FFFFFF";
}

function check_roll(device) {

    var roll_num;
    if(device == 1){
        roll_num = document.getElementById('ldap_d').value;
    }
    else if(device == 2){
        roll_num = document.getElementById('ldap_t').value;
    }
    else {
        roll_num = document.getElementById('ldap_m').value;
    }


    if(200000000<=roll_num && roll_num<=202000000) {
        makeLogin(device)
    }
    else{
        alert('Roll Number not in Range');
    }
}
// to change html when login
function makeLogin(device) {

    var username;
    if(device == 1){
        username = 'Roll Number - '+document.getElementById('ldap_d').value;
    }
    else if(device == 2){
        username = 'Roll Number - '+document.getElementById('ldap_t').value;
    }
    else {
        username = 'Roll Number - '+document.getElementById('ldap_m').value;
    }
    
    var d = new Date();
    var logout = "<input type='reset' onclick='log_Out()' style='cursor:pointer; width:17vw; height:7vw; font-size:4vw; background-color: green' value='LogOut'>"
    var br = '<br>';

    document.body.innerHTML = username + br+ br+ d +br+ br+ logout;

    document.body.style.textAlign = 'center';
    document.body.style.fontSize = '7vw';
}
// to logout(reload) of the site
function log_Out() {
    location.reload();
}