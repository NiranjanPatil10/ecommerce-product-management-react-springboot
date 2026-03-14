package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.ProductRepository;
import com.model.Product;



@Service
public class ProductServiceImpl implements ProductService {

	
	

    @Autowired
    private ProductRepository productRepo;
    
    public Product addProduct(Product product) {
        return productRepo.save(product);
    }
    
    
    

    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }
    
    
    
    

    public Optional<Product> getProductById(Long id) {
        return productRepo.findById(id);
    }
    
    
    
    
    
    public boolean deleteProductById(Long id) {

        if (productRepo.existsById(id)) {
            productRepo.deleteById(id);
            return true;
        }
        return false;
    }
    
    
    public Product updateProduct(Long id, Product product) {
        if (productRepo.existsById(id)) {
            product.setId(id);
          
        } 
        return productRepo.save(product);
    }
}