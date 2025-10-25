package com.example.backend.dto;

import com.example.backend.models.Product;
import lombok.Data;

import java.util.List;

@Data
public class ProductCategoryDTO {
    private int categoryId;
    private String categoryName;
    private List<Product> products;
}
