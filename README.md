# SmartReport Generator 📝

An automated reporting system built with **Google Apps Script**.

## 🚀 Overview
SmartReport Generator streamlines the process of collecting and distributing reports through Google Forms. Once a leader submits the form, the script:

1. Generates a **beautifully formatted Google Doc** (with your logo and report details).  
2. Sends the document automatically to the leader’s **email** as a PDF.  
3. Stores a copy of the document in a **specified Google Drive folder** for easy record-keeping.  

## 🧩 Features
- 🧾 Auto-generated Google Docs with custom formatting  
- 📬 Automatic email delivery with attached PDF  
- ☁️ Drive integration – saves reports in a structured folder  
- 🎨 Custom branding – supports logos and organization themes  
- ⚙️ Easy to configure for any team or organization  

## 🛠️ Setup Instructions

1. Open [Google Apps Script](https://script.google.com/).
2. Create a new project and copy the code from this repository into your editor.
3. Update the following variables in your script:
   ```js
   const FOLDER_ID = "YOUR_FOLDER_ID";
   const LOGO_URL = "YOUR_LOGO_URL";
   const FORM_ID = "YOUR_FORM_ID";
```
