package com.bouassaba.receiptify.dto;

import lombok.Data;

import java.util.Collections;
import java.util.List;

import com.bouassaba.receiptify.core.model.CreateReceiptRequest;

@Data
public class CreateReceiptRequestDTO {

  private List<ProductDTO> products = Collections.emptyList();

  public CreateReceiptRequest toModel() {
    return CreateReceiptRequest.builder()
        .products(products.stream().map(ProductDTO::toModel).toList())
        .build();
  }
}
