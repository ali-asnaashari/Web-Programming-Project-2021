pdfjsLib.getDocument('./book.pdf').then(doc => {
    console.log("this file has " + doc._pdfInfo.numPages + "pages");
    doc.getPage(1).then(page => {
        const myCanvas = document.getElementById("my_canvas");
        let context = myCanvas.getContext("2d");
        /** size of page ---> blow code means original size of the page */
        const viewport = page.getViewport(1);
        /** resize our canvas */
        myCanvas.width = viewport.width;
        myCanvas.height = viewport.height;

        page.render({
            CanvasContext: context,
            viewport:viewport
        });
    });

});
