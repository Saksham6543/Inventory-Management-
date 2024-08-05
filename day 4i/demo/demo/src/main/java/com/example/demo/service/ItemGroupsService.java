// ItemGroupsService.java
package com.example.demo.service;

import com.example.demo.model.ItemGroups;
import com.example.demo.repository.ItemGroupsRepo;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemGroupsService {

    private final ItemGroupsRepo itemGroupsRepo;

    // @Autowired
    public ItemGroupsService(ItemGroupsRepo itemGroupsRepo) {
        this.itemGroupsRepo = itemGroupsRepo;
    }

    public List<ItemGroups> getAllItemGroups() {
        return itemGroupsRepo.findAll();
    }

    public Optional<ItemGroups> getItemGroupById(String itemGroupName) {
        return itemGroupsRepo.findById(itemGroupName);
    }

    public ItemGroups saveItemGroup(ItemGroups itemGroup) {
        return itemGroupsRepo.save(itemGroup);
    }

    public ItemGroups updateItemGroup(String itemGroupName, ItemGroups itemGroupDetails) {
        return itemGroupsRepo.findById(itemGroupName)
                .map(itemGroup -> {
                    itemGroup.setItemName(itemGroupDetails.getItemName());
                    return itemGroupsRepo.save(itemGroup);
                })
                .orElseThrow(() -> new RuntimeException("ItemGroup not found with name " + itemGroupName));
    }

    public void deleteItemGroup(String itemGroupName) {
        itemGroupsRepo.deleteById(itemGroupName);
    }
}
