type MenuOptions = "" | "all" | "cats" | "dogs" | "fishes";


export const createMenuObject = (activeMenu: MenuOptions)=>{

    let objects = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    };

    if(activeMenu !== ""){
        objects[activeMenu] = true;

    }

    return objects;
}