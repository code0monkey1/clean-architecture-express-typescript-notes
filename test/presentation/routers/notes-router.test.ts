import { NoteRequestModel, NoteResponseModel } from "../../../src/domain/entities";
import { CreateNoteUseCase } from "../../../src/domain/interfaces/use-cases/create-note-use-case";
import { GetAllNotesUseCase } from '../../../src/domain/interfaces/use-cases/get-all-notes-use-case';
import { UpdateNoteUseCase } from '../../../src/domain/interfaces/use-cases/update-note-use-case';

describe('Notes Router', () => {
     
     class MockCreateNoteUseCase implements CreateNoteUseCase{
       execute(note: NoteRequestModel): Promise<NoteResponseModel> {
         throw new Error("Method not implemented.");
       }
      
     }

     class MockUpdateNoteUseCase implements UpdateNoteUseCase{
       execute(id: string, note: Partial<NoteRequestModel>): Promise<NoteResponseModel> {
         throw new Error("Method not implemented.");
       }
      
     }

     class MockGetAllNotesUseCase implements GetAllNotesUseCase{
       execute(): Promise<NoteResponseModel[]> {
         throw new Error("Method not implemented.");
       }

      
     }

     beforeEach(()=>{

      jest.clearAllMocks()
      
      mockCreateNoteUseCase= new MockCreateNoteUseCase()
      mockGetAllNotesUseCase= new MockGetAllNotesUseCase()
      mockUpdateNoteUseCase = new MockUpdateNoteUseCase()

     } )
    
   let mockCreateNoteUseCase:CreateNoteUseCase
   let mockGetAllNotesUseCase:GetAllNotesUseCase
   let mockUpdateNoteUseCase :UpdateNoteUseCase
     
     describe('GET / note', () => {
      
        test('should return 200 with data',async()=>{
           
              const notes:NoteResponseModel[] = await mockGetAllNotesUseCase.execute()

              
               
        })
        
       
     })
     
})
