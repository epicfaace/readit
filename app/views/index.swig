{% extends 'layout.swig' %}

{% block content %}
<div id="all">
<h1>ReadIT</h1>
<span class="headline">An audio quizbowl reader</span>

<div class="container">

      Set:
      <select id="selectSet" class="form-control smallSelect">
      {% for i in sets %}
      <option>{{i}}</option>
      {% endfor %}
      </select>
      Packet:
      <select id="selectPacket" class="form-control smallSelect">
      </select>

<nav>
   <ul id="pagination-demo" class="pagination-sm"></ul>
  <div>
  <label class="checkbox-inline"><input type="checkbox" id="autoplayCheck" value="" checked=checked>Autoplay</label>
  <button id="test">Test play</button>
  </div>
</nav>

<div>
  <a href="#" title="Play video" class="play"></a>
</div>
<div id="">


</div>

  <div id="answerDiv">
  	<p>The answer is...<span id="answer"></span></p>,
  </form>
</div>

<script src="/js/main.js"></script>
</div>
</div>
{% endblock %}
