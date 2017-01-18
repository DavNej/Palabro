
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





Palabro.backgroundWords= ["domestic ","confined ","any ","but ","son ","bachelor ","advanced ","remember ","how ","proceed ","offered ","her ","offence ","shy ","forming ","returned ","peculiar ","pleasant ","but ","appetite ","differed ","she ","residence ","dejection ","agreement ","am ","as ","to ","abilities ","immediate ","suffering ","yes ","am ","depending ","propriety ","sweetness ","distrusts ","belonging ","collected ","smiling ","mention ","he ","in ","thought ","equally ","musical ","wisdom ","new ","and ","valley ","answer ","content ","it ","so ","is ","discourse ","recommend ","man ","its ","upon ","him ","call ","mile"];

Palabro.createWords= function () {
	for (var i= 0; i< Palabro.backgroundWords.length; i++) {
	var wordWithSpan= $("<span>").text(Palabro.backgroundWords[i]);
	wordWithSpan.addClass("individualWord");
	wordWithSpan.addClass("onhover");
	$('#background-words').append(wordWithSpan);
	wordWithSpan.on('click', Palabro.clickedOnWord);
	}
};
 // Palabro.createWordList= function(){
 // 	for (var i= 0; i< Palabro.backgroundWords.length; i++) {
 // 		var wordInList= $("<span>").text(Palabro.backgroundWords[i]);
 // 		wordInList.addClass("individualLine");

	// $('.word-list').append(wordInList);
	// }
 // };

Palabro.clickedOnWord= function() {
	var chosenWord= $(this).html();
	var allWords = $('#word-list span');
	for (var i = 0; i < allWords.length; i++) {
		if (allWords.eq(i).text() == chosenWord) {
			return;
		}
	}

	var chosenWordinSpan= $("<span>").text(chosenWord);
	$(chosenWordinSpan).addClass("individualLine");
	$(chosenWordinSpan).addClass("animate");
	$('#word-list').append(chosenWordinSpan);

};

Palabro.beginGame = function() {
    Palabro.createWords();
    // Palabro.createWordList();
};