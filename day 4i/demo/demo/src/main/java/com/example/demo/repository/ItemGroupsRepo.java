package com.example.demo.repository;
 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
 
import com.example.demo.model.ItemGroups;
 
@Repository
public interface ItemGroupsRepo extends JpaRepository<ItemGroups,String>{
 
    
}
