package com.ldz.server.decypher.service;

import com.ldz.server.decypher.domain.CsvContainer;
import org.springframework.data.util.Pair;

import java.util.ArrayList;
import java.util.List;

public class CsvConverter {

    private char separator;
    private String[] lines;

    //<column name, class name>
    private List<Pair<String, String>> columnDefinitions;

    //File<Line<columnname, value>>
    private List<List<Pair<String, String>>> linesDefinitions;

    public CsvConverter(char separator, String[] lines) {
        this.separator = separator;
        this.lines = lines;
        this.columnDefinitions = new ArrayList<>();
        this.linesDefinitions = new ArrayList<>();
    }

    public CsvContainer processFile(){
        
        //determines header
        String[] headerColumns = null;
        for(int i = 0; i < lines.length; i++){
            headerColumns = lines[i].split("\\|");
            if(headerColumns != null && headerColumns.length > 1){
                for(int j = 0; j < headerColumns.length; j++){
                    headerColumns[j] = headerColumns[j].replaceAll(" ", "");
                }
                break;
            }
        }
        
        //TODO all types as string
        if(headerColumns != null){
            for (String column :
                    headerColumns) {
                this.columnDefinitions.add(Pair.of(column, "String"));
            }
        }

        for (String line :
                this.lines) {
            String[] splittedLine = line.replaceAll(" ", "").split("\\|");
            if(splittedLine != null && splittedLine.length != this.columnDefinitions.size()){
                List<Pair<String, String>> linePairList = new ArrayList();
                for(int i = 0; i < splittedLine.length; i++){
                    linePairList.add(Pair.of(columnDefinitions.get(i).getFirst(), splittedLine[i]));
                }
                this.linesDefinitions.add(linePairList);
            }
        }

        return new CsvContainer(this.columnDefinitions, this.linesDefinitions);

    }

    public String[] getLines() {
        return lines;
    }

    public List<Pair<String, String>> getColumnDefinitions() {
        return columnDefinitions;
    }
}
