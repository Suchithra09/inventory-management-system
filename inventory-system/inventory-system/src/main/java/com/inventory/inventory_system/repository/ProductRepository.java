package com.inventory.inventory_system.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.inventory.inventory_system.entity.Product;

public interface ProductRepository
extends JpaRepository<Product, Long> {

    List<Product> findByNameContainingIgnoreCase(
            String name
    );

    Page<Product> findAll(
            Pageable pageable
    );

    List<Product> findByQuantityLessThan(
            int quantity
    );

}