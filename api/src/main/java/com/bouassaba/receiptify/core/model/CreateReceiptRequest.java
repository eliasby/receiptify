package com.bouassaba.receiptify.core.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.Collections;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
public class CreateReceiptRequest {

  @Builder.Default
  private List<Product> products = Collections.emptyList();
}
