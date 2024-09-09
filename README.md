<style>
    code {
        background-color: transparent;
        color: #ff9154
    }
</style>

# ca.footeware.ng.web

## Development

1. `ng update`
1. change app version number in `package.json`
1. `ng build`
1. `ng serve`
1. http://localhost:4200 see pictures 
1. `docker run -d --name rest.galleries -p 8000:8000 -v /opt/rest.galleries/galleries:/opt/rest.galleries/galleries -t rest.galleries:3.5.2`
1. http://localhost:8000/galleries see gallery names
1. `docker build -t ng.web .`
1. `docker run -d --name ng.web -p 8001:8001 -t ng.web`
1. http://localhost:8001 see pictures

## Release

1. commit changes to git and create tag
1. `docker tag ng.web craigfoote/ng.web:[version]`
1. `docker tag ng.web craigfoote/ng.web:latest`
1. `docker push craigfoote/ng.web:[verson]`
1. `docker push craigfoote/ng.web:latest`
