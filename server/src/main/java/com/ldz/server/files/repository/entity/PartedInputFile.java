package com.ldz.server.files.repository.entity;

import javax.persistence.*;

@Entity
@Table(name = "PARTED_INPUT_FILE")
public class PartedInputFile {

    public PartedInputFile() {
    }

    public PartedInputFile(PartedInputKey partedInputKey, byte[] fileContent) {
        this.partedInputKey = partedInputKey;
        this.fileContent = fileContent;
    }

    @EmbeddedId
    private PartedInputKey partedInputKey;

    @Column(name = "FILE_CONTENT", length = Integer.MAX_VALUE)
    private byte[] fileContent;

    public byte[] getFileContent() {
        return fileContent;
    }

    public PartedInputKey getPartedInputKey() {
        return partedInputKey;
    }
}
