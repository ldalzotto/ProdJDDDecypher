package com.ldz.server.decypher.domain;

import org.springframework.data.util.Pair;

import java.util.ArrayList;
import java.util.List;

public class CsvContainer {


    //<column name, class name>
    private List<Pair<String, String>> columnDefinitions;

    //File<Line<columnname, value>>
    private List<List<Pair<String, String>>> linesDefinitions;


    public CsvContainer(List<Pair<String, String>> columnDefinitions, List<List<Pair<String, String>>> linesDefinitions) {
        this.columnDefinitions = columnDefinitions;
        this.linesDefinitions = linesDefinitions;
    }

    public List<String> getAllColumnNames(){
        List<String> returnList = new ArrayList<>();
        for (Pair<String, String> stringStringPair :
                this.columnDefinitions) {
            returnList.add(stringStringPair.getFirst());
        }
        return returnList;
    }

    public List<List<Pair<String, String>>> getLinesDefinitions() {
        return linesDefinitions;
    }
}
