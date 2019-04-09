package com.example.WeatherDataAnalyzer.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Quantity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long quantity_id;

    String name;
    String description;

    // OneToMany with Measurement
    @OneToMany(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER, mappedBy = "quantity", orphanRemoval = true)
    private List<Measurement> measurements = new ArrayList<>();

    public Quantity() {

    }

    public Quantity(Long quantity_id, List<Measurement> measurements) {
        this.quantity_id = quantity_id;
        this.measurements = measurements;
    }

    public Long getQuantity_id() {
        return quantity_id;
    }

    public void setQuantity_id(Long quantity_id) {
        this.quantity_id = quantity_id;
    }

    public List<Measurement> getMeasurements() {
        return measurements;
    }

    public void setMeasurements(List<Measurement> measurements) {
        this.measurements = measurements;
    }
}
