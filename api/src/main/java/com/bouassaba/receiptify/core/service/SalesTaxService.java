package com.bouassaba.receiptify.core.service;

import com.bouassaba.receiptify.core.model.Product;
import com.bouassaba.receiptify.core.model.ProductWithSalesTax;

public interface SalesTaxService {

  ProductWithSalesTax applySalesTax(Product product);
}
