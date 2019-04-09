package com.example.WeatherDataAnalyzer.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
public class Station {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long station_id;

    String city;
    double latitude;
    double longitude;

    // OneToMany with Measurement
    @OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER, mappedBy = "station", orphanRemoval = true)
    private List<Measurement> measurements = new ArrayList<>();

    public Station() {

    }

    public Station(Long station_id, List<Measurement> measurements) {
        this.station_id = station_id;
        this.measurements = measurements;
    }

    public Long getStation_id() {
        return station_id;
    }

    public void setStation_id(Long station_id) {
        this.station_id = station_id;
    }

    public List<Measurement> getMeasurements() {
        return measurements;
    }

    public void setMeasurements(List<Measurement> measurements) {
        this.measurements = measurements;
    }
}