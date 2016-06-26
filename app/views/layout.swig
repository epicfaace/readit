<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>{{ title }}</title>

    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/style.css">
    <!link href="/css/lib/bootstrap-responsive.css" rel="stylesheet">
  {% if ENV_DEVELOPMENT %}
    <script src="http://localhost:35729/livereload.js"></script>
  {% endif %}

    <script src="/js/lib/jquery.min.js"></script>
  <script src="/js/lib/bootstrap.min.js"></script>
  <script src="/js/lib/buzz.min.js"></script>
  <script src="/js/lib/jquery.twbsPagination.min.js"></script>
  <script src="http://cdn.binaryjs.com/0/binary.js"></script>
  {% block head %}{% endblock %}
</head>
<body>
  {% block content %}{% endblock %}

      <footer class="footer">
      <div class="container">
      <p></p>
        <p class="text-muted">Made by Ashwin Ramaswami</p>
        <p class="text-muted">Contribute at the <a href="https://github.com/epicfaace/readit" target="_blank">Github repository</a></p>
        <p class="text-muted">More info on the <a href="https://github.com/epicfaace/readit" target="_blank">forum post</a></p>
        <p>Current packets: 1 full packet for CALI, 3 tossups for PACE</p>
      </div>
    </footer>
</body>
</html>
