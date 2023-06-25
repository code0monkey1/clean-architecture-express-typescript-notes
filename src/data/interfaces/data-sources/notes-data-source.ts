import { NoteRequestModel, NoteResponseModel } from "../../../domain/entities";

export interface NotesDataSource{
      create(note:NoteRequestModel):Promise<NoteResponseModel>
      
      getAll():Promise<NoteResponseModel[]>

      getOne(id:string):Promise<NoteResponseModel|null>

      deleteOne(id:string):Promise<NoteResponseModel>

      updateOne(id:string,data:Partial<NoteResponseModel>):Promise<NoteResponseModel>


}