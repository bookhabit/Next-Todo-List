import {GetServerSideProps, NextPage} from "next"
import styled from "styled-components";
import TodoList from "../components/TodoList";
import React from "react";
import  Axios  from "axios";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";
import { wrapper } from "../store";
import { todoActions } from "../store/todo";

interface IPros{
    todos:TodoType[]
}


const index:NextPage<IPros> = ()=>{
    return (        
            <TodoList todos={[]}/>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    (store)=> async ()=>{
        try{        
            const {data} = await getTodosAPI();
            store.dispatch(todoActions.setTodo(data))
            return {props:{}}
        }catch(e){
            console.log(e);
            return {props:{}}
        }
    }
) 


export default index;