package com.bouassaba.receiptify.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

import com.bouassaba.receiptify.core.model.ProductWithSalesTax;

@Data
@NoArgsConstructor
public class ProductWithSalesTaxDTO {

  private ProductDTO product;
  private BigDecimal finalPrice = BigDecimal.ZERO;
  private BigDecimal salesTax = BigDecimal.ZERO;

  public ProductWithSalesTaxDTO(ProductWithSalesTax model) {
    this.product = new ProductDTO(model.getProduct());
    this.finalPrice = model.getFinalPrice();
    this.salesTax = model.getSalesTax();
  }
}
