package com.ldz.server.files.service;

import com.ldz.server.files.domain.InputFileBO;
import com.ldz.server.files.domain.PartedInputFileBO;
import com.ldz.server.files.repository.InputFilesRepository;
import com.ldz.server.files.repository.PartedInputFilesRepository;
import com.ldz.server.files.repository.entity.InputFile;
import com.ldz.server.files.repository.entity.PartedInputFile;
import com.ldz.server.files.repository.entity.PartedInputKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class FileSavingService {

    @Autowired
    private InputFilesRepository inputFilesRepository;

    @Autowired
    private PartedInputFilesRepository partedInputFilesRepository;

    public InputFileBO getFileByFileName(String fileName) {
        return this.getAllFilespartFromFilename(fileName);
    }

    public PartedInputFileBO getPartedFile(String filename, Integer partnb){
        PartedInputFile partedInputFile = this.partedInputFilesRepository.getByPartedInputKeyEquals
                (new PartedInputKey(filename, partnb));
        return new PartedInputFileBO(partedInputFile);
    }

    public void saveFile(byte[] content, String fileName, Integer part) {
        InputFile inputFile = new InputFile(fileName, part, new Date().getTime());
        this.inputFilesRepository.save(inputFile);

        PartedInputFile partedInputFile = new PartedInputFile(new PartedInputKey(fileName, part), content);
        this.partedInputFilesRepository.save(partedInputFile);
    }

    public Collection<String> getAllFileNames() {
        Collection<String> fileNames = new ArrayList<>();

        Iterator<InputFile> inputFileIterator = this.inputFilesRepository.findAll().iterator();
        while (inputFileIterator.hasNext()) {
            fileNames.add(new InputFileBO(inputFileIterator.next()).getFileName());
        }
        return fileNames;
    }

    private InputFileBO getAllFilespartFromFilename(String filename) {
        InputFile inputFile = this.inputFilesRepository.getInputFileByFileNameEquals(filename);
        InputFileBO inputFileBO = new InputFileBO(inputFile);

        Integer fileNb = inputFileBO.getFileNb();
        for (int i = 0; i <= fileNb; i++) {
            PartedInputFileBO partedInputFileBO = this.getPartedFile(filename, i);
                inputFileBO.getRawContents().add(partedInputFileBO.getRawContent());
        }
        return inputFileBO;
    }



}
