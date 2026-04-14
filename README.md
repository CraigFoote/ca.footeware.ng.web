# ca.footeware.ng.web

## Preparation

1. `ng update`
1. `npm install`

## Development in VS Code

1. change app version number in `package.json`
1. `ng build`
1. `ng serve`
1. <http://localhost:4200> - see pictures
1. `docker build -t ng.web .`

## Release

1. commit changes to git and create tag
1. `docker tag ng.web craigfoote/ng.web:[version]`
1. `docker tag ng.web craigfoote/ng.web:latest`
1. `docker push craigfoote/ng.web:[verson]`
1. `docker push craigfoote/ng.web:latest`
