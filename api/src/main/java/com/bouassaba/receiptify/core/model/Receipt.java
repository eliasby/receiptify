package com.bouassaba.receiptify.core.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;

@Data
@Document(collection = "receipt")
public class Receipt {

  @Id
  private String id;
  private List<ProductWithSalesTax> products = Collections.emptyList();
  private BigDecimal salesTaxes = BigDecimal.ZERO;
  private BigDecimal total = BigDecimal.ZERO;
  private CreateReceiptRequest request;
}
