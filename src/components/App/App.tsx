import React, {useCallback, useEffect, useRef, useState} from 'react';
import '../../assets/fonts/FontAwesome.css';
import styled from "styled-components";
import MenuContainer from './MenuContainer/MenuContainer';
import ContentWrapper from './ContentWrapper/ContentWrapper';

const Page = styled.div`
    display: grid;
    grid-template-columns: max-content  1fr;
    background-color: rgb(248,247,255);
    box-sizing: border-box;
`;


function useHookWithRefCallback() {
    //const ref = useRef(null);
    const [clickedOutside, setClickedOutside] = useState(false);
    const setRef = useCallback(node => {
       /* if (ref.current) {
            setClickedOutside(true);// Make sure to cleanup any events/references added to the last instance
        }*/
        if (node) {
            setClickedOutside(true);
            alert(clickedOutside);
        /*    document.addEventListener('mousedown', setClickedOutside);
            return () => document.removeEventListener('mousedown', setClickedOutside);*/
            // Check if a node is actually passed. Otherwise node would be null.
            // You can now do what you need to, addEventListeners, measure, etc.
        }

        // Save a reference to the node
     /*   ref.current = node*/
    }, []);

   return [setRef]
}



export const App = () => {
  const [setRef] = useHookWithRefCallback();
   /* const [clickedOutside, setClickedOutside] = useState(false);
    const myRef = useRef(null);

    const handleClickOutside = (e:any) => {
        if ( myRef.current && !myRef.current.contains(e.target)) {
            setClickedOutside(true);
        }
    };

    const handleClickInside = () => setClickedOutside(false);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });*/

  return (
    <Page className="App">
      <MenuContainer ref = {setRef}/>
      <ContentWrapper />
    </Page>
  );
};

