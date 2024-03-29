const zodiacs = [
{title: "Aquarius", img:"./images/aquarius.png", Element: "Air" , Color: "Light-Blue, Silver" ,Quality: "Fixed" , Day: "Saturday", Ruler: "Uranus, Saturn"},
{title: "Picses", img:"./images/pieces.png", Element: "Water", Color: "Mauv, Lilac, Purple, Violet, Sea green", Quality: "Mutable", Day: "Thursday", Ruler: "Neptune, Jupiter"},
{title: "Aries", img:"./images/aries.png", Element: "Fire", Color: "Red", Quality: "Cardinal", Day: "Tuesday", Ruler: "Mars"},
{title: "Taurus", img:"./images/taurus.png", Element: "Earth", Color: "Green, Pink", Quality: "Fixed", Day: "Friday, Monday", Ruler: "Venus"},
{title: "Gemini", img:"./images/gemini.png", Element: "Air", Color: "Light-Green, Yellow", Quality: "Mutable", Day: "Wednesday", Ruler: "Mercury"},
{title: "Cancer", img:"./images/cancer.png", Element: "Water", Color: "White", Quality: "Cardinal", Day: "Monday, Thursday", Ruler: "Moon"},
{title: "Leo", img:"./images/leo.png", Element: "Fire", Color: "Gold, Yellow, Orange", Quality: "Fixed", Day: "Sunday", Ruler: "Sun"},
{title: "Virgo", img:"./images/virgo.png", Element: "Earth", Color: "Grey, Beige, Pale-Yellow", Quality: "Mutable", Day: "Wednesday",Ruler: "Mercury"},
{title: "Libra", img:"./images/libra.png", Element: "Air", Color: "Pink, Green", Quality: "Cardinal", Day: "Friday", Ruler: "Venus"},
{title: "Scorpio", img:"./images/scorpio.png", Element: "Water", Color: "Scarlet, Red, Rust", Quality: "Fixed", Day: "Tuesday", Ruler: "Pluto, Mars"},
{title: "Sagittarius", img:"./images/sagittarius.png", Element: "Fire", Color: "Blue", Quality: "Mutable", Day: "Thursday", Ruler: "Jupiter"},
{title: "Capricorn", img:"./images/capricorn.png", Element: "Earth", Color: "Brown, Black", Quality: "Cardinal", Day: "Saturday", Ruler: "Saturn"},
];

const outputDiv = document.getElementById('output-div');
outputDiv.innerHTML = "";

