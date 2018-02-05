package com.ldz.server.files.domain;

public class FileCypheredDTO {

    /**
     * <p>Contenu du fichier encodé en base64</p>
     */
    private String fileContent;

    private String fileName;

    public FileCypheredDTO() {
    }

    public String getFileContent() {
        return fileContent;
    }

    public void setFileContent(String fileContent) {
        this.fileContent = fileContent;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
}
