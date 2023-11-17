package com.bouassaba.receiptify.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bouassaba.receiptify.core.service.ReceiptService;
import com.bouassaba.receiptify.dto.CreateReceiptRequestDTO;
import com.bouassaba.receiptify.dto.ReceiptDTO;

@RestController
@RequestMapping(path = "receipts")
public class ReceiptController {

  @Autowired
  private ReceiptService receiptService;

  @PostMapping
  public ReceiptDTO create(@RequestBody CreateReceiptRequestDTO request) {
    var receipt = receiptService.create(request.toModel());
    receiptService.save(receipt);
    return new ReceiptDTO(receipt);
  }

  @GetMapping("/{id}")
  public ResponseEntity<ReceiptDTO> getById(@PathVariable String id) {
    var receipt = receiptService.getById(id);
    if (receipt.isPresent()) {
      return ResponseEntity.ok(new ReceiptDTO(receipt.get()));
    } else {
      return ResponseEntity.notFound().build();
    }
  }
}
