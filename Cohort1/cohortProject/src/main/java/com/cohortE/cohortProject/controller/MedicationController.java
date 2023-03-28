package com.cohortE.cohortProject.controller;

import com.cohortE.cohortProject.dto.MedicationDto;
import com.cohortE.cohortProject.service.MedicationLogService;
import com.cohortE.cohortProject.service.MedicationService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class MedicationController {

    private final MedicationService medicationService;
    private final MedicationLogService medicationLogService;

    public MedicationController(MedicationService medicationService, MedicationLogService medicationLogService) {
        this.medicationService = medicationService;
        this.medicationLogService = medicationLogService;
    }

    @GetMapping("/medications")
    public String showMedicationList(Model model) {
        //model.addAttribute("medications", medicationService.getAllUserMedications());
        model.addAttribute("medicationLogs", medicationLogService.getDailyUsersMedicationLogs());
        return "medication/medication-list";
    }

    @GetMapping("/medications/new")
    public String showAddMedicationForm(Model model) {
        model.addAttribute("medication", new MedicationDto());
        return "medication/add-medication";
    }

    @GetMapping("/medications/{id}/delete")
    public String deleteMedication(@PathVariable Long id) {
        medicationService.deleteMedicationById(id);
        return "redirect:/medications";
    }

    @PostMapping("/medications/new")
    public String addMedication(MedicationDto medicationDto) {
        medicationService.addMedication(medicationDto);
        return "redirect:/medications";
    }

    @GetMapping("/medications/{id}/update/{reminderId}")
    public String showUpdateMedicationForm(@PathVariable("id") Long id, @PathVariable("reminderId") Long reminderId, Model model) {
        model.addAttribute("medication", medicationService.getMedicationWithReminder(id, reminderId));
        model.addAttribute("medicationId", id);
        model.addAttribute("reminderId", reminderId);
        return "medication/update-medication";
    }

    @PostMapping("/medications/{id}/update/{reminderId}")
    public String updateMedication(@PathVariable("id") Long id, @PathVariable("reminderId") Long reminderId, @RequestBody MedicationDto medicationDto) {
        return "redirect:/medications";
    }

    @GetMapping("/medications/{logId}/status")
    public String takeMedication(@PathVariable("logId") Long id) {
        medicationLogService.updateTakenStatus(id);
        return "redirect:/medications";
    }

}
