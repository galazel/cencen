package com.example.backend.controllers;


import com.example.backend.models.Product;
import com.example.backend.models.ProductCategory;
import com.example.backend.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService service;
    @Autowired
    public ProductController(ProductService service)
    {
        this.service = service;
    }
    @GetMapping("/greeting")
    public String greet()
    {
        return " hello";
    }
    @GetMapping("/{categoryID}")
    private ResponseEntity<List<Product>> getCategoryProducts(@PathVariable int categoryID)
    {
        Optional<ProductCategory> getAllProducts = service.getCategoryProducts(categoryID);
        return getAllProducts.isPresent() ? new ResponseEntity<>(getAllProducts.stream().toList().get(0).getProducts(), HttpStatusCode.valueOf(200)) : new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }
}
