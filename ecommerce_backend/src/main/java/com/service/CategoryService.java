package com.service;

import java.util.List;

import com.model.Category;

public interface CategoryService {
	
	
	  Category addCategory(Category category);

	    List<Category> getAllCategories();

}
