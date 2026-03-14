package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Category;
import com.service.CategoryService;



@RestController
@RequestMapping("/api/category")
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {
	
	
	
	@Autowired
	private CategoryService service;
	
	
	
	   @PostMapping("/add")
	    public Category addCategory(@RequestBody Category category) {
		   
		   
		   return service.addCategory(category);
	   }
	
	
	
	   @GetMapping("/all")
	    public List<Category> getAllCategory() {
		   
		   return service.getAllCategories();
	   }
	

}
