import express, { Request, Response } from "express";
import { CreateNoteUseCase } from '../../domain/interfaces/use-cases/create-note-use-case';
import { GetAllNotesUseCase } from "../../domain/interfaces/use-cases/get-all-notes-use-case";
import { UpdateNoteUseCase } from "../../domain/interfaces/use-cases/update-note-use-case";

export default function NotesRouter(
  getAllNotesUseCase:GetAllNotesUseCase,
  createNoteUseCase:CreateNoteUseCase,
  updateNoteUseCase:UpdateNoteUseCase){

    const router = express.Router()

     router.get('/',async(req:Request,res:Response)=>{
           
         try{
              const notes =await getAllNotesUseCase.execute()
              res.send(notes)
         }
         catch(e){
             res.status(500).send({ message: "Error fetching data" })
         }

     })

        router.post('/',async(req:Request,res:Response)=>{
           
         try{
              const notes =await createNoteUseCase.execute(req.body.data)
              res.status(201).send(notes)
         }
         catch(e){
            res.status(500).send({ message: "Error fetching data" })
         }

     })

    router.patch('/',async(req:Request,res:Response)=>{
           
         try{
              const notes =await updateNoteUseCase.execute(req.body.id,req.body.data)
              
              res.status(204).send(notes)
         }
         catch(e){
            res.status(500).send({ message: "Error fetching data" })
         }

     })

     return router;
}