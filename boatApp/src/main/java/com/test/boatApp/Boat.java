package com.test.boatApp;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document("boats")
public class Boat {

    @Id
    public String id;

    public String name;
    public String description;

    public Boat() {}

    public void setName(String name){
        this.name = name;
    }

    public void setDescription(String description){
        this.description = description;
    }
    public Boat(String name, String description) {
        this.name = name;
        this.description = description;
    }

    @Override
    public String toString() {
        return String.format(
                "Customer[id=%s, name='%s', description='%s']",
                id, name, description);
    }


}