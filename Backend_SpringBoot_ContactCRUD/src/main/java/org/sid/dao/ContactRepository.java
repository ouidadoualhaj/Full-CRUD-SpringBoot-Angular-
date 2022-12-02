package org.sid.dao;

import org.sid.entities.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ContactRepository extends JpaRepository<Contact, Long> {

	
}
