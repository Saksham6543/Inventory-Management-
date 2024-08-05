// ItemGroupsController.java
package com.example.demo.controller;

import com.example.demo.model.ItemGroups;
import com.example.demo.service.ItemGroupsService;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/item-groups")
public class ItemGroupsController {

    private final ItemGroupsService itemGroupsService;

    // @Autowired
    public ItemGroupsController(ItemGroupsService itemGroupsService) {
        this.itemGroupsService = itemGroupsService;
    }

    @GetMapping
    public List<ItemGroups> getAllItemGroups() {
        return itemGroupsService.getAllItemGroups();
    }

    @GetMapping("/{itemGroupName}")
    public ResponseEntity<ItemGroups> getItemGroupById(@PathVariable String itemGroupName) {
        return itemGroupsService.getItemGroupById(itemGroupName)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ItemGroups createItemGroup(@RequestBody ItemGroups itemGroup) {
        return itemGroupsService.saveItemGroup(itemGroup);
    }

    @PutMapping("/{itemGroupName}")
    public ResponseEntity<ItemGroups> updateItemGroup(@PathVariable String itemGroupName, @RequestBody ItemGroups itemGroupDetails) {
        try {
            ItemGroups updatedItemGroup = itemGroupsService.updateItemGroup(itemGroupName, itemGroupDetails);
            return ResponseEntity.ok(updatedItemGroup);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{itemGroupName}")
    public ResponseEntity<Void> deleteItemGroup(@PathVariable String itemGroupName) {
        itemGroupsService.deleteItemGroup(itemGroupName);
        return ResponseEntity.noContent().build();
    }
}
