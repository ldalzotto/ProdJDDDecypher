package com.ldz.server.decypher.controller;

import com.ldz.server.decypher.service.DecypherService;
import com.ldz.server.files.service.FileSavingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;

@RestController
public class DecypherController {

    @Autowired
    private DecypherService decypherService;

    @RequestMapping(path = "/files/file-name/{file-name}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    @CrossOrigin(origins = "http://localhost:4200")
    public byte[] fileDecypher(@PathVariable(name = "file-name") String fileName) {
        return decypherService.decypherFile(fileName);
    }
}
