window.autoplay=$("#autoplayCheck").is(":checked");

$("#autoplayCheck").change(function() {
	window.autoplay = $(this).is(":checked");
})

$(function() {
	window.qNumber = 0;
	window.question = new Question();

	/*$("#start").click(function() {
		startQuestion();
	});
	window.qNumber = 0;
	$("#nextQ").click(function() {
		
		window.qNumber++;
		startQuestion();
		
	});

		$("#prevQ").click(function() {
		window.qNumber --;
		startQuestion();
	});*/

		$("select#questionNum").change(function() {
			window.qNumber = $(this).val();
			startQuestion();
		})



	/*var icon = $('.play');
	icon.click(function() {
	icon.toggleClass('active');
		return false;
	});*/

});


 /*
 DOC
 http://esimakin.github.io/twbs-pagination/?a=&page=2&c=d
 */

		function startQuestion() {
		$(".play").addClass("active");
		$("#answerDiv,#keepReading").hide();
		//if (qNumber > question.questions.length-1) qNumber = 0;
		//if (qNumber < 0) qNumber = question.questions.length-1;
		if (typeof reader !== 'undefined') {
				reader.sound.stop();
				}
		window.reader = new Reader(qNumber);
		//$("select#questionNum").val(qNumber);
		}

function Reader(number) {
	this.sound = new buzz.sound("/getSound?set="+$("#selectSet").val()+
		"&packet="+$("#packetSet").val()+
		"&number="+number);
	this.sound.play();

	this.sound.bind("ended", function(e) {
		if (!autoplay) {
			$(".play").removeClass("active");
		}
		else {
			//qNumber++;
			//startQuestion();
			qNumber++;
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
			if (!reader.sound.isPaused())
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
		"url":"tossup3"},

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
	startQuestion(); //hack to fix problem
});
$("#packetSet").change(updateList);

function updateList() {
	$.get("/list", {set: $("#selectSet").val()})
	.done(function(results) {
		for (i in results) {
			$("#packetSet").html("");
			$("<option>"+results[i]+"</option>").appendTo("#packetSet");
		}
		 $('#pagination-demo').twbsPagination({
	        totalPages: 20,
	        visiblePages: 5,
	        onPageClick: function (event, page) {
	        	window.qNumber = page;
	            startQuestion();
	        }
	    });
		 window.qNumber = 1;
	     clickPage();
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