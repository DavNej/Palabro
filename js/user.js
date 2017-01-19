/**
 * Created by itc_user1 on 1/18/2017.
 */
var words = ["cup","donkey","efficient","hackathon","booty","kendama","hummus"]
var defs = ["A vessel for liquids","A horse like animal","Doing things quicker with more mistakes","A waste of time which makes one contemplate the meaning of life","a pirates treasure","Israeli game with a ball and a stick","israeli gasoline"];

function checkMatch(word1,word2){
    word1 = $(word1);
    word2 = $(word2);

    if(word1.attr("word")==word2.attr("word")) {

        word1.removeClass("selected");
        word2.removeClass("dSelected");
        word1.addClass("winner");
        word2.addClass("winner");
        word2.fadeOut(700);
        word1.fadeOut(700, function () {
            word1.remove();
            word2.remove();
            if($(".gword").length===0){
                console.log("hello");
                $("#elephantImg").attr("src", "./images/happy.png")
                $("#elephantImg").addClass("centerImg");
                $("#elephantImg").fadeIn(200);
            }
        })
        $("#elephantImg").attr("src", "./images/happy.png");
        $("#elephantImg").fadeIn(100);
        $("#elephantImg").fadeOut(1400);
    }
    else{
            word1.removeClass("selected");
            word2.removeClass("dSelected");
            $("#elephantImg").attr("src","./images/angry.png");
            $("#elephantImg").fadeIn(100);
            $("#elephantImg").fadeOut(1400);
            word1.addClass("wrong");
            word2.addClass("wrong");
        setTimeout(function(){
                    word1.removeClass("wrong");
                    word2.removeClass("wrong");

                },500);
    }



}

function selectDef(e){
    if($(e.target).hasClass("def")) {
        $(".dSelected").removeClass("dSelected")
        $(e.target).addClass("dSelected");
        if ($(".selected").length == 1) {
            if (checkMatch($(".selected")[0], $(".dSelected")[0])) {
                console.log("YEAAA")
            }
        }
    }
}

function selectWord(e){
    if($(e.target).hasClass("gword")) {
        $(".selected").removeClass("selected");
        $(e.target).addClass("selected");
        $(e.target).attr("word");
        if ($(".dSelected").length == 1) {
            if (checkMatch($(".selected")[0], $(".dSelected")[0])) {
                console.log("YEAAA")
            }
        }
    }
}

function loadWords(words){
    var wordList = $("#listOfWords");
    console.log(wordList);
    for(var i=0;i<words.length;i++)
    {
        var text = $("<div>").text(words[i]).addClass("wordText");
        var div = $("<div>").addClass("gword").click(selectWord).attr("word",i);
        text.appendTo(div);
        div.appendTo("#wordList");
    }
}

function RandomizeArray(list){
    var newList = [];
    var idx = 0;
    var length = list.length;
    for(var i=0;i<length;i++){
        idx = Math.floor(Math.random() *list.length) ;
        newList.push(list[idx])
        list.splice(idx,1);
    }
    return newList;
}


function loadDefs(definitions){
    var defs = definitions.slice();
    var defList = RandomizeArray(definitions);

    for(var i=0;i<defList.length;i++)
    {

        var text = $("<div>").text(defList[i]).addClass("defText");
        var div = $("<div>").addClass("def").click(selectDef).attr("word",defs.indexOf(defList[i]));
        text.appendTo(div);
        div.appendTo("#defList");
    }
}



loadWords(words);
loadDefs(defs);
