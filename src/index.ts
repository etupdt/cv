
class Download {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
}

class DownloadService {
    constructor() {
        let btn = document.getElementById("pdf");
        if (btn !== null) {
            btn.addEventListener("click", (e:Event) => this.downloadPdf());
        }
    }

    downloadPdf(): Promise<Download> {
        return fetch(`https://localhost:8080/parkings`)
            .then(res => res.json())
    }
}

const service: DownloadService = new DownloadService();
