import {  writable } from "svelte/store";


export const treeStructure = writable({
    name: "ROOT",
    type: "Folder",
    expanded: false,
    children : []
});

export const updateTree = structure =>{
    treeStructure.set(structure);
}