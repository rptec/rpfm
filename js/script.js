/**
 * rev-1.3.1
 * require jQuery.
 * Created by Administrator on 2015/8/26.
 */

$(document).ready(function(){
    var audio = $('#audio'),
        album = $('.audio-album'),
        current =  $('.audio-progress').find('.current'),
        center = $('.center-control-buttons');

    //aside
    $('.fixed-control-buttons').on('click', '.fa', function() {
        var that = $(this);

        if ( that.hasClass('fa-home') ) {
            window.open( 'http://www.72blog.com' );  //set your HOMEPAGE
        } else if ( that.hasClass('fa-chevron-right') ) {
            audio[0].pause();
            loadMusic();
        }
    });

    audio.on({
        'playing': function() {
            album.removeClass('paused');
            center.find('.fa').removeClass('fa-play').addClass('fa-pause');
        },
        'pause': function() {
            album.addClass('paused');
            center.find('.fa').removeClass('fa-pause').addClass('fa-play');
        },
        'ended': function() {
            loadMusic();
        },
        'timeupdate': function() {
           current.css('width', audio[0].currentTime * 100 / audio[0].duration + '%');
        },
        'error': function() {
            if ( audio.attr('src') != '' ) {
                loadMusic();
            }
        }
    });

    center.on('click', function() {
        audio[0].paused ? audio[0].play() : audio[0].pause();
    });

    function loadMusic() {
        $.get('php/random.php?_=' + (new Date()).getTime(), function(data) {
            var musicInfo = JSON.parse(data),
                cover = $('.audio-album').find('img'),
                audioInfo = $('.audio-info');

            audio.attr('src', musicInfo.mp3);
            cover.attr({
                'src': musicInfo.cover + '?param=350y350',
                'data-src': musicInfo.cover
            });
            audioInfo.find('.title').html( musicInfo.title );
            audioInfo.find('.artist').html( musicInfo.artist );

            audio[0].play();
        });
        audio[0].volume = 0.6;
    }

    window.onload = loadMusic;
});
