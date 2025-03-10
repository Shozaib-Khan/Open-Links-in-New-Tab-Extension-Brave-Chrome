# Open Links in New Tab (Brave/Chrome Extension)

## 🚀 Overview
This browser extension automatically opens any clicked link in a **new tab** instead of the same page. Works on **Brave** and **Chrome** browsers.

## **NOTE** - The extension will only work when you open new tabs, it will not work in the already opened tabs while loading the extension. So, for better use, after enabling the extension, open new tabs. 

## 📌 Features
- Opens all links in a **new tab automatically**
- Simple and lightweight
- No permissions beyond required host access

## 🛠 Installation (Manual)
Since this extension is not yet published on the Chrome Web Store, you can install it manually:

1. **Download the ZIP** file.
2. **Extract the ZIP** to a folder on your computer.
3. Open **Brave** or **Chrome** and go to `brave://extensions/` or `chrome://extensions/`.
4. **Enable Developer Mode** (toggle in the top right).
5. Click **"Load unpacked"** and select the extracted folder.
6. The extension is now installed and active! 🎉

## 🔧 How It Works
1. `content.js` detects when a user clicks on a link.
2. The script **prevents the default behavior** and sends a message to `background.js`.
3. `background.js` listens for this message and **opens the link in a new tab** instead.

## 🌍 Compatibility
✅ **Brave**  
✅ **Google Chrome**  
⚠️ **Not tested on Edge/Firefox** (feel free to try and report issues!)

## 📜 License
This project is licensed under the **MIT License** – feel free to modify and distribute!

## 🙌 Contributing
Pull requests and suggestions are welcome! If you encounter issues, feel free to **open an issue** in the repository.

---
Made with ❤️ for a better browsing experience!
