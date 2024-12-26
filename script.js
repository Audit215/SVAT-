// List of PDF files (this should be dynamically generated in a real application)
const pdfFiles = [
    'report1.pdf',
    'report2.pdf',
    'yearly-summary.pdf',
    'financial-report.pdf',
    'presentation.pdf'
];

// Function to display the list of PDFs
function displayPDFs(files) {
    const pdfList = document.getElementById('pdfList');
    pdfList.innerHTML = '';
    files.forEach(file => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `path/to/your/pdfs/${file}`;
        link.textContent = file;
        link.target = '_blank';
        listItem.appendChild(link);
        pdfList.appendChild(listItem);
    });
}

// Initial display of all PDFs
displayPDFs(pdfFiles);

// Search functionality
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredFiles = pdfFiles.filter(file => file.toLowerCase().includes(query));
    displayPDFs(filteredFiles);
});