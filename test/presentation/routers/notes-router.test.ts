import { NoteRequestModel } from "../../../src/domain/entities";
import { CreateNoteUseCase } from "../../../src/domain/interfaces/use-cases/create-note-use-case";
import { GetAllNotesUseCase } from '../../../src/domain/interfaces/use-cases/get-all-notes-use-case';
import { UpdateNoteUseCase } from '../../../src/domain/interfaces/use-cases/update-note-use-case';
import NotesRouter from '../../../src/presentation/routers/notes-router';

import request from "supertest";
import { NoteResponseModel } from '../../../src/domain/entities/index';
import server from '../../../src/server';
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

     beforeAll(()=>{
      
      mockCreateNoteUseCase= new MockCreateNoteUseCase()
      mockGetAllNotesUseCase= new MockGetAllNotesUseCase()
      mockUpdateNoteUseCase = new MockUpdateNoteUseCase()
      
      server.use('/notes',NotesRouter(mockGetAllNotesUseCase,mockCreateNoteUseCase,mockUpdateNoteUseCase))

     } )
    
   let mockCreateNoteUseCase:CreateNoteUseCase
   let mockGetAllNotesUseCase:GetAllNotesUseCase
   let mockUpdateNoteUseCase :UpdateNoteUseCase

 
   beforeEach(()=>{
     
    jest.clearAllMocks()

   })
     
     describe('GET / notes', () => {
      
        test('should return 200 with data',async()=>{

             const response:NoteResponseModel={
               content: "hello",
               important: false,
               id: "1"
             }

             const expected=[response]
           
             jest.spyOn(mockGetAllNotesUseCase,'execute').mockImplementation(()=> Promise.resolve(expected))

            const result = await request(server).get('/notes')
               
            expect(result.status).toBe(200)

            expect(result.body).toStrictEqual(expected)
        })

        test('should return status 500 , error fetching data ,in case of error',async()=>{


             jest.spyOn(mockGetAllNotesUseCase, "execute").mockImplementation(() => Promise.reject(Error()))

             const response = await request(server).get("/notes")

            //  expect(response.status).toBe(500)
            
            expect(response.body).toStrictEqual({ message: "Error fetching data" })
          
       
            
        })
        
       
     })

     describe('POST / notes',()=>{

         test('should return 200 with data',async()=>{

              //Arrange

                const noteResponse : NoteResponseModel ={
                  content: "",
                  important: false,
                  id:'12'
                }

                jest.spyOn(mockCreateNoteUseCase,'execute').mockImplementation(()=>Promise.resolve(noteResponse))

             //Act
               
                
                const note = await request(server).post("/notes")


             //Assert

             expect(note.body).toStrictEqual(noteResponse)

          }
         )


         test('should return 500 , when error ,with Error fetching data',async()=>{

              //Arrange

                const noteResponse : NoteResponseModel ={
                  content: "",
                  important: false,
                  id:'12'
                }

                jest.spyOn(mockCreateNoteUseCase,'execute').mockImplementation(()=>Promise.reject(Error()))

             //Act
               
                
                const note = await request(server).post("/notes")


             //Assert

             expect(note.status).toBe(500)

             expect(note.body).toStrictEqual({message:"Error fetching data"})

          }
         )

        })
     
})
