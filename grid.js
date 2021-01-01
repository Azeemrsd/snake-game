const GRID_SIZE = 31;

export const randomGripPosition = () =>{
     return {
         x: Math.floor(Math.random() * GRID_SIZE) +1, 
         y: Math.floor(Math.random() * GRID_SIZE) +1, 
     }
}
export function outSideGrid(position) {
    return (   position.x < 1 
            || position.x > GRID_SIZE 
            || position.y < 1 
            || position.y > GRID_SIZE)
}