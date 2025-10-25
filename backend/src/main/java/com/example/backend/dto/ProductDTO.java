package com.example.backend.dto;


import com.example.backend.models.ProductCategory;
import lombok.AllArgsConstructor;
import lombok.Data;
@Data
@AllArgsConstructor

public class ProductDTO {
    private String productName;
    private String description;
    private String image;
    private int stocks;
    private double price;
}
