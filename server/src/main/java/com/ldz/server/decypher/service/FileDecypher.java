package com.ldz.server.decypher.service;

import java.io.ByteArrayInputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FileDecypher {

    private List<byte[]> nestedBytes = new ArrayList<>();

    public FileDecypher(List<byte[]> nestedBytes) {
        this.nestedBytes = nestedBytes;
    }

    public String decypherFile() {
        try {

            //bytes of retour rariot
            int retourChariotBytesNumber = 10;

            for (int i = 0; i < this.nestedBytes.size(); i++) {

                if (nestedBytes.get(i).length == 5000000 &&
                        nestedBytes.get(i)[nestedBytes.get(i).length - 1] != retourChariotBytesNumber) {

                    byte[] nextByteArray = nestedBytes.get(i + 1);
                    List<Byte> byteAccumulator = new ArrayList<>();
                    byte currentByte = nextByteArray[0];
                    while (currentByte != retourChariotBytesNumber) {
                        byteAccumulator.add(currentByte);
                        currentByte = nextByteArray[byteAccumulator.size()];
                    }

                }

                String[] splittedLine = new String(nestedBytes.get(0), "UTF-8").split("\\n");
                System.out.println("OK");
            }
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        return "";

    }
}
