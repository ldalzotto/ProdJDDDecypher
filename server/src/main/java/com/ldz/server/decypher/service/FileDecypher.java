package com.ldz.server.decypher.service;

import com.ldz.server.decypher.domain.CsvContainer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.ByteArrayInputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FileDecypher {

    private static final Logger LOGGER = LoggerFactory.getLogger(FileDecypher.class);
    private static final int MAX_BYTES_SIZE = 5000000;
    private static final int RETOUR_CHARIOT_BYTES_NUMBER = 10;

    private byte[] nestedBytes;

    public FileDecypher(byte[] nestedBytes) {
        this.nestedBytes = nestedBytes;
    }

    public byte[] decypherFile() {
        try {

                String[] splittedLine = new String(nestedBytes, "UTF-8").split("\\n");
                CsvConverter csvConverter = new CsvConverter('|', splittedLine);
                CsvContainer csvContainer = csvConverter.processFile();
                return new CsvToCql(csvContainer).convertCsvToCql();

        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }

    }
}
