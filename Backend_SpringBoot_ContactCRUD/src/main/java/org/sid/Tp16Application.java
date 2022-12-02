package org.sid;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import org.sid.dao.ContactRepository;
import org.sid.entities.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Tp16Application implements CommandLineRunner {
	
	@Autowired
	private ContactRepository contactRepository;
	
	public static void main(String[] args) {
	SpringApplication.run(Tp16Application.class, args);
	}
	
	public Tp16Application() {
	super();
	// TODO Auto-generated constructor stub
	}
	
	@Override
	public void run(String... args) throws Exception {
	DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	
	//contactRepository.save(new Contact("Salmi","Anass",df.parse("12/07/2006"),"Salmi.anass@gmail.com", 0656432365 ,"test2" ));
	
	contactRepository.findAll().forEach(c->{
	System.out.println(c.getNom());
	});
	}
}