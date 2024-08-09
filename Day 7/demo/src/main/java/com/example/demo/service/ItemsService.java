package com.example.demo.service;

import com.example.demo.model.Items;
import com.example.demo.repository.ItemsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemsService {

    @Autowired
    private ItemsRepo itemsRepo;

    public Items saveItem(Items item) {
        return itemsRepo.save(item);
    }

    public List<Items> getAllItems() {
        return itemsRepo.findAll();
    }

    public Optional<Items> getItemById(Long id) {
        return itemsRepo.findById(id);
    }

    public void deleteItem(Long id) {
        itemsRepo.deleteById(id);
    }
}
