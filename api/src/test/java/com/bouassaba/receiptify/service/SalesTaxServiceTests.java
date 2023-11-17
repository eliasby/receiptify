package com.bouassaba.receiptify.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.bouassaba.receiptify.core.model.Product;
import com.bouassaba.receiptify.core.model.Tag;
import com.bouassaba.receiptify.core.service.SalesTaxService;

import java.math.BigDecimal;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class SalesTaxServiceTests {

  @Autowired
  SalesTaxService salesTaxService;

  @Test
  public void shouldApplySalesTaxOnProduct_WithInput1() {
    assertThat(this.salesTaxService.applySalesTax(
        Product.builder()
            .name("Book")
            .price(new BigDecimal("12.49"))
            .tags(List.of(Tag.BOOK))
            .build())
        .getFinalPrice())
        .isEqualTo(new BigDecimal("12.49"));
    assertThat(this.salesTaxService.applySalesTax(
        Product.builder()
            .name("Music CD")
            .price(new BigDecimal("14.99"))
            .build())
        .getFinalPrice())
        .isEqualTo(new BigDecimal("16.49"));
    assertThat(this.salesTaxService.applySalesTax(
        Product.builder()
            .name("Chocolate Bar")
            .price(new BigDecimal("0.85"))
            .tags(List.of(Tag.FOOD))
            .build())
        .getFinalPrice())
        .isEqualTo(new BigDecimal("0.85"));
  }

  @Test
  public void shouldApplySalesTaxOnProduct_WithInput2() {
    assertThat(this.salesTaxService.applySalesTax(
        Product.builder()
            .name("Imported Box of Chocolates")
            .price(new BigDecimal("10.00"))
            .tags(List.of(Tag.FOOD, Tag.IMPORT))
            .build())
        .getFinalPrice())
        .isEqualTo(new BigDecimal("10.50"));
    assertThat(this.salesTaxService.applySalesTax(
        Product.builder()
            .name("Imported Bottle of Perfume")
            .price(new BigDecimal("47.50"))
            .tags(List.of(Tag.IMPORT))
            .build())
        .getFinalPrice())
        .isEqualTo(new BigDecimal("54.65"));
  }

  @Test
  public void shouldApplySalesTaxOnProduct_WithInput3() {
    assertThat(this.salesTaxService.applySalesTax(
        Product.builder()
            .name("Imported Bottle of Perfume")
            .price(new BigDecimal("27.99"))
            .tags(List.of(Tag.IMPORT))
            .build())
        .getFinalPrice())
        .isEqualTo(new BigDecimal("32.19"));
    assertThat(this.salesTaxService.applySalesTax(
        Product.builder()
            .name("Bottle of Perfume")
            .price(new BigDecimal("18.99"))
            .build())
        .getFinalPrice())
        .isEqualTo(new BigDecimal("20.89"));
    assertThat(this.salesTaxService.applySalesTax(
        Product.builder()
            .name("Packet of Headache Pills")
            .price(new BigDecimal("9.75"))
            .tags(List.of(Tag.MEDICAL))
            .build())
        .getFinalPrice())
        .isEqualTo(new BigDecimal("9.75"));
    assertThat(this.salesTaxService.applySalesTax(
        Product.builder()
            .name("Imported Box of Chocolates")
            .price(new BigDecimal("11.25"))
            .tags(List.of(Tag.FOOD, Tag.IMPORT))
            .build())
        .getFinalPrice())
        .isEqualTo(new BigDecimal("11.85"));
  }
}
