import { useEffect, useState } from "react"
import UserCard from "./UserCard"
import axios from "axios"

const UserList = ()=>{
    const [listOfUSer , setlistOfUSer ] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((results)=>{
            setlistOfUSer(results.data)
        })
    }, [])
    return(
        <div className="grid grid-cols-3">
            {listOfUSer.map(user => <UserCard {...user}/> )}
        </div>
    )
}   

export default UserList