package com.example.backend.services;
import com.example.backend.models.ProductCategory;
import com.example.backend.repositories.ProductCategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {
    private final ProductCategoryRepo categoryRepo;

    @Autowired
    public ProductService(ProductCategoryRepo categoryRepo) {
        this.categoryRepo = categoryRepo;
    }
    public Optional<ProductCategory> getCategoryProducts(int categoryID) {
        return categoryRepo.findById(categoryID);
    }
}
