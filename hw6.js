window.addEventListener("load", function(){
    document.getElementById("myButton").addEventListener("click", () => alert("Please type either red, purple, blue, green, or pink in the box"));
    const textInput = document.getElementById("colorInput");
    textInput.addEventListener("input", change);
    function change(){
        let color = textInput.value;
        document.querySelector(".square").style.background = color;
    }
});
