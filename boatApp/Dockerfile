FROM openjdk:17

VOLUME /tmp
EXPOSE 8080

ADD ./target/boatApp-0.0.1-SNAPSHOT.jar boatApp.jar
ENTRYPOINT ["java","-jar","boatApp.jar"]
