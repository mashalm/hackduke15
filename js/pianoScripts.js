
$( document ).ready(function() {
    mapPianoKeys();
    $('pianoKeyMap').imageMapResize();
    captureGestures();
});

function mapPianoKeys() {
	$('#pianokey1Container').hover(
	    function() { $('#pianokey1Container').html('<img src="images/pianokeysPress1.png" />');
	    }, function() { $('#pianokey1Container').html('<img src="images/pianokeysNotPressed1.png" />');
		}
	);
	$('#pianokey2Container').hover(
	    function() { $('#pianokey2Container').html('<img src="images/pianokeysPress2.png" />');
	    }, function() { $('#pianokey2Container').html('<img src="images/pianokeysNotPressed2.png" />');
		}
	);
	$('#pianokey3Container').hover(
	    function() { $('#pianokey3Container').html('<img src="images/pianokeysPress3.png" />');
	    }, function() { $('#pianokey3Container').html('<img src="images/pianokeysNotPressed3.png" />');
		}
	);

	$('#pianokey4Container').hover(
	    function() { $('#pianokey4Container').html('<img src="images/pianokeysPress1.png" />');
	    }, function() { $('#pianokey4Container').html('<img src="images/pianokeysNotPressed1.png" />');
		}
	);
	$('#pianokey5Container').hover(
	    function() { $('#pianokey5Container').html('<img src="images/pianokeysPress2.png" />');
	    }, function() { $('#pianokey5Container').html('<img src="images/pianokeysNotPressed2.png" />');
		}
	);
	$('#pianokey6Container').hover(
	    function() { $('#pianokey6Container').html('<img src="images/pianokeysPress2.png" />');
	    }, function() { $('#pianokey6Container').html('<img src="images/pianokeysNotPressed2.png" />');
		}
	);
	$('#pianokey7Container').hover(
	    function() { $('#pianokey7Container').html('<img src="images/pianokeysPress3.png" />');
	    }, function() { $('#pianokey7Container').html('<img src="images/pianokeysNotPressed3.png" />');
		}
	);

	$('#pianokey8Container').hover(
	    function() { $('#pianokey8Container').html('<img src="images/pianokeysPress1.png" />');
	    }, function() { $('#pianokey8Container').html('<img src="images/pianokeysNotPressed1.png" />');
		}
	);
	$('#pianokey9Container').hover(
	    function() { $('#pianokey9Container').html('<img src="images/pianokeysPress2.png" />');
	    }, function() { $('#pianokey9Container').html('<img src="images/pianokeysNotPressed2.png" />');
		}
	);
	$('#pianokey10Container').hover(
	    function() { $('#pianokey10Container').html('<img src="images/pianokeysPress2.png" />');
	    }, function() { $('#pianokey10Container').html('<img src="images/pianokeysNotPressed2.png" />');
		}
	);
	$('#pianokey11Container').hover(
	    function() { $('#pianokey11Container').html('<img src="images/pianokeysPress3.png" />');
	    }, function() { $('#pianokey11Container').html('<img src="images/pianokeysNotPressed3.png" />');
		}
	);
}

function pressKey(leftmarg) {

}

function setOpacity(id, level) {
    element = document.getElementById(id);
    element.style.opacity = level;
}

function showId(id) {
	console.log(id);
}

function captureGestures() {
    var controller = Leap.loop({enableGestures: true}, function(frame) {
	var gestures = frame.gestures;
	var hands = frame.hands;
	if (rightHand = frame.hands[0])
	    console.log(rightHand.screenPosition());
	if (frame.valid && gestures.length > 0) {
	    gestures.forEach(function(gesture) {
		var handIds = gesture.handIds;
		handIds.forEach(function(handId) {
		    var hand = frame.hand(handId);
		    $('#positionSpan').html(hand.screenPosition().join(','));
		});
	    });
	}
    }).use('screenPosition', {scale: 0.25});

    controller.use('boneHand', {
	targetEl: document.body,
	arm: true,
	opacity: 0.5,
    });
}
