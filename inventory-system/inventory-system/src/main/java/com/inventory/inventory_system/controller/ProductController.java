package com.inventory.inventory_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import com.inventory.inventory_system.dto.DashboardResponse;
import com.inventory.inventory_system.entity.Product;
import com.inventory.inventory_system.services.ProductService;
@RestController

@CrossOrigin(
origins =
"http://localhost:3000"
)

@RequestMapping("/products")

public class ProductController {

    @Autowired
    private ProductService service;

    @PostMapping
    public Product addProduct(
            @RequestBody Product product
    ) {
        return service.save(product);
    }

    @GetMapping
    public List<Product> getProducts() {
        return service.getAll();
    }
    

    @GetMapping("/search")
    public List<Product> search(
            @RequestParam String name
    ) {
        return service.search(name);
    }

    @GetMapping("/page")
    public Page<Product> pagination(
            @RequestParam int page,
            @RequestParam int size
    ) {
        return service.paginate(page, size);
    }

    @GetMapping("/low-stock")
    public List<Product> lowStock() {
        return service.lowStock();
    }

    @GetMapping("/{id}")
    public Product getProduct(
            @PathVariable Long id
    ) {
        return service.getById(id);
    }

    @PutMapping("/{id}")
    public Product updateProduct(
            @PathVariable Long id,
            @RequestBody Product product
    ) {
        return service.update(id, product);
    }

    @DeleteMapping("/{id}")
    public String deleteProduct(
            @PathVariable Long id
    ) {
        service.delete(id);

        return "Product Deleted";
    }
    @GetMapping("/dashboard")
    public DashboardResponse dashboard() {

        return service.dashboard();

    }

}