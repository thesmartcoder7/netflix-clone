run:
	python manage.py runserver

check:
	python manage.py check --deploy

shell:
	python manage.py shell

super:
	python manage.py createsuperuser

migrations:
	python manage.py makemigrations && python manage.py migrate

test:
	python manage.py test
