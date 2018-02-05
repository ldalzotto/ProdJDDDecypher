package com.ldz.server.files.repository.entity;

import com.ldz.server.files.domain.InputFileBO;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class PartedInputKey implements Serializable {

    public PartedInputKey(InputFileBO inputFileBO) {
        this.fileName = inputFileBO.getFileName();
        this.part = inputFileBO.getFileNb();
    }

    public PartedInputKey() {
    }

    public PartedInputKey(String fileName, Integer part) {
        this.fileName = fileName;
        this.part = part;
    }

    @Column(name = "FILE_NAME")
    private String fileName;

    @Column(name = "PART")
    private Integer part;

}
