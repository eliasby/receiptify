package com.bouassaba.receiptify.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.bouassaba.receiptify.core.model.CreateReceiptRequest;
import com.bouassaba.receiptify.core.model.Product;
import com.bouassaba.receiptify.core.model.ProductWithSalesTax;
import com.bouassaba.receiptify.core.model.Tag;
import com.bouassaba.receiptify.core.service.ReceiptService;

import java.math.BigDecimal;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class ReceiptServiceTests {

  @Autowired
  private ReceiptService receiptService;

  @Test
  public void shouldCreateReceipt_WithInput1() {
    var products = List.of(
        Product.builder()
            .name("Book")
            .price(new BigDecimal("12.49"))
            .tags(List.of(Tag.BOOK))
            .build(),
        Product.builder()
            .name("Music CD")
            .price(new BigDecimal("14.99"))
            .build(),
        Product.builder()
            .name("Chocolate Bar")
            .price(new BigDecimal("0.85"))
            .tags(List.of(Tag.FOOD))
            .build());
    var receipt = receiptService.create(CreateReceiptRequest.builder().products(products).build());
    assertThat(receipt.getProducts().stream().map(ProductWithSalesTax::getProduct))
        .containsExactlyInAnyOrderElementsOf(products);
    assertThat(receipt.getSalesTaxes()).isEqualTo(new BigDecimal("1.50"));
    assertThat(receipt.getTotal()).isEqualTo(new BigDecimal("29.83"));
  }

  @Test
  public void shouldCreateReceipt_WithInput2() {
    var products = List.of(
        Product.builder()
            .name("Imported Box of Chocolates")
            .price(new BigDecimal("10.00"))
            .tags(List.of(Tag.FOOD, Tag.IMPORT))
            .build(),
        Product.builder()
            .name("Imported Bottle of Perfume")
            .price(new BigDecimal("47.50"))
            .tags(List.of(Tag.IMPORT))
            .build());
    var receipt = receiptService.create(CreateReceiptRequest.builder().products(products).build());
    assertThat(receipt.getProducts().stream().map(ProductWithSalesTax::getProduct))
        .containsExactlyInAnyOrderElementsOf(products);
    assertThat(receipt.getSalesTaxes()).isEqualTo(new BigDecimal("7.65"));
    assertThat(receipt.getTotal()).isEqualTo(new BigDecimal("65.15"));
  }

  @Test
  public void shouldCreateReceipt_WithInput3() {
    var products = List.of(
        Product.builder()
            .name("Imported Bottle of Perfume")
            .price(new BigDecimal("27.99"))
            .tags(List.of(Tag.IMPORT))
            .build(),
        Product.builder()
            .name("Bottle of Perfume")
            .price(new BigDecimal("18.99"))
            .build(),
        Product.builder()
            .name("Packet of Headache Pills")
            .price(new BigDecimal("9.75"))
            .tags(List.of(Tag.MEDICAL))
            .build(),
        Product.builder()
            .name("Imported Box of Chocolates")
            .price(new BigDecimal("11.25"))
            .tags(List.of(Tag.FOOD, Tag.IMPORT))
            .build());
    var receipt = receiptService.create(CreateReceiptRequest.builder().products(products).build());
    assertThat(receipt.getProducts().stream().map(ProductWithSalesTax::getProduct))
        .containsExactlyInAnyOrderElementsOf(products);
    assertThat(receipt.getSalesTaxes()).isEqualTo(new BigDecimal("6.70"));
    assertThat(receipt.getTotal()).isEqualTo(new BigDecimal("74.68"));
  }
}
