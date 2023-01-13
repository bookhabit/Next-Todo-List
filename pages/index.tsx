import {GetServerSideProps, NextPage} from "next"
import styled from "styled-components";
import TodoList from "../components/TodoList";
import React from "react";
import  Axios  from "axios";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";

interface IPros{
    todos:TodoType[]
}


const index:NextPage<IPros> = ({todos})=>{
    return (        
            <TodoList todos={todos}/>
    )
}

export const getServerSideProps:GetServerSideProps = async ()=>{
    try{        
        const {data} = await getTodosAPI();
        return {props:{todos:data}}
    }catch(e){
        console.log(e);
        return {props:{}}
    }
}


export default index;