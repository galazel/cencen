package com.example.backend.repositories;

import com.example.backend.models.ProductSubCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductSubCategoryRepo extends JpaRepository<ProductSubCategory,Integer> {
}
