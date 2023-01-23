1. ng build
2. docker build -t ca.footeware.ng.web.image .
3. docker run --name ca.footeware.ng.web.container -d --restart unless-stopped --memory="1g" --memory-swap="2g" -p 8001:80 ca.footeware.ng.web.image