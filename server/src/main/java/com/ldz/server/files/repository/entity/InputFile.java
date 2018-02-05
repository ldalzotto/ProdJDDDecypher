package com.ldz.server.files.repository.entity;

import javax.persistence.*;

@Entity
@Table(name = "INPUT_FILES")
public class InputFile {

    public InputFile() {
    }

    public InputFile(String fileName, Integer partNb, Long timestamp) {
        this.fileName = fileName;
        this.partNb = partNb;
        this.timestamp = timestamp;
    }

    @Id
    @Column(name = "FILE_NAME")
    private String fileName;

    @Column(name = "PART_NB")
    private Integer partNb;

    @Column(name = "TIMSTAMP")
    private Long timestamp;


    public String getFileName() {
        return fileName;
    }

    public Integer getPartNb() {
        return partNb;
    }

    public Long getTimestamp() {
        return timestamp;
    }
}
