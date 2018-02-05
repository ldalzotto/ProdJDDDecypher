package com.ldz.server.files.repository;

import com.ldz.server.files.repository.entity.InputFile;
import org.springframework.data.repository.CrudRepository;

public interface InputFilesRepository extends CrudRepository<InputFile, String> {

    InputFile getInputFileByFileNameEquals(String filename);

}
