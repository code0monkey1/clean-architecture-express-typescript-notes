import { NoteResponseModel } from "../../entities";

export interface GetAllNotesUseCase{
   
    execute():Promise<NoteResponseModel[]>

}