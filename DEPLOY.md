# Build and deploy with docker

## In VS Code

1. ng build
1. docker build -t ng.web .
1. docker tag ng.web craigfoote/ng.web:latest
1. docker push craigfoote/ng.web:latest

## On server

1. docker pull craigfoote/ng.web:latest
1. docker run --name ng.web -p 8001:80 -d --restart unless-stopped --memory="1g" --memory-swap="2g" -t craigfoote/ng.web:latest
