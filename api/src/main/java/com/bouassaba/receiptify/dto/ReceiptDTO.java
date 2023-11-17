package com.bouassaba.receiptify.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;

import com.bouassaba.receiptify.core.model.CreateReceiptRequest;
import com.bouassaba.receiptify.core.model.Receipt;

@Data
@NoArgsConstructor
public class ReceiptDTO {

  private String id;
  private List<ProductWithSalesTaxDTO> products = Collections.emptyList();
  private BigDecimal salesTaxes = BigDecimal.ZERO;
  private BigDecimal total = BigDecimal.ZERO;
  private CreateReceiptRequest request;

  public ReceiptDTO(Receipt receipt) {
    this.id = receipt.getId();
    this.products = receipt.getProducts().stream().map(ProductWithSalesTaxDTO::new).toList();
    this.salesTaxes = receipt.getSalesTaxes();
    this.total = receipt.getTotal();
    this.request = receipt.getRequest();
  }
}
