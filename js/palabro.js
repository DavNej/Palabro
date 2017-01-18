var foreignName = [
    "παλαβρό",
    "パラブロ",
    "পালাবার",
    "ፓላብሮ",
    "帕拉比如哦",
    "પલબરો",
    "פלברו",
    "بالبر",
    "पलबरो",
    "ಪೆಲ್ಯಾಬ್ರೊ",
    //"പ്ളാബ്രോ",
    "палабро",
//    "پالابرو",
    "पलब्रो"];

var foreignNameString = "<strong>Palabro</strong>";

foreignName.forEach(function(element) {
    foreignNameString += " | &nbsp; <strong>" + element + "</strong>";
});

console.log(foreignNameString);

$('#welcome-message').html(foreignNameString);