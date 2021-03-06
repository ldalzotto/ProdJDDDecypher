package com.ldz.server.decypher.service;

import com.ldz.server.files.domain.InputFileBO;
import com.ldz.server.files.domain.PartedInputFileBO;
import com.ldz.server.files.service.FileSavingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DecypherService {

    @Autowired
    private FileSavingService fileSavingService;

    public byte[] decypherFile(String fileName) {
        PartedInputFileBO partedInputFileBO = this.fileSavingService.getPartedFile(fileName, 0);
        return new FileDecypher(partedInputFileBO.getRawContent()).decypherFile();
    }

}
