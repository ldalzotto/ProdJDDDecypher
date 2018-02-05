import {SimpleFile} from '../objects/SimpleFile';
import {FileCypherDTO} from '../api/FileCypherDTO';
import {PartedSimpleFile} from "../objects/PartedSimpleFile";

export class PartedSimpleFileToDTO {

  public static convert(partedFile: PartedSimpleFile): FileCypherDTO {

    if (partedFile) {
      const filecypherDTO: FileCypherDTO =
        new FileCypherDTO(partedFile.getArrayBuffer(), partedFile.getFilename(),
            partedFile.part);
      return filecypherDTO;
    }

  }

}
