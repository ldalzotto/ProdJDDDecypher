package com.ldz.server.decypher.service;

import com.ldz.server.decypher.domain.CsvContainer;
import org.springframework.data.util.Pair;

import java.util.List;

public class CsvToCql {

    //TODO TABLE NAME
    //TODO KS
    private static final String BEGINNING_INSERT = "INSERT INTO TEST.TEST ( columnNames ) VALUES ( valueParam ); \n";

    private CsvContainer csvContainer;

    public CsvToCql(CsvContainer csvContainer) {
        this.csvContainer = csvContainer;
    }

    public byte[] convertCsvToCql(){
        StringBuilder globalRequest = new StringBuilder();
        String beginningRequest = this.buildBeginningRequest();

        for (List<Pair<String, String>> lineDefinition :
                this.csvContainer.getLinesDefinitions()) {
            String beginningRequestCopy = new String(beginningRequest);
            beginningRequestCopy = beginningRequestCopy.replace("valueParam", this.buildValueParam(lineDefinition));
            globalRequest.append(beginningRequestCopy);
        }
        
        return globalRequest.toString().getBytes();
    }

    private String buildValueParam(List<Pair<String, String>> lineDefinition){
        StringBuilder valueParam = new StringBuilder();
        for (Pair<String, String> columnDefinition :
                lineDefinition) {
            if(lineDefinition.indexOf(columnDefinition) != lineDefinition.size()-1){
                valueParam.append(columnDefinition.getSecond());
            }
        }
        return valueParam.toString();
    }

    private String buildBeginningRequest(){
        StringBuilder columnNames = new StringBuilder();
        List<String> columnNameList = this.csvContainer.getAllColumnNames();
        for (String columnName :
                columnNameList) {
            if(columnNameList.indexOf(columnName) != columnNameList.size()-1){
                columnNames.append(columnName).append(" , ");
            } else {
                columnNames.append(columnName);
            }
        }
        return BEGINNING_INSERT.replaceAll("columnNames", columnNames.toString());
    }
}
