package com.ldz.server.files.repository;

import com.ldz.server.files.repository.entity.PartedInputFile;
import com.ldz.server.files.repository.entity.PartedInputKey;
import org.springframework.data.repository.CrudRepository;

public interface PartedInputFilesRepository extends CrudRepository<PartedInputFile, PartedInputKey> {

    public PartedInputFile getByPartedInputKeyEquals(PartedInputKey partedInputKey);

}
