
var Palabro = {}; 


Palabro.foreignName = [
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

Palabro.foreignNameString = "<strong>Palabro</strong>";

Palabro.foreignName.forEach(function(element) {
    Palabro.foreignNameString += " | &nbsp; <strong>" + element + "</strong>";
});

$('#welcome-message').html(Palabro.foreignNameString);





Palabro.backgroundWords= ["Zionism ","is ","the ","national ","movement ","of ","the ","Jewish ","people ","that ","supports ","the ","reestablishment ","of ","a ","Jewish ","homeland ","in ","the ","territory ","defined ","as ","the ","historic ","Land ","of ","Israel ","roughly ","corresponding ","to ","Palestine ","Canaan ","or ","the ","Holy ","Land ","Zionism ","emerged ","in ","the ","late ","nineteenth ","century ","in ","Central ","and ","Eastern ","Europe ","as ","a ","national ","revival ","movement ","in ","reaction ","to ","antiSemitic ","and ","exclusionary ","nationalist ","movements ","in ","Europe ","Soon ","after ","this ","most ","leaders ","of ","the ","movement ","associated ","the ","main ","goal ","with ","creating ","the ","desired ","state ","in ","Palestine ","then ","an ","area ","controlled ","by ","the ","Ottoman ","Empire","domestic ","confined ","any ","but ","son ","bachelor ","advanced ","remember ","how ","proceed ","offered ","her ","offence ","shy ","forming ","returned ","peculiar ","pleasant ","but ","appetite ","differed ","she ","residence ","dejection ","agreement ","am ","as ","to ","abilities ","immediate ","suffering ","yes ","am ","depending ","propriety ","sweetness ","distrusts ","belonging ","collected ","smiling ","mention ","he ","in ","thought ","equally ","musical ","wisdom ","new ","and ","valley ","answer ","content ","it ","so ","is ","discourse ","recommend ","man ","its ","upon ","him ","call ","mile"];

Palabro.createWords= function () {
	for (var i= 0; i< Palabro.backgroundWords.length; i++) {
	    var wordWithSpan= $("<span>").text(Palabro.backgroundWords[i]);
	    wordWithSpan.addClass("individualWord");
	    wordWithSpan.addClass("onhover");
	    $('#background-words').append(wordWithSpan);
	    wordWithSpan.on('click', Palabro.clickedOnWord);
	}
};

Palabro.clickedOnWord= function() {
	alert("yo");
}

Palabro.beginGame = function() {
    Palabro.createWords();
};