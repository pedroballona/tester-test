FROM python:3.8-alpine
COPY . /app
WORKDIR /app

RUN pip install pipenv
RUN pipenv install --system
RUN python manage.py migrate
RUN echo "from django.contrib.auth.models import User; User.objects.create_superuser('mestre', 'admin@admin.com', 'totvs')" | python manage.py shell

EXPOSE 80
STOPSIGNAL SIGINT
ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:80"]