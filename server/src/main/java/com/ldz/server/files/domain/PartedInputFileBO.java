package com.ldz.server.files.domain;

import com.ldz.server.files.repository.entity.PartedInputFile;
import com.ldz.server.files.repository.entity.PartedInputKey;

public class PartedInputFileBO {


    private String fileName;
    private Integer fileNb;
    private byte[] rawContent;

    public PartedInputFileBO(String fileName, Integer fileNb, byte[] rawContent) {
        this.fileName = fileName;
        this.fileNb = fileNb;
        this.rawContent = rawContent;
    }

    public PartedInputFileBO(PartedInputFile partedInputFile) {
      if(partedInputFile!=null && partedInputFile.getPartedInputKey() != null){
          PartedInputKey partedInputKey = partedInputFile.getPartedInputKey();
          this.fileName = partedInputKey.getFileName();
          this.fileNb = partedInputKey.getPart();

          this.rawContent = partedInputFile.getFileContent();
      }
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public Integer getFileNb() {
        return fileNb;
    }

    public void setFileNb(Integer fileNb) {
        this.fileNb = fileNb;
    }

    public byte[] getRawContent() {
        return rawContent;
    }

    public void setRawContent(byte[] rawContent) {
        this.rawContent = rawContent;
    }
}
