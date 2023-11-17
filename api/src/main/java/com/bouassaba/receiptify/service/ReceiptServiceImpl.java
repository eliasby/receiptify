package com.bouassaba.receiptify.service;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bouassaba.receiptify.core.model.CreateReceiptRequest;
import com.bouassaba.receiptify.core.model.ProductWithSalesTax;
import com.bouassaba.receiptify.core.model.Receipt;
import com.bouassaba.receiptify.core.repository.ReceiptRepository;
import com.bouassaba.receiptify.core.service.ReceiptService;
import com.bouassaba.receiptify.core.service.SalesTaxService;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class ReceiptServiceImpl implements ReceiptService {

  @Autowired
  private SalesTaxService salesTaxService;
  @Autowired
  private ReceiptRepository receiptRepository;

  @Override
  public Receipt create(CreateReceiptRequest request) {
    var productsWithSalesTaxes = new ArrayList<ProductWithSalesTax>();
    for (var product : request.getProducts()) {
      productsWithSalesTaxes.add(salesTaxService.applySalesTax(product));
    }

    var receipt = new Receipt();
    receipt.setId(new ObjectId().toHexString());
    receipt.setProducts(productsWithSalesTaxes);
    receipt.setTotal(productsWithSalesTaxes.stream()
        .map(ProductWithSalesTax::getFinalPrice)
        .reduce(BigDecimal.ZERO, BigDecimal::add));
    receipt.setSalesTaxes(productsWithSalesTaxes.stream()
        .map(ProductWithSalesTax::getSalesTax)
        .reduce(BigDecimal.ZERO, BigDecimal::add));
    receipt.setRequest(request);

    return receipt;
  }

  @Override
  public void save(Receipt receipt) {
    receiptRepository.insert(receipt);
  }

  @Override
  public Optional<Receipt> getById(String id) {
    return receiptRepository.findById(id);
  }
}
