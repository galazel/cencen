package com.example.backend.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name ="products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;
    private String productName;
    private String description;
    private String image;
    private int stocks;
    private double price;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoryId")
    private ProductCategory category;
}
