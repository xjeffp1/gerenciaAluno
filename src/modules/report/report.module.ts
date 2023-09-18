// estruturada basica de relátorio
interface ReportData{
    title: string;
    content: string;
    date: string;
}

function generateHTMLReport(data: ReportData): string {
    return '
        <html>
            <head>
                <title>${data.title}</title>
            </head>
            <body>
                <h1>${data.title}</h1>
                <p>Date: ${data.date}<p>
                <div>${DataTransfer.content}</div>
            </body>
            </html>
    ';
}

const htmlReport = generateHTMLReport(sampleReportData);
