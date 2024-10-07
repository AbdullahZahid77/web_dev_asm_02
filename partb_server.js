// partb_server.js

const express = require('express');
const fs = require('fs'); // Import fs module
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Create a POST route
app.post('/profile', (req, res) => {
  const {
    personalInfo,
    skills,
    softSkills,
    education,
    certifications,
    projects,
    socialMediaLinks,
    youtubeVideo
  } = req.body;

  // Check if any required field is missing
  if (!personalInfo || !personalInfo.name || !personalInfo.role ||
      !skills || !Array.isArray(skills) || skills.length === 0 ||
      !softSkills || !Array.isArray(softSkills) || softSkills.length === 0 ||
      !education || !Array.isArray(education) || education.length === 0 ||
      !certifications || !Array.isArray(certifications) || certifications.length === 0 ||
      !projects || !Array.isArray(projects) || projects.length === 0 ||
      !socialMediaLinks || !socialMediaLinks.linkedin || !socialMediaLinks.github ||
      !youtubeVideo) {
    return res.status(400).json({ error: 'Missing required fields. Please provide personalInfo, skills, softSkills, education, certifications, projects, socialMediaLinks, and youtubeVideo.' });
  }

  // Prepare the data to be saved
  const newProfile = {
    personalInfo,
    skills,
    softSkills,
    education,
    certifications,
    projects,
    socialMediaLinks,
    youtubeVideo
  };

  // Read existing data from profiles.json (if it exists)
  fs.readFile('profiles.json', 'utf8', (err, data) => {
    let profiles = [];
    
    if (!err) {
      // If the file exists and is not empty, parse the existing profiles
      profiles = JSON.parse(data);
    }

    // Append the new profile to the existing profiles
    profiles.push(newProfile);

    // Write the updated profiles back to the file
    fs.writeFile('profiles.json', JSON.stringify(profiles, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to save the profile.' });
      }

      // If everything is successful, return the response
      res.status(200).json({
        message: 'Profile received and saved successfully',
        data: newProfile
      });
    });
  });
});

// Start server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
