    function percentage() {
        var num1 = document.getElementById('num1').value;
        var num2 = document.getElementById('num2').value;
        var ans = (num1 / 100) * num2;
        var percent = (num1 / 100);
        var percentageFormulaOne = num1 + "%" + "  of  " + num2 + "  =" + "  ";
        var percentageFormulaTwo = percent + " * " + "  " + num2 + "  =" + "  ";

        document.getElementById('answer').value = (num1 / 100) * num2;
        document.getElementById("calculator-answer").innerHTML += `<div class="cal-ans-wrap">Result:<span id="cal-ans">
        <b> ${ans}</b>
</span></div>`;
        // document.querySelectorAll('#ans b')[0].innerHTML = (num1 / 100) * num2;
        document.getElementById("formula").innerHTML = percentageFormulaOne;
        document.getElementById("formula").innerHTML += `<span class = "answer"> ${ans} </span>`;
        document.getElementById("steps").innerHTML += `<span class="steps-wrap">
        <b>Steps:</b></span><br>`;
        document.getElementById("steps").innerHTML += `<span>${percentageFormulaOne} ${percentageFormulaTwo} ${ans}</span>`;

    }


    function wipeoff() {
        document.getElementById('num1').value = "";
        document.getElementById('num2').value = "";
        document.getElementById('answer').value = "";
        document.getElementById('ans').innerHTML = "";
        document.getElementById("formula").innerHTML = "";
        document.getElementById("steps").innerHTML = "";
        document.getElementById("calculator-answer").innerHTML = "";
    }