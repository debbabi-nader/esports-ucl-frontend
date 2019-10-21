# Frontend component for the "ESports-UCL" CAS service

This frontend component is an Angular project, and it was used in the ['SSO and SLO for Spring Boot and Angular applications with CAS'](https://debbabi-nader.github.io/cas-spring-angular/index.html) blog post.
Its associated backend component can be found in the [esports-ucl-backend](https://github.com/debbabi-nader/esports-ucl-backend) repository.

## Requirements

The required tools and their respective versions used, at the time the blog post associated to this repository was written:

* Node.js 10.16.0 and NPM 6.9.0
* Angular CLI 8.0.2
* Apache Tomcat Server 9.0.22

## Build

```bash
ng build --prod --base-href=/esports/ucl/
```

## Deployment

The build of this frontend component, was deployed on an Apache Tomcat server, within the `static` folder of its associated backend component build.

After a successful deployment, this CAS service should be available at `https://localhost:8443/esports/ucl`.
