$(function() {
	window.qNumber = 0;
	window.question = new Question();

	$("#start").click(function() {
		window.qNumber = 0;
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
	});

		$("select#questionNum").change(function() {
			window.qNumber = $(this).val();
			startQuestion();
		})

		function startQuestion() {
			$("#answerDiv,#keepReading,#showAnswer").hide();
					if (qNumber > question.questions.length-1) qNumber = 0;
		if (qNumber < 0) qNumber = question.questions.length-1;
		if (typeof reader !== 'undefined') {
				reader.sound.stop();
				}
		window.reader = new Reader(window.question.questions[qNumber]);
		$("select#questionNum").val(qNumber);
		}

});

function Reader(curQuestion) {
	this.sound = new buzz.sound("./sounds/PACE 2015/"+curQuestion.url+".wav");
	this.sound.play();

	$('body').keyup(function(e){
	   if(e.keyCode == 32){
	       // user has pressed space
	       $("#buzz").click();
	   }
	});

	$("#buzz").click(function() {
		reader.sound.pause();
		$("#keepReading,#showAnswer").show();
	});

	$("#showAnswer").click(function() {
		$("#answer").text(curQuestion.answer);
		$("#answerDiv").show();
	});

	$("#keepReading").click(function() {
		reader.sound.play();
	})


}

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