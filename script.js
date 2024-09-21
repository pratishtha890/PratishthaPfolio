let dayNight = document.querySelector('.dayNight');
let banner = document.querySelector('.banner');

// Toggle day/night mode
dayNight.addEventListener("click", () => {
    banner.classList.toggle("night");
});

// Typing effect
let typingEffect = new Typed('#text', {
    strings: ["Pratishtha Pant", "a Full stack web Application Developer"],
    loop: true,
    typeSpeed: 200,
    backSpeed: 50,
    backDelay: 1000
});

// Open GitHub in a new tab
function openInNewTab() {
    window.open('https://github.com/pratishtha890', '_blank');
}

// Content switch for Home and About
document.addEventListener('DOMContentLoaded', function () {
    const homeTab = document.getElementById('homeTab'); // Add a home tab in your HTML if needed
    const aboutTab = document.getElementById('aboutTab');
    const content = document.getElementById('mainContent');

    // Save the initial home content for later restoration
    const initialHomeContent = content.innerHTML;

    // Function to initialize modal event listeners
    function initializeModal() {
        // Get the modal
        const modal = document.getElementById("myModal");

        // Get the button that opens the modal
        const btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        const span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        if (btn) {
            btn.onclick = function () {
                modal.style.display = "block";
                console.log("button");
                typingEffect.stop();
            };
        }

        // When the user clicks on <span> (x), close the modal
        if (span) {
            span.onclick = function () {
                modal.style.display = "none";
                typingEffect.start();
            };
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                typingEffect.start();
            }
        };
    }

    // Event listener for About tab
    aboutTab.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Replace the content with the 'About Me' content
        content.innerHTML = `
           <!-- About Me Section -->
<div class="about-section">
    <h2>About Me</h2>
    <p>A passionate and adaptable web developer with a strong drive to learn on the go, embrace new challenges, 
    and continuously expand my skillset. 
    <br>
    <br>I’m not confined to what I already know, always open to exploring new technologies and solutions to deliver exceptional results and grow both personally and professionally.</p>
    <br>

    <div class="workex">
        <h2>Work Experience</h2>
        <ul class="experience-list">
            <li>
                <h4>Tata Consultancy Services</h4>
                <p><b>Duration: </b>August 2022- December 2022</p>
                <p><b>Details:</b> At TCS, I worked as a Systems Engineer, where I focused on improving backend processes by developing efficient server-side applications with .NET and C#. <br>One of my proudest achievements was optimizing database performance, which cut query times by 30%, making systems faster and more responsive. I also had the opportunity to mentor junior developers, which helped build a more collaborative and skilled team.</p>
            </li>
            <li>
                <h4>Accenture</h4>
                <p><b>Duration:</b> December 2019 - August 2022</p>
                <p><b>Details:</b> My role at Accenture as an Application Development Analyst revolved around building and refining system architectures. I played a key part in transitioning applications to a microservices model, which made systems more scalable and easier to maintain.<br> I also revamped user interfaces by migrating legacy applications to Angular, improving user experience by 40%. Additionally, I implemented Kubernetes for faster and more reliable deployments.</p>
            </li>
        </ul>
    </div>

    <div class="skills">
    <h2>Skills</h2>
    <div class="skills-grid">
        <div class="skill-group">
            <h4><i class="fas fa-code"></i> Programming Languages</h4>
            <ul class="skills-list">
                <li>Java</li>
                <li>HTML</li>
                 <li>JavaScript</li>
                  <li>Typescript</li>
                <li>C#</li>
                <li>C</li>
                <li>Python</li>
            </ul>
        </div>
        <div class="skill-group">
            <h4><i class="fas fa-cogs"></i> Frameworks</h4>
            <ul class="skills-list">
                <li>Angular</li>
                <li>React</li>
                <li>Spring Boot</li>
                <li>.NET</li>
                <li>Flask</li>
            </ul>
        </div>
        <div class="skill-group">
            <h4><i class="fas fa-database"></i> Databases</h4>
            <ul class="skills-list">
                <li>Microsoft SQL server</li>
                 <li>Oracle Database</li>
                <li>PostgreSQL</li>
             <li>MySQL</li>
            </ul>
        </div>
        <div class="skill-group">
            <h4><i class="fas fa-cloud"></i> Other Tools</h4>
            <ul class="skills-list">
             <li>Kubernetes</li>
                <li>AWS</li>
                <li>GitHub</li>
                <li>Azure DevOps</li>
            <li>Microservice Architecture</li>
                <li>Distributed Architecture</li>
               
                <li>Git</li>
                <li>Firebase</li>
                <li>RESTful API's</li>
                

            </ul>
        </div>
    </div>
</div>


    <div class="edu" style="margin-top: 40px;">
        <h2>Highest Level of Education</h2>
        <ul class="education-list">
            <li>
                <h4><i class="fas fa-university"></i> George Mason University</h4>
                <p>M.S. Computer Science</p>
            </li>
        </ul>
    </div>
</div>
        `;

        // Re-initialize modal functionality after content change
        initializeModal();
    });

    // Event listener for Home tab to restore the initial home content
    homeTab.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Restore the initial home content
        content.innerHTML = initialHomeContent;

        const existingCursor = document.querySelector('.typed-cursor');
        if (existingCursor) {
            existingCursor.remove();
        }

        // Re-initialize the typing effect after restoring the content
        new Typed('#text', {
            strings: ["Pratishtha Pant", "a Full stack web Application Developer"],
            loop: true,
            typeSpeed: 200,
            backSpeed: 50,
            backDelay: 1000
        });

        // Re-initialize modal functionality after restoring content
        initializeModal();
    });

    // Initialize modal functionality when the page is first loaded
    initializeModal();
});
