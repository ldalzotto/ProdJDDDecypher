import {FileBO} from '../objects/FileBO';
import {FileCypherDTO} from '../api/FileCypherDTO';

export class FileBOtoDTO {

  public static convert(fileBO: FileBO): FileCypherDTO {

    if (fileBO) {
      const filecypherDTO: FileCypherDTO = new FileCypherDTO(fileBO.fileAsBytes, fileBO.fileName, fileBO.part);
      return filecypherDTO;
    }

  }

}
