package com.bouassaba.receiptify.service;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.bouassaba.receiptify.core.model.Receipt;
import com.bouassaba.receiptify.core.repository.ReceiptRepository;
import com.bouassaba.receiptify.service.ReceiptServiceImpl;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class ReceiptServiceImplTests {

  @Mock
  private ReceiptRepository receiptRepository;

  @InjectMocks
  ReceiptServiceImpl receiptServiceImpl;

  @Test
  public void shouldCallRepositoryMethodWhenSaving() {
    var receipt = new Receipt();
    receiptServiceImpl.save(receipt);
    verify(receiptRepository).insert(receipt);
  }

  @Test
  public void shouldCallRepositoryMethodWhenFetching() {
    var receipt = new Receipt();
    receipt.setId(new ObjectId().toHexString());

    when(receiptRepository.findById(receipt.getId())).thenReturn(Optional.of(receipt));

    var result = receiptServiceImpl.getById(receipt.getId());
    verify(receiptRepository).findById(receipt.getId());

    assertThat(result.isPresent());
    assertThat(result.get().getId()).isEqualTo(receipt.getId());
  }
}
