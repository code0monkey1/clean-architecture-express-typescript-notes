import { NoteRequestModel, NoteResponseModel } from "../../entities";

export interface UpdateNoteUseCase{
    
     execute(id:string,note:Partial<NoteRequestModel>):Promise<NoteResponseModel>
    
}