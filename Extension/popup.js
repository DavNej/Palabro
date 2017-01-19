var words = [
    {word: "input", definition: "What is put in, taken in, or operated on by any process or system.", supplement:[{pronunciation:"in.poot"}, {translation:"קלט"}]},
    {word: "field", definition: "An area of open land, especially one planted with crops or pasture, typically bounded by hedges or fences.", supplement:[{pronunciation:"fēld"}, {translation:"שדה"}]},
    {word: "behavior", definition:"The way in which one acts or conducts oneself, especially toward others.",supplement:[{pronunciation:"biˈhāvyər"}, {translation:"הִתְנַהֲגוּת"}]},
    {word: "HTML", definition:"Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.",supplement:[{pronunciation:""}, {translation:""}]}
];


var Palabro = {};

Palabro.define = function (e) {
    $("body").click(function(){$(".definition").remove();})
    $(".definition").remove();

    var input = ($(e.target).html().trim());
    for (var i = 0; i < words.length; i++) {
        if (input == words[i].word) {
            var definition = (words[i].definition);
            var supplement = words[i].supplement;
            Palabro.showDefinition(e,definition,input,supplement);
            Palabro.highlightSameWord(input);
        }
    }
};

Palabro.activatePalabro = function () {
    $(".lookup").dblclick(Palabro.define);
};

Palabro.showDefinition = function(event,definition,word,supplement){
    var positionY = $(event.target).offset().top - 10;
    var positionX = $(event.target).offset().left - $(event.target).width()/2;
    var definitionBox = $("<div/>")
        .addClass("definition")
        .css("position","absolute")
        .css("top",positionY-120+"px")
        .css("left",positionX);
    definitionBox.append($("<div/>").addClass("entry").html(word));
    definitionBox.append($("<div/>").addClass("pronunciation").html(supplement[0].pronunciation));
    definitionBox.append($("<p/>").text(definition));
    definitionBox.append($("<div/>").addClass("translation").html(supplement[1].translation));
    $("body").append(definitionBox)
}

Palabro.highlightSameWord = function (word) {
    $(".highlighted").removeClass("highlighted");
    var highlight = "<span class=\"highlighted\">" + word + "</span>";
    var reg = new RegExp(word, "g");
    var tags = ['a','p','span'];
    for (var i = 0; i < tags.length; i++){
    $(tags[i]).each(function (para, stuff) {
        $(stuff).html($(stuff).html().replace(reg, highlight));
    })}
    Palabro.activatePalabro();


};


Palabro.activatePalabro();

$(".accountLink").click(function(){
    chrome.tabs.create({url: $(this).attr('href')})
});