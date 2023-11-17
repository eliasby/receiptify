package com.bouassaba.receiptify.service;

import org.springframework.stereotype.Service;

import com.bouassaba.receiptify.core.model.Product;
import com.bouassaba.receiptify.core.model.ProductWithSalesTax;
import com.bouassaba.receiptify.core.model.Tag;
import com.bouassaba.receiptify.core.service.SalesTaxService;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;

@Service
public class SalesTaxServiceImpl implements SalesTaxService {

  @Override
  public ProductWithSalesTax applySalesTax(Product product) {
    var salesTax = calculateSalesTax(product.getPrice(), product.getTags());
    return ProductWithSalesTax.builder()
        .product(product)
        .finalPrice(product.getPrice()
            .add(salesTax)
            .multiply(new BigDecimal(product.getQuantity())))
        .salesTax(salesTax)
        .build();
  }

  private BigDecimal calculateSalesTax(BigDecimal price, List<Tag> tags) {
    var salesTax = new BigDecimal(0);
    if (isBasicTaxApplicable(tags)) {
      salesTax = salesTax.add(calculateBasicTax(price));
    }
    if (isImportTaxApplicable(tags)) {
      salesTax = salesTax.add(calculateImportTax(price));
    }
    return salesTax;
  }

  private BigDecimal calculateBasicTax(BigDecimal price) {
    return round(price
        .multiply(new BigDecimal(10))
        .divide(new BigDecimal(100), RoundingMode.CEILING));
  }

  private BigDecimal calculateImportTax(BigDecimal price) {
    return round(price
        .multiply(new BigDecimal(5))
        .divide(new BigDecimal(100), RoundingMode.CEILING));
  }

  private BigDecimal round(BigDecimal value) {
    return value.setScale(2, RoundingMode.CEILING)
        .divide(new BigDecimal("0.05"), 0, RoundingMode.CEILING)
        .multiply(new BigDecimal("0.05"));
  }

  private boolean isBasicTaxApplicable(List<Tag> tags) {
    return tags.stream()
        .noneMatch(tag -> tag == Tag.BOOK || tag == Tag.MEDICAL || tag == Tag.FOOD);
  }

  private boolean isImportTaxApplicable(List<Tag> tags) {
    return tags.stream()
        .anyMatch(tag -> tag == Tag.IMPORT);
  }
}
