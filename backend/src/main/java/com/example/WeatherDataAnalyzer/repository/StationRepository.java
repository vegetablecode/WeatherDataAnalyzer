package com.example.WeatherDataAnalyzer.repository;

import com.example.WeatherDataAnalyzer.domain.Station;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StationRepository extends CrudRepository<Station, Long> {
}
