docker ps -a

docker images

docker pull nginx:alpine


## run for fun
docker run -d -p 9090:80 nginx:alpine

## run under dist folder
docker run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html nginx:alpine

