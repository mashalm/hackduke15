
$( document ).ready(function() {
    mapPianoKeys();
    $('pianoKeyMap').imageMapResize();
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