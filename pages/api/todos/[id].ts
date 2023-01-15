import { NextApiRequest,NextApiResponse } from "next";
import { TodoType } from "../../../types/todo";
import Data from './../../../lib/data/index';

export default async (req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method==="PATCH"){
        try{
            const todoId = Number(req.query.id);
            const todo = Data.todo.exist({id:todoId});
            if(!todo){ // 일치하는 투두 아이템이 없다면
                res.statusCode = 404;
                res.end();
            } 
            const todos = await Data.todo.getList();
            const changedTodos = todos.map((todo)=>{
                if(todo.id===todoId){
                    return {...todo,checked : !todo.checked}
                }
                return todo;
            })
            Data.todo.write(changedTodos);
            res.statusCode = 200;
            return res.end()
        }catch(e){
            console.log(e)
            res.statusCode = 500;
            res.send(e)
        }
    }
    if(req.method==="DELETE"){
        try{
            const todoId = Number(req.query.id);
            const todo = Data.todo.exist({id:todoId});
            if(!todo){
                res.statusCode = 404;
                res.end()
            }
            
            const todos = Data.todo.getList();
            const filteredTodos = todos.filter((todo)=>todo.id !==todoId); // 쿼리로 받은 id랑 비교해서 filter처리
            Data.todo.write(filteredTodos);
            res.statusCode = 200;
            res.end();
        }catch(e){
            console.log(e);
            res.statusCode = 500;
            res.send(e)
        }
    }
    res.statusCode = 405;
    return res.end();
}