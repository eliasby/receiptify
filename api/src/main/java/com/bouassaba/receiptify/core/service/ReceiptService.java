package com.bouassaba.receiptify.core.service;

import java.util.Optional;

import com.bouassaba.receiptify.core.model.CreateReceiptRequest;
import com.bouassaba.receiptify.core.model.Receipt;

public interface ReceiptService {

  Receipt create(CreateReceiptRequest request);

  void save(Receipt receipt);

  Optional<Receipt> getById(String id);
}
