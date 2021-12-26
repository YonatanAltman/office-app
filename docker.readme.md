docker ps -a

docker images

docker pull nginx:alpine

docker run -d -p 9090:80 nginx:alpine --name my-first-docker

docker run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html nginx:alpine
