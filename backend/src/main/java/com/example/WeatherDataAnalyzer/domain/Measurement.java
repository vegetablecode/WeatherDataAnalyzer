package com.example.WeatherDataAnalyzer.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Measurement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long measurement_id;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyy HH:mm")
    Date datetime;
    double value;

    // ManyToOne with Station
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Station station;

    // ManyToOne with Quantity
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Quantity quantity;

    public Measurement() {

    }

    public Measurement(Long measurement_id, Station station, Quantity quantity) {
        this.measurement_id = measurement_id;
        this.station = station;
        this.quantity = quantity;
    }

    public Long getMeasurement_id() {
        return measurement_id;
    }

    public void setMeasurement_id(Long measurement_id) {
        this.measurement_id = measurement_id;
    }

    public Station getStation() {
        return station;
    }

    public void setStation(Station station) {
        this.station = station;
    }

    public Quantity getQuantity() {
        return quantity;
    }

    public void setQuantity(Quantity quantity) {
        this.quantity = quantity;
    }
}
