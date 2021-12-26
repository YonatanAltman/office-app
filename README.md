docker run --name angular-with-docker -d -p 8080:80 ngnix:latest

docker run -d -p 80:80 --name ngnix ngnix:latest

docker run -d -p 8080:80 ngnix:latest
docker run -it --rm -d -p 8080:80 --name angular-with-docker nginx
docker run -d -p 8080:80 --name web nginx
