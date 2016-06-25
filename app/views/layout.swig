<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>{{ title }}</title>
  
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/style.css">
  {% if ENV_DEVELOPMENT %}
    <script src="http://localhost:35729/livereload.js"></script>
  {% endif %}

    <script src="/js/lib/jquery.min.js"></script>
  <script src="/js/lib/bootstrap.min.js"></script>
  <script src="/js/lib/buzz.min.js"></script>
  <script src="/js/lib/jquery.twbsPagination.min.js"></script>
  {% block head %}{% endblock %}
</head>
<body>
  {% block content %}{% endblock %}
</body>
</html>
