package com.ldz.server.files.domain;

import com.ldz.server.files.repository.entity.InputFile;

import java.util.ArrayList;
import java.util.List;

public class InputFileBO {

    public InputFileBO(InputFile inputFile) {
        this.fileName = inputFile.getFileName();
        this.fileNb = inputFile.getPartNb();
        this.rawContents = new ArrayList<>();
    }

    public InputFileBO(String fileName) {
        this.fileName = fileName;
    }

    private String fileName;
    private Integer fileNb;
    private List<byte[]> rawContents;

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public Integer getFileNb() {
        return fileNb;
    }

    public List<byte[]> getRawContents() {
        return rawContents;
    }

    public void setRawContents(List<byte[]> rawContents) {
        this.rawContents = rawContents;
    }
}
