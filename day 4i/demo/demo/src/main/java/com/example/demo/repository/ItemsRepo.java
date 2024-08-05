package com.example.demo.repository;
 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
 
import com.example.demo.model.Items;
 
@Repository
public interface ItemsRepo extends JpaRepository<Items,String>{
 
    
}
