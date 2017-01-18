var Palabro = {}; 

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

Palabro.clickedOnWord= function() {
	alert("yo");
}

Palabro.beginGame = function() {
    Palabro.createWords();
};