package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin; // Importa CrossOrigin

import com.example.demo.service.CalculatorService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")  // Habilita CORS 
public class CalculatorController {

    private final CalculatorService calculatorService;

    @Autowired
    public CalculatorController(CalculatorService calculatorService) {
        this.calculatorService = calculatorService;
    }

    @GetMapping("/add")
    public double add(@RequestParam double num1, @RequestParam double num2) {
        return calculatorService.add(num1, num2);
    }

    @GetMapping("/subtract")
    public double subtract(@RequestParam double num1, @RequestParam double num2) {
        return calculatorService.subtract(num1, num2);
    }

    @GetMapping("/multiply")
    public double multiply(@RequestParam double num1, @RequestParam double num2) {
        return calculatorService.multiply(num1, num2);
    }

    @GetMapping("/divide")
    public double divide(@RequestParam double num1, @RequestParam double num2) {
        return calculatorService.divide(num1, num2);
    }
}
