
$( document ).ready(function() {
    captureGestures();
});

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
    
