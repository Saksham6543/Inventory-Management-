// ItemsController.java
package com.example.demo.controller;

import com.example.demo.model.Items;
import com.example.demo.service.ItemsService;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
public class ItemsController {

    private final ItemsService itemsService;

    // @Autowired
    public ItemsController(ItemsService itemsService) {
        this.itemsService = itemsService;
    }

    @GetMapping
    public List<Items> getAllItems() {
        return itemsService.getAllItems();
    }

    @GetMapping("/{productName}")
    public ResponseEntity<Items> getItemById(@PathVariable String productName) {
        return itemsService.getItemById(productName)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Items createItem(@RequestBody Items item) {
        return itemsService.saveItem(item);
    }

    @PutMapping("/{productName}")
    public ResponseEntity<Items> updateItem(@PathVariable String productName, @RequestBody Items itemDetails) {
        try {
            Items updatedItem = itemsService.updateItem(productName, itemDetails);
            return ResponseEntity.ok(updatedItem);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{productName}")
    public ResponseEntity<Void> deleteItem(@PathVariable String productName) {
        itemsService.deleteItem(productName);
        return ResponseEntity.noContent().build();
    }
}
