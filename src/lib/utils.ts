/**
 * Normalizes Google Drive links to direct image links
 */
export const normalizeDriveUrl = (url: string): string => {
  if (!url) return url;
  
  // Regex for various Google Drive link formats
  // Matches:
  // - https://drive.google.com/file/d/ID/view
  // - https://drive.google.com/open?id=ID
  // - https://drive.google.com/uc?id=ID
  // - https://lh3.googleusercontent.com/d/ID
  const driveIdRegex = /(?:https?:\/\/)?(?:drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?id=)|lh3\.googleusercontent\.com\/d\/)([\w-]+)/;
  const match = url.match(driveIdRegex);
  
  if (match && match[1]) {
    // Return the lh3.googleusercontent.com format which is more reliable for images
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  
  return url;
};
