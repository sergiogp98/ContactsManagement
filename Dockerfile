FROM python:3.7
WORKDIR /database

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .

CMD ["python", "app.py"]