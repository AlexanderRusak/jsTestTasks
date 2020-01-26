(function toggleClass() {
        let err = "input is not exist";

        (document.querySelector("input")) ?
        addClassName() :
        console.log(err);


    function addClassName() {
        let input = document.getElementById("name_input");
        let className = document.getElementsByTagName("style")[0].innerText.split("{")[0].split(".")[1]; //Gets className from <style> tag 
        let value = input.getAttribute("value");// gets default input value
        (input.value === value) ? input.setAttribute("class", className) : input.removeAttribute("class");
        input.addEventListener("input", () => {
            (input.value === value) ? input.setAttribute("class", className) : input.removeAttribute("class");
        })
    }


})();