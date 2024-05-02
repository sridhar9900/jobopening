function fetchJobListings() {
    // You can implement fetching job listings from an API here
    // For demonstration purpose, let's create a sample job listing
    const jobListings = [
        {
            title: "Software Engineer",
            company: "TechCorp Japan",
            location: "Tokyo",
            description: "Join our innovative team and work on cutting-edge projects in Tokyo."
        },
        {
            title: "Software Engineer, Associate",
            company: "Rakuten, Inc.",
            location: "Tokyo, Japan",
            description: "Rakuten is seeking a talented Software Engineer to join our dynamic team in Tokyo. The ideal candidate will have experience with Java, Spring Boot, and RESTful APIs. Responsibilities include designing and implementing scalable software solutions for our e-commerce platform."
        },
        {
            title: "C++ Developer",
            company: "Nintendo Co., Ltd.",
            location: "Kyoto, Japan",
            description: "Sony Interactive Entertainment seeks a talented UX/UI Designer to join our innovative team in Osaka. The ideal candidate will have a strong portfolio showcasing their expertise in user-centered design principles. Responsibilities include creating wireframes, prototypes, and pixel-perfect designs for PlayStation gaming experiences."
        },
        {
            title: "UX/UI Designer",
            company: "Sony Interactive Entertainment",
            location: "Osaka, Japan",
            description: "Sony Interactive Entertainment seeks a talented UX/UI Designer to join our innovative team in Osaka."
        },
        {
            title: "Cybersecurity Analyst",
            company: "Mitsubishi UFJ Financial Group (MUFG)",
            location: "Tokyo",
            description: "MUFG is hiring a Cybersecurity Analyst to bolster our defense against cyber threats in Tokyo."
        },
        {
            title: "Full Stack Developer",
            company: "Mercari, Inc.",
            location: "Kanagawa, Japan",
            description: "Mercari is seeking a Full Stack Developer to join our fast-paced team in Kanagawa. The role involves building scalable web applications using technologies such as JavaScript, React, and Node.js. Candidates should have a passion for creating user-friendly interfaces and optimizing performance."
        }
    ];

    const jobsSection = document.getElementById("jobs");

    jobListings.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
        `;
        jobsSection.appendChild(jobCard);
    });
}

fetchJobListings();