const birthMonthInputBox = document.getElementById("input-birth-month-input-box");
const birthDayInputBox = document.getElementById("input-birth-day-input-box");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const classifyButton = document.getElementById('classify-button');
classifyButton.onclick = function (){

    function displayZodiac(zodiacSign) {
        outputDiv.innerHTML = `
        <div class="zodiac-container" id="zodiac-container">
            <img src="${zodiacSign.img}" alt="Zodiac IMG" class="zodiac-img" id="zodiac-sign-img">
            <div class="zodiac-info-container">
                <span><strong class="zodiac-sign-title">${zodiacSign.title}</strong></span>
                <span><strong class="zodiac-sign-element">Element: ${zodiacSign.Element}</strong></span>
                <span><strong class="zodiac-sign-color">Color: </strong>${zodiacSign.Color}</span>
                <span><strong class="zodiac-sign-quality">Quality: </strong>${zodiacSign.Quality}</span>
                <span><strong class="zodiac-sign-day">Day: </strong>${zodiacSign.Day}</span>
                <span><strong class="zodiac-sign-ruler">Ruler: </strong>${zodiacSign.Ruler}</span>
            </div>
        </div>
        `;
    };
    switch(true){
        case((birthMonthInputBox.value == "March" && birthDayInputBox.value >= 21 && birthDayInputBox.value <= 31) || (birthMonthInputBox.value == "April" && birthDayInputBox.value <= 19 && birthDayInputBox.value >= 1)):
            displayZodiac(zodiacs[2]);
            break;
        
        case((birthMonthInputBox.value == "April" && birthDayInputBox.value >= 20 && birthDayInputBox.value <= 30) || (birthMonthInputBox.value == "May" && birthDayInputBox.value <= 20 && birthDayInputBox.value >= 1)):
            displayZodiac(zodiacs[3]);
            break;
            
        case((birthMonthInputBox.value == "May" && birthDayInputBox.value >= 21 && birthDayInputBox.value <= 31) || (birthMonthInputBox.value == "June" && birthDayInputBox.value <= 20 && birthDayInputBox.value >= 1)):
            displayZodiac(zodiacs[4]);
            break;
        case((birthMonthInputBox.value == "June" && birthDayInputBox.value >= 21 && birthDayInputBox.value <= 30) || (birthMonthInputBox.value == "July" && birthDayInputBox.value <= 22 && birthDayInputBox.value >= 1)):
            displayZodiac(zodiacs[5]);
            break;

        case((birthMonthInputBox.value == "July" && birthDayInputBox.value >= 23 && birthDayInputBox.value <= 31) || (birthMonthInputBox.value == "August" && birthDayInputBox.value <= 22 && birthDayInputBox.value >= 1)):
            displayZodiac(zodiacs[6]);
            break;
        
        case((birthMonthInputBox.value == "August" && birthDayInputBox.value >= 23 && birthDayInputBox.value <= 31) || (birthMonthInputBox.value == "September" && birthDayInputBox.value <= 22 && birthDayInputBox.value >= 1)):
            displayZodiac(zodiacs[7]);
            break;
        
        case((birthMonthInputBox.value == "September" && birthDayInputBox.value >= 23 && birthDayInputBox.value <= 30) || (birthMonthInputBox.value == "October" && birthDayInputBox.value <= 22 && birthDayInputBox.value >= 1)):
            displayZodiac(zodiacs[8]);
            break;
        
        case((birthMonthInputBox.value == "October" && birthDayInputBox.value >= 23 && birthDayInputBox.value <= 31) || (birthMonthInputBox.value == "November" && birthDayInputBox.value <= 21 && birthDayInputBox.value >= 1)):
            displayZodiac(zodiacs[9]);
            break;

        case((birthMonthInputBox.value == "November" && birthDayInputBox.value >= 22 && birthDayInputBox.value <= 30) || (birthMonthInputBox.value == "December" && birthDayInputBox.value <= 21 && birthDayInputBox.value >= 1)):
            displayZodiac(zodiacs[10]);
            break;

        case((birthMonthInputBox.value == "December" && birthDayInputBox.value >= 22 && birthDayInputBox.value <= 31) || (birthMonthInputBox.value == "January" && birthDayInputBox.value <= 19 && birthDayInputBox.value >= 1)):
            displayZodiac(zodiacs[11]);
            break;

        case((birthMonthInputBox.value == "January" && birthDayInputBox.value >= 20 && birthDayInputBox.value <= 31) || (birthMonthInputBox.value == "February" && birthDayInputBox.value <= 18 && birthDayInputBox.value >= 1)):
            displayZodiac(zodiacs[0]);
            break;

        case((birthMonthInputBox.value == "February" && birthDayInputBox.value >= 19 && birthDayInputBox.value <= 29) || (birthMonthInputBox.value == "March" && birthDayInputBox.value <= 20 && birthDayInputBox.value >= 1)):
            displayZodiac(zodiacs[1]);
            break;
        case((birthMonthInputBox.value != "January" && birthMonthInputBox.value != "February" && birthMonthInputBox.value != "March" && birthMonthInputBox.value != "April" && birthMonthInputBox.value != "May",birthMonthInputBox.value != "June" && birthMonthInputBox.value != "July" && birthMonthInputBox.value != "August" && birthMonthInputBox.value != "September" && birthMonthInputBox.value != "October" && birthMonthInputBox.value != "November" && birthMonthInputBox.value != "December") || (birthDayInputBox.value < 1 || birthDayInputBox.value > 31)):
        outputDiv.innerHTML = `
            <div class="zodiac-container" id="zodiac-container">
                <div class="zodiac-info-container">
                    <h1><strong class="error">Error: Your input is invalid</strong></h1>
                </div>
            </div>
            `;
            break;
    };
};
