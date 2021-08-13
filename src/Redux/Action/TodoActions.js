export const AddItem=(data)=>{
    return {
        type:'ADD_LIST',
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const DeleteItem=(id)=>{
    return {
        type:'DELETE_LIST',
        id:id
    }
}
export const removeList = () => {
  return {
    type: "REMOVE_LIST",
  };
};