
var Palabro = {}; 


Palabro.foreignName = ["παλαβρό","パラブロ","পালাবার","ፓላብሮ","帕拉比如哦","પલબરો","פלברו","بالبر","पलबरो","ಪೆಲ್ಯಾಬ್ರೊ","палабро","पलब्रो"];

Palabro.foreignNameString = "<strong id=\"palName\">Palabro</strong><br/>";

Palabro.foreignName.forEach(function(element) {
    Palabro.foreignNameString += " |&nbsp; <strong>" + element + "</strong>";
});

$('#welcome-message').html(Palabro.foreignNameString);





Palabro.backgroundWords= ["Zionism ","emerged ","in ","the ","late ","nineteenth ","century ","in ","Central ","and ","Eastern ","Europe ","as ","a ","national ","revival ","movement ","in ","reaction ","to ","antiSemitic ","and ","exclusionary ","nationalist ","movements ","in ","Europe ","Soon ","after ","this ","most ","leaders ","of ","the ","movement ","associated ","the ","main ","goal ","with ","creating ","the ","desired ","state ", "then ","an ","area ","controlled ","by ","the ","Ottoman ","Empire","domestic ","confined ","any ","but ","son ","bachelor ","advanced ","remember ","how ","proceed ","offered ","her ","offence ","shy ","forming ","returned ","peculiar ","Zionism ","emerged ","in ","the ","late ","nineteenth ","century ","in ","Central ","and ","Eastern ","Europe ","as ","a ","national ","revival ","movement ","in ","reaction ","to ","antiSemitic ","and ","exclusionary ","nationalist ","movements ","in ","Europe ","Soon ","after ","this ","most ","leaders ","of ","the ","movement ","associated ","the ","main ","goal ","with ","creating ","the ","desired ","state ","in ","area ","controlled ","by ","the ","Ottoman ","Empire","domestic ","confined ","any ","but ","son ","bachelor ","advanced ","remember ","how ","proceed ","offered ","her ","offence ","shy ","forming ","returned ","peculiar ","pleasant ","but ","appetite ","differed ","she ","residence ","dejection ","agreement ","am ","as ","to ","abilities ","immediate ","suffering ","yes ","am ","depending ","propriety ","sweetness ","distrusts ","belonging ","collected ","smiling ","mention ","he ","in ","thought ","equally ","musical ","wisdom ","new ","and ","valley ","answer ","content ","it ","so ","is ","discourse ","recommend ","man ","its ","upon ","him ","call ","mile", "national ","movement ","of ","the ","Jewish ","people ","that ","supports ","the ","reestablishment ","of ","a ","Jewish ","homeland ","in ","the ","territory"];

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
	var chosenWord= $(this).html();
	var allWords = $('#word-list span');
	
	//$('#word-list').slideDown();
	$('#word-list').fadeIn(1000);
	for (var i = 0; i < allWords.length; i++) {
		if (allWords.eq(i).text() == chosenWord) {
			return;
		}
	}

	
	for (var i = 0; i < $('#background-words .individualWord').length; i++) {
		if ($('#background-words .individualWord').eq(i).text() == chosenWord) {
			$('#background-words .individualWord').eq(i).addClass("highlightedWords")

		}
	}

	var chosenWordinSpan= $("<span>").text(chosenWord);
	$(chosenWordinSpan).addClass("individualLine");
	$(chosenWordinSpan).addClass("animate");
	$('#word-list').append(chosenWordinSpan);
	
	setTimeout(function(){
		//$('#word-list').slideUp();
		$('#word-list').fadeOut(1000);
	},2000)
};

Palabro.beginGame = function() {
    Palabro.createWords();
	$('#word-list').hide();
};