  function validate()
{
    if(   document.getElementById("text1").value == "Karthika"
       && document.getElementById("text2").value == "29072000" )
    {
        alert("Avalothan Soli Mudinju");
        location.href="love.html";
    }else if(document.getElementById("text1").value == ""
    && document.getElementById("text2").value == ""){
        location.href="https://youtube.com/shorts/p7yxVHGgvvw?feature=share"; 
    }
    else
    {
        location.href="https://youtube.com/shorts/XOilrabaXVI?feature=share";
    }
}
  function Hint()
{
    alert("Neethan Da Athu Paithiyom.....");
}
    // disable right click
    document.addEventListener('contextmenu', event => event.preventDefault());

    document.onkeydown = function (e) {

        // disable F12 key
        if(e.keyCode == 123) {
            return false;
        }

        // disable I key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
            return false;
        }

        // disable J key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            return false;
        }

        // disable U key
        if(e.ctrlKey && e.keyCode == 85) {
            return false;
        }
    }