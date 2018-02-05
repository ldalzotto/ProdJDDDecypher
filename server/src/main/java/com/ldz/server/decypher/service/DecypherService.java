package com.ldz.server.decypher.service;

import com.ldz.server.files.domain.InputFileBO;
import com.ldz.server.files.service.FileSavingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DecypherService {

    @Autowired
    private FileSavingService fileSavingService;

    public void decypherFile(String fileName) {
        InputFileBO inputFileBO = this.fileSavingService.getFileByFileName(fileName);
        new FileDecypher(inputFileBO.getRawContents()).decypherFile();
    }

}
