# ca.footeware.ng.web

## Development

1. `ng update` (one time)
1. change app version number in `package.json`
1. `ng build`
1. `ng serve`
1. http://localhost:4200

## Release

1. commit changes to git and create tag
1. `docker build -t ng.web .`
1. `docker tag ng.web craigfoote/ng.web:[version]`
1. `docker tag ng.web craigfoote/ng.web:latest`
1. `docker push craigfoote/ng.web:[verson]`
1. `docker push craigfoote/ng.web:latest`
