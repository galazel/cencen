package com.example.backend.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "sub_categories")
public class ProductSubCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int subCategoryID;
    private String subCategoryName;
    @ManyToOne
    @JoinColumn(name = "categoryId")
    @JsonBackReference
    private ProductCategory category;
    @OneToMany(mappedBy = "subCategory")
    @JsonManagedReference
    private List<Product> products;
}
