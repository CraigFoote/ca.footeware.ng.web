ng build
docker build -t ca.footeware.ng.web.image .
docker run --name ca.footeware.ng.web.container -d -p 8080:80 ca.footeware.ng.web.image