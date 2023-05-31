<svelte:options tag="my-login-page" />

<script>
  import { onMount } from "svelte";
  import { get } from 'svelte/store'
  import {treeStructure, updateTree } from './store.js'
  export let username = '';
  export let isLoggedIn = false;
  export let updatedTreeData = () =>{};
  export let treeData;
  $: {
    treeData = $treeStructure
  }

  updatedTreeData = updateTree;
  
  onMount(function() {
    const loggedInUser = localStorage.getItem('LoggedInUser');
    if(loggedInUser){
      username = loggedInUser;
      isLoggedIn = true;
    }
  })

  function onLogout() {
    isLoggedIn = false;
    localStorage.setItem('LoggedInUser', '');
  }

  function onSubmit() {
    isLoggedIn = true;
    localStorage.setItem('LoggedInUser', username);
  }
</script>
{#if !isLoggedIn}


<div class="container">
  <h2>Login</h2>
  <form>
    <div class="form-group">
      <label for="username">Username:</label>
      <input type="text" id="username" bind:value={username} name="username" placeholder="Enter your username">
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="Enter your password">
    </div>
    <div class="form-group">
      <button type="submit" on:click={onSubmit}>Login</button>
    </div>
  </form>
</div>
{/if}

{#if isLoggedIn}
  <my-tree-web-component 
    tree_data = {treeData}
    on_logout = {onLogout}
    update_file_structure = {updatedTreeData}
    user_name = {username }
  />
{/if}
<style>
  .container {
      width: 300px;
      margin: 0 auto;
      margin-top: 100px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f2f2f2;
    }

    h2 {
      text-align: center;
    }

    .form-group {
      margin-bottom: 10px;
    }

    .form-group label {
      display: block;
      margin-bottom: 5px;
    }

    .form-group input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    .form-group button {
      width: 100%;
      padding: 8px;
      border: none;
      border-radius: 3px;
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
    }

    .form-group button:hover {
      background-color: #45a049;
    }
</style>