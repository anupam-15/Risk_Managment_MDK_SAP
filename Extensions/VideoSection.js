export default class VideoSection {
    constructor(context) {
        this.context = context;
    }

    view() {
        return {
            "Type": "Container",
            "Items": [
                {
                    "Type": "ObjectCell",
                    "Title": "Watch this video",
                    "Description": "SAP Risk Management overview"
                },
                {
                    "Type": "WebView",
                    "Url": "https://www.youtube.com/embed/dQw4w9WgXcQ",  // ✅ Embed URL!
                    "Height": 250
                }
            ]
        };
    }
}
