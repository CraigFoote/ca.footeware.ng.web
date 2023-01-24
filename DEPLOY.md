1. ng build
1. docker build -t ca.footeware.ng.web.image .
1. docker tag ca.footeware.ng.web.image craigfoote/ca.footeware.ng.web.image:latest
1. docker push craigfoote/ca.footeware.ng.web.image:latest
1. docker run --name ca.footeware.ng.web.container -p 8001:80 -d --restart unless-stopped --memory="1g" --memory-swap="2g" -t craigfoote/ca.footeware.ng.web.image:latest