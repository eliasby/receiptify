package com.bouassaba.receiptify.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.bouassaba.receiptify.core.model.Product;
import com.bouassaba.receiptify.core.model.Tag;

@Data
@NoArgsConstructor
public class ProductDTO {

  private String id;
  private String name;
  private BigDecimal price = BigDecimal.ZERO;
  private int quantity = 1;
  private List<Tag> tags = new ArrayList<>();

  public ProductDTO(Product model) {
    id = model.getId();
    name = model.getName();
    price = model.getPrice();
    quantity = model.getQuantity();
    tags = model.getTags();
  }

  public Product toModel() {
    return Product.builder()
        .id(id)
        .name(name)
        .price(price)
        .quantity(quantity)
        .tags(tags)
        .build();
  }
}
