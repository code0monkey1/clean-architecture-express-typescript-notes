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
         }

     })
}