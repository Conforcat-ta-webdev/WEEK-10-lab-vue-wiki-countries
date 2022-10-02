<template>
      <div class="loader-wrapper">
        <div class="loader">
        </div>
        <p>Loading countries...</p>
      </div> 
    </template>
    
    
    <style scoped>
  
      p {
        font-size: 0.8em;
        font-weight: 300;
        margin-top: 5px;
        letter-spacing: 1px;
        color: rgb(82, 82, 82);
      }
    
      .loader-wrapper {
        text-align: center;
        margin-top: 30vh;
      }
    
      .loader {
        border: 16px solid #f3f3f3;
        border-top: 16px solid #3498db;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        width: 100px;
        height: 100px;
        animation: spin 1.5s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

    </style>