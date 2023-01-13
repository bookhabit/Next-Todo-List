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
    res.statusCode = 405;
    return res.end();
}