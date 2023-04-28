package com.test.boatApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost")
public class BoatController {

    @Autowired
    private BoatRepository repository;
    @RequestMapping("/")
    public String hello() {
        return "Welcome to appBoat !!!";
    }

    @RequestMapping("/boats")
    public List<Boat> listAll(){
        return repository.findAll();
    }

    @PostMapping("/")
    public Boat save(@RequestBody Boat newBoat){
        return repository.save(newBoat);
    }

    @PutMapping("/{id}")
    public Boat update(@RequestBody Boat newBoat, @PathVariable String id){

        Optional<Boat> boatToUpdate = repository.findById(id);
        boatToUpdate.ifPresent(boat -> {
            boat.setName(newBoat.name);
            boat.setDescription(newBoat.description);
        });
        return repository.save(boatToUpdate.get());

    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
       repository.deleteById(id);
    }

}
