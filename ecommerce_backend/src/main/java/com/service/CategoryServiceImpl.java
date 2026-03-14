package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dao.CategoryRepository;
import com.model.Category;

@Service
public class CategoryServiceImpl implements CategoryService {

	
	@Autowired
	private CategoryRepository categoryRepo;
	
	
	
	@Override
	public Category addCategory(Category category) {

		return categoryRepo.save(category);
	}
	
	
	

	@Override
	public List<Category> getAllCategories() {

		return categoryRepo.findAll();
	}

}
