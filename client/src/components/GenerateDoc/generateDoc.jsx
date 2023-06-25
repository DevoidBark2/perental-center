import React, {useState} from "react";
import styles from "./generateDoc.module.css";
import { Page, Document} from 'react-pdf';
function GenerateDoc (){
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);
    //
    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }

    return (
        <div>
            {/*<Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>*/}
            {/*    <Page pageNumber={pageNumber} />*/}
            {/*</Document>*/}
            {/*<p>*/}
            {/*    Page {pageNumber} of {numPages}*/}
            {/*</p>*/}
        </div>
    );
}

export default GenerateDoc