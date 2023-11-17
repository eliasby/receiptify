package com.bouassaba.receiptify.core.model;

import lombok.Builder;
import lombok.Getter;

import java.math.BigDecimal;

@Getter
@Builder
public class ProductWithSalesTax {

  private Product product;
  @Builder.Default
  private BigDecimal finalPrice = BigDecimal.ZERO;
  @Builder.Default
  private BigDecimal salesTax = BigDecimal.ZERO;
}
