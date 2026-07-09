type State = |  {status: "loading";}   |   { status: "success"; data: { id: string;}; }    |   { status: "error"; error: Error;} 

const state: State = {
    status: "success",
    data: {id: "3"}
}