package com.example.WeatherDataAnalyzer.repository;

import com.example.WeatherDataAnalyzer.domain.Quantity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuantityRepository extends CrudRepository<Quantity, Long> {
}
