package com.test.boatApp;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface BoatRepository extends MongoRepository<Boat, String> {

    @Query("{name:'?0'}")
    Boat findByName(String name);


}