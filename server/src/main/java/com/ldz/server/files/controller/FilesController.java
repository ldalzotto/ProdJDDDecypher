package com.ldz.server.files.controller;

import com.ldz.server.files.service.FileSavingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.util.Collection;

@RestController
public class FilesController {

    @Autowired
    private FileSavingService fileSavingService;

    @RequestMapping(path = "/files/file-name/{file-name}/part/{part}",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    @CrossOrigin(origins = "http://localhost:4200")
    public void decypherFiles(
            @PathVariable(name = "file-name") String fileName,
            @PathVariable(name = "part") Integer part,
            @RequestBody byte[] fileCypheredBytes) {

        this.fileSavingService.saveFile(fileCypheredBytes, fileName, part);

        try {
            String decyphered = new String(fileCypheredBytes, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(path = "/files/all-file-names", method = RequestMethod.GET)
    public Collection<String> getAllFileNames() {
        return this.fileSavingService.getAllFileNames();
    }
}
