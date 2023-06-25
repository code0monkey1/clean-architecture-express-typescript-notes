import { NotesDataSource } from '../../data/interfaces/data-sources/notes-data-source';
import { NoteRequestModel, NoteResponseModel } from '../entities';
import { NotesRepository } from '../interfaces/repositories/notes-repository';
export default class NotesRepositoryImpl implements NotesRepository{

  constructor(private readonly notesDataSource:NotesDataSource){}
  
  async getNotes(): Promise<NoteResponseModel[]> {

    const savedNotes = await this.notesDataSource.getAll()

    return savedNotes;
  }
  
  async createNote(note: NoteRequestModel): Promise<NoteResponseModel> {
    const createdNote = await this.notesDataSource.create(note)
    return createdNote;
  }
  
  async deleteNote(id: string): Promise<NoteResponseModel> {
    
    const deletedNote = await this.notesDataSource.deleteOne(id)

    return deletedNote;
  }
  
  async updateNote(id: string, note: Partial<NoteRequestModel>): Promise<NoteResponseModel> {

    const updatedNote = await this.notesDataSource.updateOne(id,note)

    return updatedNote
  }
  
}