package com.example.WeatherDataAnalyzer.repository;

import com.example.WeatherDataAnalyzer.domain.Measurement;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeasurementRepository extends CrudRepository<Measurement, Long> {
}
