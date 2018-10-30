//<![CDATA[
$(document).ready(function(){
    "use strict";
    new jPlayerPlaylist({
        jPlayer: "#musica-jquery-jplayer",
        cssSelectorAncestor: "#musica-audio-player-container"
    }, [
        

		

	 {
            title:"Radio Bhumi",
            artist:"<span class='music-time'>92.8 FM</span>",
            mp3:"http://149.56.195.94:8545/stream/",
            oga:"http://149.56.195.94:8545/stream/",
            poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
         },
       
    ], {
        playlistOptions: {
            autoPlay: false,
            loopOnPrevious: true,
            shuffleOnLoop: true,
            enableRemoveControls: true,
            displayTime: "show",
            freeItemClass: "jp-playlist-item-free",
        },
        swfPath: "js/jquery.jplayer.swf",
        supplied: "oga, mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: true,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        volume: 1,
    });



});
//]]>
