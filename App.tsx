import{ScreenPagina1, ScreenPagina2} from "./src/screens"
import { Dispatch, SetStateAction, useState } from 'react';
export interface IPage {
  setPageI: Dispatch<SetStateAction<number>>
  pagenumber: number

}
export default function App() {
  const [page, setPage] =useState(1)
  return (
    <>
    {page == 1 ? 
    <ScreenPagina1 setPageI={setPage} pagenumber={2} /> : 
    <ScreenPagina2 setPageI={setPage} pagenumber={1} />}
    </>
  );
}