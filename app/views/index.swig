{% extends 'layout.swig' %}

{% block content %}
<div id="all">
<h1>ReadIT</h1>
<span class="headline">An audio quizbowl reader</span>

<div class="container">
  <!--button type="button" id="start" class="btn">Start tossup</button--> 
  <!div class="row">
    <!div class="span4">
      Set: 
      <select id="selectSet" class="form-control smallSelect">
      {% for i in sets %}
      <option>{{i}}</option>
      {% endfor %}
      </select>
    <!/div>
    <!div class="span4">
      Packet: 
      <select id="packetSet" class="form-control smallSelect">
      </select>
    <!/div>
  <!/div>


<nav>
  <!--ul class="pager">
    <li><a href="#" id="prevQ">Previous</a></li>
    <li>
    	<select id="questionNum" class="form-control" style="max-width:30%;display:inline;">
        </select>
    </li>
    <li><a href="#" id="nextQ">Next</a></li>
  </ul-->
   <ul id="pagination-demo" class="pagination-sm"></ul>
   <div class="checkbox">
  <label><input type="checkbox" id="autoplayCheck" value="" checked=checked>Autoplay</label>
  </div>
</nav>

<div>
  <a href="#" title="Play video" class="play"></a>
</div>
<div id="">


  <!--button type="button" id="buzz" class="btn btn-primary">Buzz</button> 
  <button type="button" id="keepReading" class="btn btn-danger">Neg (keep reading)</button-->
  <!--button type="button" id="showAnswer" class="btn btn-info">Show answer</button-->
</div>

  <div id="answerDiv">
  	<p>The answer is...<span id="answer"></span></p>
  </form>
</div>

<script src="/js/main.js"></script>
</div>
{% endblock %}
