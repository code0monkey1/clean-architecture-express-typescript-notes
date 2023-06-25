import { NoteRequestModel, NoteResponseModel } from "../../../../src/domain/entities";
import { NotesRepository } from "../../../../src/domain/interfaces/repositories/notes-repository";
import UpdateNote from '../../../../src/domain/use-cases/notes/UpdateNote';

describe('Update Note Use Case', () => {
   
    class MockNotesRepository implements NotesRepository{
      getNotes(): Promise<NoteResponseModel[]> {
        throw new Error("Method not implemented.")
      }
      createNote(note: NoteRequestModel): Promise<NoteResponseModel> {
        throw new Error("Method not implemented.")
      }
      deleteNote(id: string): Promise<NoteResponseModel> {
        throw new Error("Method not implemented.")
      }
      updateNote(id: string, note: Partial<NoteRequestModel>): Promise<NoteResponseModel> {
        throw new Error("Method not implemented.")
      }
      
    }

    let mockNotesRepository:NotesRepository

    beforeEach(()=>{
       
        jest.clearAllMocks()

        mockNotesRepository= new MockNotesRepository()

    })


  it('updates a note , with a given id',async()=>{

             //Arrange
             const id='1'
             
             const updatedNote:NoteResponseModel={
               content: "",
               important: false,
               id: "1"
             }

            jest.spyOn(mockNotesRepository,'updateNote').mockImplementation(()=>Promise.resolve(updatedNote))

            const updateNote = new UpdateNote(mockNotesRepository)

             //Act
             const result= await updateNote.execute(id,updatedNote)

  
             //Assert
             expect(result).toBe(updatedNote)
             expect(mockNotesRepository.updateNote).toHaveBeenCalledTimes(1)
  })
  
})
