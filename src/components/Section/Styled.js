import styled from 'styled-components';
 export const StyledContainer = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;

   .title {
     display: flex;
     margin: 15px 0;
     justify-content: center;
   }

   .buttons-list {
     display: flex;
     justify-content: center;
     gap: 10px
   }

   .button {
     width: 80px;
     background: transparent;
     border-radius: 5px;
     border: 2px solid #646363;
     color: #0c0303;
     padding: 0.25em 1em;
     font-size: 14px;
   }

   .good-button:hover {
     border: 2px solid #59ff21;
   }

   .good-button:active {
     background: #aef8ac;
   }

   .neutral-button:hover {
     border: 2px solid #e7c913;
   }

   .neutral-button:active {
     background: #f8f2ac;
   }

   .bad-button:hover {
     border: 2px solid #f80707;
   }

   .bad-button:active {
     background: #ee6767;
   }
   .statistics-list {
     margin: 0;
     list-style: none;
     display: flex;
     flex-direction: column;
     gap: 15px;
     font-size: 16px;
   }

 `
