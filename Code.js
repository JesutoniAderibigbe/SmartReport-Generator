function onFormSubmit(e) {
  var responses = e.values;
  var email = responses[11];
  var templateId = '1wdiruTnyux4IusqIAOkQMVdZ02npYvXHEsQ9lWVUWBg'; // Replace with your template doc ID
   var folderId = '1eWEgSXEQJja8a1ZS03SefmTTZLfivuNT'; 
  var copy = DriveApp.getFileById(templateId).makeCopy('Unit Report - ' + ' for Week' + responses[12] + ' by' + '' + responses[2]);

  // This is the corrected line - get folder by ID and add the file
  DriveApp.getFolderById(folderId).addFile(copy);
  
  // Remove the file from root folder to avoid duplication
  DriveApp.getRootFolder().removeFile(copy);
  var doc = DocumentApp.openById(copy.getId());
  var body = doc.getBody();

  // Replace placeholders
  body.replaceText('<<UnitHead>>', responses[1]);
  body.replaceText('<<UnitName>>', responses[2]);
  body.replaceText('<<NumMembers>>', responses[3]);
  body.replaceText('<<PresNumMembers>>', responses[13]);
  body.replaceText('<<PermAbs>>', responses[4]);
  body.replaceText('<<NonPermAbs>>', responses[5]);
  body.replaceText('<<Description>>', responses[6]);
  body.replaceText('<<UnitsServing>>', responses[7]);
  body.replaceText('<<StartTime>>', responses[8]);
  body.replaceText('<<EndTime>>', responses[9]);
  body.replaceText('<<PreponDate>>', responses[10]);
  body.replaceText('<<Week>>', responses[12]);

  doc.saveAndClose();


  // Optional: convert the document to PDF for emailing
  var pdf = DriveApp.getFileById(copy.getId()).getAs("application/pdf");

  // Send the email with the PDF attached
  MailApp.sendEmail({
    to: email,
    subject: "Your Weekly Unit Report Submission",
    body: `Hello ${responses[1]} ,\n\nThank you for submitting your weekly unit report. Please find a copy of your report attached.\n\nBest regards,\nGeneral Secretary, SCM UI!`,
    attachments: [pdf]
  });
}
