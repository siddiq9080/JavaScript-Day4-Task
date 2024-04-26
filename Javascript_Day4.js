//1. create your own resume data in JSON format

var resume = {
  "bascic":{
  "name": "Muhamad siddiq N",
  "title": "Full stack developer",
  },
  "contact": {
    "email": "muhamad@gmail.com",
    "phone": 9099099090,
    "DOB": "07-04-2000",
    "website": "www.muhamad.com",
    "location": "Krishnagiri,tamilNadu,India",
},

  "summary": "Entry level programmer",
  "Experience": [
    {
      "position": "Full stack developer",
      "comapany": "Guvi pvt Ltd",
      "experience": "Fresher",
      "startDate": "March 2024",
      "endDate": "sep-2024",
      "responsibilities": [
        "Developing and maintaining web applications using Html cssand javascript",
        "Collaborating with cross-functional teams to design and implement new features",
        "Optimizing application performance and scalability",
      ],
    },
  ],
  "education": [
    {
      "degree": "Bachelor of Computer Applications (BCA)",
      "university": "Bangalore University",
      "location": "Bangalore,Karnataka",
      "graduation year": "2023",
    },
  ],

  "skills": [
    {
      "category": "Programming Languages",
      "list": ["JavaScript", "Python"]
    },
    {
      "category": "Web Technologies",
      "list": ["HTML", "CSS", "React.js"]
    },
    {
      "category": "Tools",
      "list": ["Git", "VS Code"]
    }
  ],
  "language": ["English", "Tamil", "Hindi", "Kannada", "Urdu"],
  "interests": ["Hiking", "Photography", "Cooking"],
};
console.log(resume);

/////// ****************************************************************////////////////

//2.For the above JSON, iterate over all loops (for, for-in ,for-of,for-eaac)

//Iterate over the "contact" object using for loop

var contactKeys = Object.keys(resume.contact);

// Iterating over the keys using a for loop

for (var i = 0; i < contactKeys.length; i++) {
  var key = contactKeys[i];
  console.log(key + ":", resume.contact[key]);
}
// Iterate over the "Experience" object using a for-in-loop

for (var index in resume.Experience) {
  var experience = resume.Experience[index];
  console.log("Experience Details:");
  console.log("Position:", experience.position);
  console.log("Company:", experience.comapany);
  console.log("Experience:", experience.experience);
  console.log("Start Date:", experience.startDate);
  console.log("End Date:", experience.endDate);
  console.log("Responsibilities:");
  for (var i in experience.responsibilities) {
    console.log(" - " + experience.responsibilities[i]);
  }
}

//Iterate over the "Education" object using a for-of-loop

for (let edu of resume.education) {
  console.log("Degree:", edu.degree);
  console.log("University:", edu.university);
  console.log("Location:", edu.location);
  console.log("Graduation Year:", edu["graduation year"]);
}

// Iterate over the "Skills" object using ForEch loop

resume.skills.forEach(function (skillCategory) {
  console.log("Category:", skillCategory.category);
  console.log("Skills:");
  skillCategory.list.forEach(function (skill) {
    console.log(" -", skill);
  });
});
