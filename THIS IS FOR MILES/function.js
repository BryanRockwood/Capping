/**
 * Created by thorwald on 11/9/15.
 */

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
function major(majorName) {
    if (majorName === 'CriminalJustice') {
        $("label[for='check1']").text('Composition 1');
        $("label[for='check2']").text('Social Problems in Today World');
        $("label[for='check3']").text('Criminology');
        $("label[for='check4']").text('Social Psychology');
        $("label[for='check5']").text('Group Dynamics');
        $("label[for='check6']").text('White Collar Crime');
    }
     else if (majorName === 'ComputerScience') {
        $("label[for='check1']").text('Advanced Programming Techniques');
        $("label[for='check2']").text('Data Structures');
        $("label[for='check3']").text('Linear Algebra');
        $("label[for='check4']").text('Assembler Language Programming');
        $("label[for='check5']").text('Discrete Mathematics');
        $("label[for='check6']").text('Analytic Geometry');
    }
    else if (majorName === 'Math') {
        $("label[for='check1']").text('Intro to Linear Algebra');
        $("label[for='check2']").text('Engineering Physics 1');
        $("label[for='check3']").text('Engineering Physics 2');
        $("label[for='check4']").text('Discrete Mathematics');
        $("label[for='check5']").text('Introduction to Proofs');
        $("label[for='check6']").text('Analytic Geometry Calculus 1');
    }
    else if (majorName === 'DigitalMedia') {
        $("label[for='check1']").text('2d Design');
        $("label[for='check2']").text('Visual Art Intro Seminar');
        $("label[for='check3']").text('Drawing 1');
        $("label[for='check4']").text('History of Art');
        $("label[for='check5']").text('Color Theory & Painting');
        $("label[for='check6']").text('American History');
    }
    else if (majorName === 'BusinessAdmin') {
        $("label[for='check1']").text('Micro Economics');
        $("label[for='check2']").text('Managerial Accounting');
        $("label[for='check3']").text('Financial Accounting');
        $("label[for='check4']").text('Business Law 1');
        $("label[for='check5']").text('Macro Economics');
        $("label[for='check6']").text('Elementary Statistics');
    }
    else if (majorName === 'Biology') {
        $("label[for='check1']").text('General Chem 1');
        $("label[for='check2']").text('General Biology 1');
        $("label[for='check3']").text('Adolescent Psychology');
        $("label[for='check4']").text('Lifetime Fitness and Wellness');
        $("label[for='check5']").text('General Chem 2');
        $("label[for='check6']").text('General Biology 2');
    }
}
function checker(){
    var majorName = '';
    if(document.getElementById('optradio1').checked){
        majorName = 'CriminalJustice';
    }
    else if(document.getElementById('optradio2').checked){
        majorName = 'ComputerScience';
    }
    else if(document.getElementById('optradio3').checked){
        majorName = 'Math';
    }
    else if(document.getElementById('optradio4').checked){
        majorName = 'DigitalMedia';
    }
    else if(document.getElementById('optradio5').checked){
        majorName = 'BusinessAdmin';
    }
    else if(document.getElementById('optradio6').checked){
        majorName = 'Biology';
    }
    else {
        alert("Please choose a Major in the list provided");
    }
    
    major(majorName);

}
function changeClass() {
    var tableClass = document.getElementById("classTable");
    var index = document.getElementById("dropdown1");
    document.getElementById("conButton").style.visibility = "visible";
    tableClass.innerHTML= "";
    if(index.value == "Math") {
        var row = tableClass.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "Course Subject";
        cell2.innerHTML = "Course Number";
        cell3.innerHTML = "Title";
        cell4.innerHTML = "Credits";
        var row = tableClass.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "MATH";
        cell2.innerHTML = "343";
        cell3.innerHTML = "Calculus III";
        cell4.innerHTML = "4";
        var row = tableClass.insertRow(2);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "MATH";
        cell2.innerHTML = "205";
        cell3.innerHTML = "Discrete Mathematics";
        cell4.innerHTML = "4";
        var row = tableClass.insertRow(3);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "MATH";
        cell2.innerHTML = "424";
        cell3.innerHTML = "Complex Analysis";
        cell4.innerHTML = "4";

    }
    if(index.value == "AppliedMath") {
        var row = tableClass.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "Course Subject";
        cell2.innerHTML = "Course Number";
        cell3.innerHTML = "Title";
        cell4.innerHTML = "Credits";
        var row = tableClass.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "PHYS";
        cell2.innerHTML = "221";
        cell3.innerHTML = "Modern Physics 1";
        cell4.innerHTML = "3";
        var row = tableClass.insertRow(2);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "BIOL";
        cell2.innerHTML = "130";
        cell3.innerHTML = "General Biology 1";
        cell4.innerHTML = "4";
        var row = tableClass.insertRow(3);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "CMPT";
        cell2.innerHTML = "220";
        cell3.innerHTML = "Software Development 1";
        cell4.innerHTML = "4";
    }

    if(index.value == "GameDevelopment") {
        var row = tableClass.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "Course Subject";
        cell2.innerHTML = "Course Number";
        cell3.innerHTML = "Title";
        cell4.innerHTML = "Credits";
        var row = tableClass.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "CMPT";
        cell2.innerHTML = "233";
        cell3.innerHTML = "Game Development I";
        cell4.innerHTML = "4";
        var row = tableClass.insertRow(2);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "CMPT";
        cell2.innerHTML = "331";
        cell3.innerHTML = "Formal Languages";
        cell4.innerHTML = "3";
        var row = tableClass.insertRow(3);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "CMPT";
        cell2.innerHTML = "220";
        cell3.innerHTML = "Software Development I";
        cell4.innerHTML = "4";
    }
    if(index.value == "CriminalJustice") {
        var row = tableClass.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "Course Subject";
        cell2.innerHTML = "Course Number";
        cell3.innerHTML = "Title";
        cell4.innerHTML = "Credits";
        var row = tableClass.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "COMM";
        cell2.innerHTML = "103";
        cell3.innerHTML = "Introduction to Media";
        cell4.innerHTML = "3";
        var row = tableClass.insertRow(2);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "ENGL";
        cell2.innerHTML = "331";
        cell3.innerHTML = "Shakespearean Literature";
        cell4.innerHTML = "3";
        var row = tableClass.insertRow(3);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "BUS";
        cell2.innerHTML = "101";
        cell3.innerHTML = "Intro to Business";
        cell4.innerHTML = "3";
    }

}
function Conversion(){
    var tableClass = document.getElementById("conversionTable");
    tableClass.innerHTML = "";
    var row =tableClass.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = "Course Subject";
    cell2.innerHTML = "Course Number";
    cell3.innerHTML = "Title";
    cell4.innerHTML = "Credits";
    var row = tableClass.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = "Some Subject";
    cell2.innerHTML = "Some Number";
    cell3.innerHTML = "Some Title";
    cell4.innerHTML = "Some Credits";

}


