// ItemsService.java
package com.example.demo.service;

import com.example.demo.model.Items;
import com.example.demo.repository.ItemsRepo;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemsService {

    private final ItemsRepo itemsRepo;

    // @Autowired
    public ItemsService(ItemsRepo itemsRepo) {
        this.itemsRepo = itemsRepo;
    }

    public List<Items> getAllItems() {
        return itemsRepo.findAll();
    }

    public Optional<Items> getItemById(String productName) {
        return itemsRepo.findById(productName);
    }

    public Items saveItem(Items item) {
        return itemsRepo.save(item);
    }

    public Items updateItem(String productName, Items itemDetails) {
        return itemsRepo.findById(productName)
                .map(item -> {
                    item.setProductSKU(itemDetails.getProductSKU());
                    item.setPrice(itemDetails.getPrice());
                    item.setDescription(itemDetails.getDescription());
                    return itemsRepo.save(item);
                })
                .orElseThrow(() -> new RuntimeException("Item not found with name " + productName));
    }

    public void deleteItem(String productName) {
        itemsRepo.deleteById(productName);
    }
}
