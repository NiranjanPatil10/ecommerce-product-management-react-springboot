package com.controller;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Product;
import com.service.ProductServiceImpl;



@RestController
@CrossOrigin(origins = "http://localhost:3000") 
@RequestMapping("/api/products")
public class ProductController {
	
	
	
	
    @Autowired
    private ProductServiceImpl productService;
    
    
    
    @PostMapping("/add")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
    	
        Product p = productService.addProduct(product);
        
        return ResponseEntity.status(HttpStatus.CREATED).header("Add","Add Successfully").body(p);
    }

    
    
    
    
    
    @GetMapping("getAll")
    public ResponseEntity<List<Product>> getAllProducts() {
    	
        List<Product> list  = productService.getAllProducts();
        
        
        return ResponseEntity.status(HttpStatus.OK).header("add","add successfully").body(list);
    }
    
    
    
    
    
    @GetMapping("get/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
    	
        Product p = productService.getProductById(id).orElseThrow(() -> new RuntimeException("Product not found"));
        
        
        return ResponseEntity.status(HttpStatus.OK).header("add","add successfully").body(p);
    }
    
    
    
    
    
    
    
    
    @DeleteMapping("delete/{id}")
    public ResponseEntity<String> deleteProductById(@PathVariable Long id) {
    	
        boolean isDeleted =  productService.deleteProductById(id);
        
        if (isDeleted) {
            return ResponseEntity.ok("Product Deleted Successfully");
            
        } else {
        	
            return ResponseEntity.status(404).body("Product Not Found");
        }
    }
    
    
    
    
    
    
    

    @PutMapping("/update/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
    	
        return productService.updateProduct(id, product);
    }
    
    
    
    
    
}
