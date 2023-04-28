package com.test.boatApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@SpringBootApplication
public class BoatAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(BoatAppApplication.class, args);
	}


	@Autowired
	private BoatRepository repository ;
	/*@Override
	public void run(String... args) throws Exception {

		//repository.deleteAll();

		// save a couple of boats
		//repository.save(new Boat("Black Perl", "Jack Sparrow's Boat"));
		//repository.save(new Boat("White Perl", "The white black perle "));

		// fetch all boat
		System.out.println("Boat found with findAll():");
		System.out.println("-------------------------------");
		for (Boat boat : repository.findAll()) {
			System.out.println(boat);
		}
		System.out.println();
		System.out.println("findByName !");

		System.out.println(repository.findByName("Black Perl"));
	}*/

}
