define(function(){
    var cardIds = Array.apply(null, Array(13)).map(function (_, i) {
        // http://stackoverflow.com/a/10050831/3345926
        switch(i) {
            case 0:
                return "A";
            case 10:
                return "J";
            case 11:
                return "Q";
            case 12:
                return "K";
            default:
                return String(i+1);
        }
        throw "wtf";
    });

    return {
        "deck":{
            // "suits": ["пика", "купа", "каро", "спатия"],
            "suits": ["spades", "hearts", "diamonds", "clubs"],
            "ids": cardIds.slice(1).concat("A"),
            "faceTextures" : "images/deck.json",
            "backTextures" : "images/back.png",
            "pilePosition" : { "x":40, "y": 490 }
        },

        "player": {
            "cardsOffset": 16,//in pixels
            "choices": 5
        },

        "stageImages": {
            "logo"      :"images/logo.png",
            "dealerBG"  :"images/dealerBG.png",
            "playerBG"  :"images/playerBG.png",
            "deckPile"  :"images/deckPile.png",
            "footer"    :"images/footerBar.png"
        },

        "canvas": {
            "width": 1024,
            "height": 768,
            "id": "game"
        },
    }; 
})
