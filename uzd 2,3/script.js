var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) 
{
    showSlide(slideIndex += n);
}

function currentSlide(n)
{
    showSlide(slideIndex = n);
}

function showSlide(n)
{
    var i;
    var slide = document.getElementsByClassName("slider_img");
    var dots = document.getElementsByClassName("dot");

    if(n > slide.length)
    {
        slideIndex = 1;
    }

    if(n < 1)
    {
        slideIndex = slide.length;
    }

    for(i = 0; i < slide.length; i++)
    {
        slide[i].style.display = "none";    
    }

    for(i = 0; i < slide.length; i++)
    {
        dots[i].style.backgroundColor = "#DAE8FC";
    }

    slide[slideIndex-1].style.display = "block";
    dots[slideIndex-1].style.backgroundColor = "#63686f";
}

function btnIzmeiginat()
{
    alert("Zvaniet uz numuru +371 12345678, lai izveidotu parakstu");
}

function btnPrikt()
{
    let age = prompt("Ievadiet jusu vecumu");

    if(age < 18 && age != null)
    {
        alert("Jums nav atlauts vadit masinu");
    }
    else if(age >= 18 && age < 25)
    {
        alert("Jusu cena bus 300$ diena + deposits");
    }
    else if(age >= 25)
    {
        alert("Jusu cena bus 100$ diena");
    }
}

function toggleVisiblePart()
{
    let divElem = document.getElementById("hiddenDiv");

    if (divElem.style.height == "0px" || divElem.style.height == "") {
        divElem.style.height = "300px"; 
    } else {
        divElem.style.height = "0"; 
    }
}