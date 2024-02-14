import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    // Create a dummy file content (e.g., a string)
    const dummyFileContent = "This is a dummy file content.";

    // Create a Blob object from the content
    const blob = new Blob([dummyFileContent], { type: "text/plain" });

    // Create a URL for the Blob
    const blobURL = URL.createObjectURL(blob);

    // Create a link element
    const a = document.createElement("a");
    a.href = blobURL;
    a.download = "dummyFile.txt"; // Set the desired file name

    // Append the link to the body and trigger the click event
    document.body.appendChild(a);
    a.click();

    // Clean up by revoking the Blob URL
    URL.revokeObjectURL(blobURL);
  };
  handleDownload();


};

export default DownloadButton;
