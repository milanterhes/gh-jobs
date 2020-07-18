import React from 'react';
import ago from 's-ago';
import { 
    JobsCardDiv,
    JobsCardImg,
    Wrapper,
    LeftSide,
    JobsCardCompany,
    JobsCardRole,
    JobsCardType,
    RightSide,
    JobsCardLocation,
    JobsCardCreated,
    ListComp 
} from './JobsListComps'

type JobsCardProps = {
    company: string,
    title: string,
    type?: string,
    location: string,
    created_at: string
}

const jobs = [{
	"id": "cd535970-ec11-11e8-89ae-2e904411ec0e",
	"type": "Full Time",
	"url": "https://jobs.github.com/positions/cd535970-ec11-11e8-89ae-2e904411ec0e",
	"created_at": "Mon Nov 19 15:44:44 UTC 2018",
	"company": "Aon Cyber Solutions",
	"company_url": "http://www.strozfriedberg.com/careers",
	"location": "NY or LA",
	"title": "Cybersecurity Firm Seeks Senior Developer",
	"description": "\u003cp\u003eAon Cyber Solutions is looking for a Senior Developer in NY or LA. As part of an industry-leading team, you will help empower results for our clients by delivering innovative and effective solutions supporting Risk.\u003c/p\u003e\n\u003cp\u003eAPPLY HERE: \u003ca href=\"https://us-strozfriedberg-aon.icims.com/jobs/24315/senior-developer/job\"\u003ehttps://us-strozfriedberg-aon.icims.com/jobs/24315/senior-developer/job\u003c/a\u003e\u003c/p\u003e\n\u003cp\u003ePosition Overview\nJoin our expert software development team to create new customer-facing web applications. You will apply your expertise in web development and user interface design, working in concert with subject matter experts in digital forensics, incident response, cybersecurity, and threat intelligence. Your applications will convey deeply technical facts and analyses to a variety of consumers, from risk managers to subject matter experts to C-level executives.\u003c/p\u003e\n\u003cp\u003eThe responsibilities of this position include but are not limited to the following:\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eDesign and develop pioneering web applications that cross the boundaries of security assessment, digital forensics, incident response, malware analysis, cybersecurity, and cyberinsurance.\u003c/li\u003e\n\u003cli\u003eServe as a senior developer on multiple product teams.\u003c/li\u003e\n\u003cli\u003eCreate user interfaces, APIs, data visualizations, and reports that provide our clients with insight into complex narratives and data sets.\u003c/li\u003e\n\u003cli\u003eTranslate high-level requirements into working prototypes to generate user feedback and discussion.\u003c/li\u003e\n\u003cli\u003eAdapt and apply cutting edge computer science to highly technical domains.\u003c/li\u003e\n\u003cli\u003eParticipate in code reviews, write test suites, profile components, and take ownership of our software, source code, tools, and processes.\u003c/li\u003e\n\u003cli\u003eMentor other developers.\u003c/li\u003e\n\u003cli\u003eContribute to a positive, collaborative culture for innovation.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eRequirements\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e5+ years of software engineer experience.\u003c/li\u003e\n\u003cli\u003eProficiency in frontend technologies (React, Node.js, Webpack).     Experience working with relational and NoSQL databases.\u003c/li\u003e\n\u003cli\u003eStrong knowledge of HTTP and REST web services implementation.\u003c/li\u003e\n\u003cli\u003eTest driven development and unit testing frameworks.\u003c/li\u003e\n\u003cli\u003eModern DevOps experience.\u003c/li\u003e\n\u003cli\u003eStandard software engineering tools (git, Jenkins, JIRA).\u003c/li\u003e\n\u003cli\u003eThe proven ability to see things as they should be, and to realize that vision.\u003c/li\u003e\n\u003cli\u003eComfort with agile development and remote team environments.\u003c/li\u003e\n\u003cli\u003eExcellence in verbal and written communication.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eDesired Skills\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eTypeScript\u003c/li\u003e\n\u003cli\u003ePython 3 and web frameworks such as Django or Flask.\u003c/li\u003e\n\u003cli\u003eSQL \u0026amp; relational database modeling.\u003c/li\u003e\n\u003cli\u003eExperience in deployment to AWS, especially serverless technologies.\u003c/li\u003e\n\u003cli\u003eStrong knowledge of JWT and various web security models.\u003c/li\u003e\n\u003cli\u003eD3.js, Vega, Bokeh, Leaflet, and other browser visualization libraries.   Experiment-driven design and iterative features-based development (A/B testing, etc.).\u003c/li\u003e\n\u003cli\u003eElasticSearch, Apache Kafka, AWS Kinesis, PostgreSQL, AWS Aurora.\u003c/li\u003e\n\u003cli\u003eJava 8 and other JVM-based languages.\u003c/li\u003e\n\u003cli\u003ePerformance monitoring and optimization.\u003c/li\u003e\n\u003cli\u003eMobile development using Native or Cross-platform (Xamarin, Ionic, React Native).\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eEducation Required\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eBS or BA in Computer Science, Mathematics, or Statistics, or equivalent experience.\u003c/li\u003e\n\u003c/ul\u003e\n",
	"how_to_apply": "\u003cp\u003eAPPLY HERE: \u003ca href=\"https://us-strozfriedberg-aon.icims.com/jobs/24315/senior-developer/job\"\u003ehttps://us-strozfriedberg-aon.icims.com/jobs/24315/senior-developer/job\u003c/a\u003e\u003c/p\u003e\n",
	"company_logo": null
}, {
	"id": "4cd29974-e48b-11e8-8478-fb9810f86b79",
	"type": "Full Time",
	"url": "https://jobs.github.com/positions/4cd29974-e48b-11e8-8478-fb9810f86b79",
	"created_at": new Date('2020-05-12').toString(),
	"company": "Sesame",
	"company_url": "http://sesamecare.com",
	"location": "New York; Berlin",
	"title": "Software engineer (back end)",
	"description": "\u003cp\u003eWe’re Sesame and we’re building a transformative health care platform that makes it easier and more affordable for all Americans to access high-quality health care.\u003c/p\u003e\n\u003cp\u003eOur all-star team is primed for the journey of re-shaping American health care to put people like you and your family first. Unaffordable health care that’s hard to navigate is what keeps us up at night.\u003c/p\u003e\n\u003cp\u003eWe believe everyone should be able to get high-quality care for a fair price. That’s why we’re working with doctors who share our vision for giving people a better way to get the care they need without the stress, frustrations, and rip-offs of the current health care system.\u003c/p\u003e\n\u003cp\u003eWe’re passionate about building a new kind of health care economy that works for everyday people, and this is just the beginning.\u003c/p\u003e\n\u003cp\u003eWe must be on to something, since we’re proud to say:\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eWe have engineering teams in New York and Berlin\u003c/li\u003e\n\u003cli\u003eWe've raised millions in funding to grow U.S. operations.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eWant to help? Join our team. We are a small group of engineers, but we’re growing and looking for experienced back end engineers with a focus on Java to expand our ranks here in New York and Berlin.\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003eAbout you:\u003c/strong\u003e\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eComfortable with Java and microservices.\u003c/li\u003e\n\u003cli\u003eYou seek and prefer simple solutions to complex problems.\u003c/li\u003e\n\u003cli\u003eYou strive to write clean, quality code and enjoy doing it.\u003c/li\u003e\n\u003cli\u003eYou maintain a healthy balance between perfectionism and actually getting stuff done.\u003c/li\u003e\n\u003cli\u003eYou either have experience with the technologies we currently use (or a strong interest in them) and the curiosity to learn new languages and frameworks.\u003c/li\u003e\n\u003cli\u003eYou love developing software. You have 2+ years of industry experience.\u003c/li\u003e\n\u003cli\u003eYou are a strong team player, have strong writing skills, and enjoy collaborating with others.\u003c/li\u003e\n\u003cli\u003eYou are attuned to the fundamentals of user design and user experience.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e\u003cstrong\u003eOur technology stack includes:\u003c/strong\u003e\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eJava 10\u003c/li\u003e\n\u003cli\u003eSpring Boot\u003c/li\u003e\n\u003cli\u003eKubernetes\u003c/li\u003e\n\u003cli\u003eDocker\u003c/li\u003e\n\u003cli\u003eGraphQL\u003c/li\u003e\n\u003cli\u003ePub/Sub\u003c/li\u003e\n\u003cli\u003ePostgres\u003c/li\u003e\n\u003cli\u003ePython\u003c/li\u003e\n\u003cli\u003eNodeJs\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e\u003cstrong\u003eOur Offer:\u003c/strong\u003e\nWorking with us means you will be challenged every day by our customers, our partners, and your peers. You can be yourself, speak freely, be trusted and respected.\u003c/p\u003e\n\u003cp\u003e\u003cstrong\u003ePerks:\u003c/strong\u003e\nCompetitive total compensation package with generous equity.\nGenerous, flexible vacation policy.\nA fun and international work environment with teams in New York and Europe.\nThe opportunity to work independently and occasionally remotely.\nThe chance to learn first-hand about the biggest industry in the world.\u003c/p\u003e\n\u003cp\u003eSesame is an equal opportunity employer and we value diversity at our company. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.\u003c/p\u003e\n",
	"how_to_apply": "\u003cp\u003e\u003ca href=\"https://jobs.lever.co/sesamecare/26d259b5-5bcc-4ee9-a5d0-068d9c856381?lever-origin=applied\u0026amp;lever-source%5B%5D=GitHub\"\u003ehttps://jobs.lever.co/sesamecare/26d259b5-5bcc-4ee9-a5d0-068d9c856381?lever-origin=applied\u0026amp;lever-source%5B%5D=GitHub\u003c/a\u003e\u003c/p\u003e\n",
	"company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWRXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bfdeee729a4dbb9e1851c0362a1cf73bf3b6c646/03acb87e-f369-4964-950b-80043ff18ae1"
}, {
	"id": "dc428b94-e42e-11e8-91e2-23879ca9e8b0",
	"type": "Full Time",
	"url": "https://jobs.github.com/positions/dc428b94-e42e-11e8-91e2-23879ca9e8b0",
	"created_at": "Fri Nov 09 14:51:11 UTC 2018",
	"company": "New York University",
	"company_url": null,
	"location": "New York, New York 10001",
	"title": "Technology Solutions Developer",
	"description": "\u003cp\u003eAs a member of the Technology Development Group, the Technology Solutions Developer is responsible for designing, implementing, and testing a wide variety of web applications, and supporting the School of Law's web presence, including academic and administrative functions. The responsibilities range from designing and developing end-to-end applications, planning and developing new site features, and extending existing applications to keeping web systems up-to-date, and integrating 3rd party applications with the school's application stack. The role requires excellent technical skills, analytical and creative problem solving skills, an ability to work independently or with a group, initiative, and high personal standards for quality work.\u003c/p\u003e\n\u003cp\u003eUS\u003c/p\u003e\n\u003cp\u003eThe Technology Development Group at NYU School of Law is a small, versatile, full stack development team. The vast majority of our development is in C#/.NET, with additional projects in PHP (Laravel) … both using Vue as our front-end framework.\u003c/p\u003e\n\u003cp\u003eOur group develops and supports the school's website (Drupal), micro sites (usually WordPress), reporting, and administrative applications (both internal and public). We've been known to divert our energies towards improving our supporting infrastructure, and now run many of our services using Docker/Kubernetes/Terraform, and that only as part of our growing AWS presence. We're usually getting ourselves into trouble with interesting projects.\u003c/p\u003e\n\u003cp\u003eYOU\u003c/p\u003e\n\u003cp\u003eWe're looking to add a developer who is flexible enough to code across different environments. Maybe you have experience in another language and are looking to switch it up. You're already good, but want to be better … and you want to learn new things and grow. Regardless, have an opinion, because we genuinely want to hear it!\u003c/p\u003e\n\u003cp\u003eWHY\u003c/p\u003e\n\u003cp\u003eAs an employee of NYU Law, you would receive NYU's benefits (\u003ca href=\"https://www.nyu.edu/employees/benefit.html\"\u003ehttps://www.nyu.edu/employees/benefit.html\u003c/a\u003e), including excellent health coverage, retirement plans, and tuition remission. You would be part of a team of creative, talented technologists who continue to make NYU Law one of the top law schools in the country! Finally, you will be given the opportunity to become the professional you want to be, working with the tools you want to work with.\u003c/p\u003e\n\u003cp\u003eRequired Education:\nBachelor's degree.\u003c/p\u003e\n\u003cp\u003eRequired Experience:\n2-4 years' experience and expertise in working with high level languages such as: C#, PHP, Python, or Ruby; fluency in HTML, CSS, JavaScript; and familiarity with the general principles of system and network administration; direct experience with the all components of the LAMP stack and content management frameworks, such as Drupal and WordPress.\u003c/p\u003e\n\u003cp\u003ePreferred Experience:\nExperience with a web development framework such as: .NET, Laravel, Django, or Rails. Experience with a JavaScript framework such as Vue, Angular, or React.\u003c/p\u003e\n\u003cp\u003eRequired Skills, Knowledge and Abilities:\nExcellent interpersonal and communication skills; ability and drive to learn new technologies and proactively look for ways to improve the School of Law's applications and web infrastructure.\u003c/p\u003e\n\u003cp\u003ePreferred Skills, Knowledge and Abilities:\nKnowledge of module or plugin development for these frameworks is a plus. Fundamental knowledge of distributed version control systems and familiarity with one or more contemporary version control systems (e.g. Git/Mercurial/SVN)\u003c/p\u003e\n\u003cp\u003eEOE/AA/Minorities/Females/Vet/Disabled/Sexual Orientation/Gender Identity\u003c/p\u003e\n\u003cp\u003eApply Here: \u003ca href=\"http://www.Click2apply.net/cyg9sy9m99zdm9v2\"\u003ehttp://www.Click2apply.net/cyg9sy9m99zdm9v2\u003c/a\u003e\u003c/p\u003e\n\u003cp\u003ePI105491972\u003c/p\u003e\n",
	"how_to_apply": "\u003cp\u003eApply Here: \u003ca href=\"http://www.Click2apply.net/cyg9sy9m99zdm9v2\"\u003ehttp://www.Click2apply.net/cyg9sy9m99zdm9v2\u003c/a\u003e\u003c/p\u003e\n",
	"company_logo": null
}]

const JobsCard = ({company, title, type, location, created_at}: JobsCardProps) => (
    <JobsCardDiv>
        <JobsCardImg></JobsCardImg>
        <Wrapper>
            <LeftSide>
                <JobsCardCompany>{company}</JobsCardCompany>
                <JobsCardRole>{title}</JobsCardRole>
                {type && <JobsCardType>{type}</JobsCardType>}
            </LeftSide>
            <RightSide>
                <JobsCardLocation>
                    <span className="material-icons" style={{ fontSize: 15 }}>public</span>
                    <span>{location}</span>
                </JobsCardLocation>
                <JobsCardCreated>
                    <span className="material-icons" style={{ fontSize: 15 }}>schedule</span>
                    <span>{ago(new Date(created_at))}</span>
                </JobsCardCreated>
            </RightSide>
        </Wrapper>
    </JobsCardDiv>
)

const JobsList = () => (
    <ListComp id='jobslist'>
        {jobs.map(job => (<JobsCard {...job} />))}
    </ListComp>
)


export default JobsList;