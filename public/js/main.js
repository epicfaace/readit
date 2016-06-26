window.autoplay=$("#autoplayCheck").is(":checked");

window.qNumber = 0;

$("#autoplayCheck").change(function() {
	window.autoplay = $(this).is(":checked");
});


 /*
 DOC
 http://esimakin.github.io/twbs-pagination/?a=&page=2&c=d
 */

		function startQuestion() {
		$(".play").addClass("active");
		$("#answerDiv,#keepReading").hide();
		if (typeof reader !== 'undefined') {
				reader.sound.stop();
				}
		window.reader = new Reader(qNumber);
      reader.sound.play();
		//$("select#questionNum").val(qNumber);
		}

function Reader(number) {
	this.sound = new buzz.sound("/getSound?set="+$("#selectSet").val()+
		"&packet="+$("#selectPacket").val()+
		"&number="+number, {
    webAudioApi: true,
    preload: true
  });
	this.sound.unmute().load().play();
  console.log("1.3");
	this.sound.bind("ended", function(e) {
		if (!autoplay) {
			$(".play").removeClass("active");
		}
		else {
			qNumber++;
      //TODO: add some bounds handling here.
			clickPage();
		}
	});
	this.sound.bind("pause", function(e) {
		$(".play").removeClass("active");
	});
	this.sound.bind("play", function(e) {
		$(".play").addClass("active");
	});

	$('body').keyup(function(e){
	   if(e.keyCode == 32){
	       // user has pressed space
	       $(".play").click();
	   }
	});

	$("#showAnswer").click(function() {
		$("#answer").text("Answer (todo)");
		$("#answerDiv").toggle();
	});


}
function bindClicks() {
	$("#keepReading, .play").click(function() {
		if ($(".play").hasClass("active")) {
			if (reader && reader.sound && !reader.sound.isPaused())
				reader.sound.pause();
			$("#keepReading").show();

		}
		else {
		if (typeof reader === 'undefined' ||
			(reader.sound && reader.sound.isEnded())) {
			//Console.log("yes");
				startQuestion();

			}
			else {
				reader.sound.play();
			}
		}

		return false;
	});
}
bindClicks();

function Question() {
	this.questions = [
		{"answer":"Gustav Klimt",
		"url":"tossup1"},
		{"answer":"Crimean War",
		"url":"tossup2"},
		{"answer":"Plato",
		"url":"tossup3"}

	];

	for (i in this.questions) {
		console.log(this.questions[i]);
		var curQ = this.questions[i];
     $('select#questionNum')
         .append(
         	$("<option></option>")
         	.attr("value",i)
         	.text(curQ.url)
         );
	}
}

$("#selectSet").change(function() {
	updateList();

});
$("#selectPacket").change(function() {
  updateList();
  window.qNumber = 1;
  clickPage();
  //startQuestion(); //does this.
});

function updateList() {
	$.get("/list", {set: $("#selectSet").val()})
	.done(function(results) {
		for (i in results) {
			$("#selectPacket").html("");
			$("<option>"+results[i]+"</option>").appendTo("#selectPacket");
		}
		 $('#pagination-demo').twbsPagination({
	        totalPages: 20,
	        visiblePages: 5,
          initiateStartPageClick: false,
	        onPageClick: function (event, page) {
	        	window.qNumber = page;
	            startQuestion();
	        }
	    });
      if (window.qNumber == 1) {
        //if # is already 1, it actually starts the question in addition to just clicking the number.
        //also works at the beginning (qNumber = 0).
        startQuestion();
      }
      /*  else if (window.qNumber == 0) {
        //on page load. do not want autoplay on page load (for mobile devices)
        qNumber = 1;
      }*/
      else {
        qNumber = 1;
        clickPage();
      }
	})
	.fail(function() {
		alert("Sorry, there was an error");
	});

}

function clickPage() {

	$("li.page").filter(function () {
				return $(this).text() == qNumber;
			}).click(); //bug: if equal to 1, does not change it.
}

$(function() {
	updateList();

});

$("#test").click(function() {
  window.reader = new Reader(qNumber);
  reader.sound.play();

});
