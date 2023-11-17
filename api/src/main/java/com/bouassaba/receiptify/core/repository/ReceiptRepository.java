package com.bouassaba.receiptify.core.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.bouassaba.receiptify.core.model.Receipt;

public interface ReceiptRepository extends MongoRepository<Receipt, String> {
}
