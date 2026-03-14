package com.service;

import java.util.List;
import java.util.Optional;

import com.model.Product;

public interface ProductService {
	
	

    Product addProduct(Product product);

    List<Product> getAllProducts();

    Optional<Product> getProductById(Long id);

    boolean deleteProductById(Long id);

    Product updateProduct(Long id, Product product);
}
	


