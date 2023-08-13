import React from "react";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import {saveAs} from "file-saver"
// import generate from "../../userfls/othet.docx"
function GenerateDoc (){
    // const handleClick = async () => {
    //     // Определяем данные для заполнения шаблона
    //     const data = {
    //         "year" : 2020
    //     };
    //
    //     try {
    //         // Загружаем содержимое шаблона
    //         const templateContent = await fetch(generate).then((response) =>
    //             response.arrayBuffer()
    //         );
    //
    //         // Создаем экземпляр класса PizZip и загружаем содержимое шаблона
    //         const zip = new PizZip(templateContent);
    //
    //         // Создаем экземпляр класса Docxtemplater и передаем ему объект zip
    //         const doc = new Docxtemplater().loadZip(zip);
    //
    //         // Заполняем шаблон данными
    //         doc.setData(data);
    //
    //         // Генерируем заполненный документ Word
    //         doc.render();
    //
    //         // Получаем сгенерированный контент документа
    //         const generatedContent = doc.getZip().generate({
    //             type: "blob",
    //             mimeType:
    //                 "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    //         });
    //
    //         // Сохраняем документ в файле
    //         saveAs(generatedContent, "othet.doc");
    //     } catch (error) {
    //         console.error("Ошибка при загрузке шаблона:", error);
    //     }
    // };

    return (
       <div>
           <h1>Генерация DOCX документа</h1>
           {/*<button onClick={() => handleClick()}>*/}
           {/*    Скачать документ*/}
           {/*</button>*/}
       </div>
    );
}

export default GenerateDoc