package com.bouassaba.receiptify.core.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;

import org.bson.types.ObjectId;

@Getter
@Builder
@AllArgsConstructor
public class Product {

  @Builder.Default
  private String id = new ObjectId().toHexString();
  private String name;
  @Builder.Default
  private BigDecimal price = BigDecimal.ZERO;
  @Builder.Default
  private int quantity = 1;
  @Builder.Default
  private List<Tag> tags = Collections.emptyList();
}
