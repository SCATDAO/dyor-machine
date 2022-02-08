const questionList = [
  {
    id: 1,
    tag: "DT1-1",
    category: "Development Team",
    name: "Read Whitepaper",
    question: "Did you read the whitepaper?",
    worksteps: ["A. Read the whitepaper (usually found on website)."],

    options: [
      { id: 1, name: "Yes", value: 0.0 },
      { id: 2, name: "No", value: 0.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "There are not points awarded for this section that will affect the scoring. But we wanted to include this as your first point of research on your journey to properly evaluating a project because it is important and it will aide you in answering many of the subsequent questions. You have likely been told to read the whitepaper several times on social media or by friends and there is good reason. The whitepaper is meant to contain all the information you need to understand the project. It can give background, a breakdown how  it functions, information on the tokenomics, and anything else the writers decided to include in it. \n But as important and beneficial as this step can be, I have always gotten the impression that very few people actually do it. I have also gotten the impression that many people who tell you to read the whitepaper do not seem to have done it themselves. Now you might be thinking, a lot of this stuff is beyond my understanding so why even bother? Well first of all, you might be surprised. There are some extremely technical papers out there, but there are also a lot of easy to understand ones as well. Or it may be a situation where pieces of it are confusing but large chunks of it are within your wheelhouse. That's OK friend.\n Try and read it anyways. Google is your friend and if there is something you do not understand you can always read up on it our create a post on Reddit to learn more. And I promise you that while you may start out having difficulties, the more you do and the more you stick with it, the better you will become. This is how learning works and being lousy at something is usually the first step to being great at something. So bite the bullet, give it a shot, and I think you will be surprised at how much you are actually able to absorb. Good luck.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 2,
    tag: "DT2-2",
    category: "Development Team",
    name: "Anonymous Team",
    question: "Is the development team anonymous?",
    worksteps: [
      "A. Review project website to check if team is listed.",
      "B. List each member listed in box below.",
    ],

    options: [
      { id: 1, name: "Yes", value: 0.0 },
      { id: 2, name: "No", value: 4.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "Practically all exit scams and rug pulls are performed by anonymous teams. Why do you suppose that is? I think that the simplest answer is that if you are going to commit a crime, it is infinitely easier to get away with it if nobody knows who you are. The exact same reason that bank robbers choose to wear a mask. If you commit fraud and steal millions from investors, the police will hunt you down and you will face consequences for your actions. At the very least, you will be labeled a charlatan and will not be able to easily do the same thing in the future. If you commit fraud and steal millions of investors while remaining completely anonymous, you will never really face any consequences for your actions and will be able to continue doing it again and again.\n Now, does this mean that any dev team that chooses to remain anonymous is 100% going to commit fraud and steal? Of course not. There are lots of brilliant, hard working, and trustworthy developers out there that might prefer to be anonymous, and that is their right. But the good teams who choose to remain anonymous are normalizing the practice which leaves the door wide open for the bad teams to steal over and over again. We as a community should not be willing to invest in or use any dApp where the dev team has chosen to be anonymous, as this potential for fraud will always be present. We have no way to sort the trustworthy teams from the untrustworthy and are left in a situation where we are essentially just hoping that people do the right thing.\n If a dev team wants us to trust them enough to use and invest in their products, they must give us a reason to trust them. Revealing themselves is a loud and clear message to the investing community that they will do right by us and if they do not, they will suffer the consequences. The good teams who choose to remain anonymous are normalizing the practice which leaves the door wide open for the bad teams to steal over and over again. ",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 3,
    tag: "DT3-3",
    category: "Development Team",
    name: "Identity Verification",
    question:
      "Can you verify that each member of the Development team is a real person?",
    worksteps: [
      "A. List each person obtained in project website in box below.",
      "B. If links to LinkedIn Github, or other websites are provided, click through each link and review the information to determine if it looks genuine. Genuine profiles would likely have a long history, several contacts, current information, recommended skills,  etc",
      "C. If no links are provided, you will need to manually search. Begin with Google for general information. Check Linkedin, Facebook, Instagram, Github, and twitter to see if you can locate a profile that matches each person.",
      "D. If you have reason to doubt the profiles you have found were authentic, use google image serch for each profile picture that was provided. Instructions for using Google search can be found here (https://support.google.com/websearch/answer/1325808?hl=en&co=GENIE.Platform%3DDesktop). Ensure image is not a stock photo and can be traced to a matching social media platform. ",
      "E. For any profiles found using workstep C, perform the review from Workstep B.",
      "F. If you discover the team info is fake, go back to TD1-1 and change the answer to Yes.",
      "G. Save links to supporting information in this workstep to support your review.",
    ],

    options: [
      { id: 1, name: "Yes", value: 2.0 },
      { id: 2, name: "No", value: 0.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "Simply verifying that there are people listed on the project website is insufficient. It is not unheard of for a team to list fake people on the website to give the appearance they have all revealed their identities when they have not. Because of this, you must do a little work verifying that each person listed is real. Ideally there will be links included with each name and photo in the teams section that direct you to each persons LinkedIn account, Github, Medium, or any other socials that are used to corroborate identity and professional credentials. Many teams will provide these freely because they want to make it easy for you to verify them. If links are not provided, that is frustrating but not necessarily a red flag. Go through the worksteps that are listed here to try to find various social media accounts to confirm their identity and credentials. \n Even if you do find a LinkedIn account or social media account, that doesn't guarantee that the information is legitimate. Any good scammer would have gone through the trouble of creating a fake identity for each person they listed in the website. You will need to use some of your past experience and common sense to review what is available and determine if it is legitimate. You have likely seems hundreds of LinkedIn profiles or Twitter/IG accounts and can spot things that look funny. Hardly any contacts. A ton of contacts but barely and activity. There are all kinds of things that can appear unusual and are too many to list here, but you will need to review the information and determine if you think it appears legitimate. And typically finding several sources online that can be compared and cross referenced to each other provides additional assurance that the person is real (e.g. has LinkedIn profile with several connections and people who have attested to a certain skill the person has, has a Facebook or IG account with similar pictures that appears legitimate, has a few articles written about them from various third party publications that you are familiar with). \n If you do determine that there are people listed in the website but they appear to be fake people, that is going to be a huge red flag. Honesty and reputation are extremely important and a team that is willing to mislead on this would likely be willing to mislead in other areas as well. It is possible that there are reasonable explanations or it is a rare instance where a person has no online presence, but anyone should proceed extremely cautiously if they are having trouble verifying the teams identities. ",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 4,
    tag: "DT4-4",
    category: "Development Team",
    name: "Prior Experience",
    question:
      "Does the Dev team have the proper experience to execute this project? ",
    worksteps: [
      "A. Review linkedIn profiles found in Question 2 for background and credentials of team",
      "B. For each position, check if education and work experience is relevant to role in project. If they have Education, work experience, or Code repositories to demonstrate their experience in their field, that is adequate for this question.",
      "C. List each team member in the box below along with a description of their experience and assessment if it is relevant.",
    ],

    options: [
      { id: 1, name: "Yes", value: 0.5 },
      { id: 2, name: "No", value: 0.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "Prior experience is extremely valuable in assessing if something is going to be successful going forward. As they say, the best way to predict the future is to study the past. So having a team that has a successful history with blockchain or previous start ups suggests that they will have success with the project you are currently researching. Blockchain is also a very new and fast paced industry, so having a team with experience navigating it makes it more likely that they will be successful. Now does this mean that just because someone was successful in the past it is a guarantee they will always be successful? Of course not. Each project needs to be assessed on its own mertis independent of the last, but having that prior experience to leverage will usually provide an edge and increase the chances of its success. \n It is also important to research prior experience becuase of anything negative that might turn up. Just like prior positive exerience being a good indicator that the current project will be successful, prior negative experience is just as good an indicator that you might want to avoid. Was someone on the team invovled in some type of fraud or illegal behavior in the past? Have they relseased a prdocut that is getting large amounts of complaints from thier users or investors? This is all information that you can use to assess if the current project they are working on will have a similar outcome. Just remember that the past helps us assess the future, but it doesnt gaurantee anything, positive or negative. ",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 5,
    tag: "DT5-5",
    category: "Development Team",
    name: "Audit",
    question:
      "Has the project successfully completed an audit by a reputable service provider?",
    worksteps: [
      "A. Scroll through the project website to see if they have a section on their audit status and if they have a link to the audit report.",
      "B. If it is not mentioned on the website, google the project name and the word audit. If it is popular, there are likely areticles written about it that will pop up.",
      "C. If nothing is found in the first two steps, try scrolling through their twitter feed, as it will usually be announced there.",
      "D. If nothing is found still, ask a direct question on their twitter, telegram, or discord and someone will be able to point you towards it.",
      "E. If the audit was found, list the name of the auditor and the date of completion in the box below. If the audit report is available include a link to it as well.",
      "F. If you are unfamilar with the auditor, Google them and see what results turn up to determine if they are reputable  (If there are complaints about them. If there are other projects you are familiar with audited by them. Etc.)",
    ],
    options: [
      { id: 1, name: "Yes", value: 1.0 },
      { id: 2, name: "No", value: 0.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "A third party audit by a reputable independent service provider is a crucial step in establishing trust with potential investors and users. It is important to have people who are not affiliated with the project review the code who can attest that it is free from any bugs, exploits, or vulnerabilities. Just think about this rationally for a second, how much would you trust the dev team if they say they have looked everything over and it is safe to use? You can see how there is a conflict of interest here because the dev team could be the ones who have programmed the application to do something malicious, so taking their word for it is probably not a great idea.\n There are also instances where the dev team has not done anything wrong intentionally, but they still could have programmed in things that could harm investors accidently. By having a fresh set of eyes reviewing their work, you have a good chance at finding things that the original team may have overlooked.  It is also important that you assess the people who are performing the audits. Reputation is important and the firms that do a good job will have built a solid reputation for themselves. If it is one you have never heard of or cannot find any information about online, you would usually have less faith in that audit work. \n Now does this mean that if it has an audit it is 100% safe to use? Unfortunately no. Read any audit report and there will be plenty of disclaimers about how any audit only provides limited assurance and they themselves will not guarantee the safety of the application. So while not 100%, it is still a good sign that the dev team cares about their product and wants to make sure its safe to use, and professionals have reviewed it and hopefully caught anything major. ",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 6,
    tag: "DT6-6",
    category: "Development Team",
    name: "Plagarism",
    question: "Was there any plagiarism in the whitepaper?",
    worksteps: [
      "A. Upload a copy of the whitepaper to Grammerly using this link ( https://www.grammarly.com/plagiarism-checker ).",
      "B. Include a copy of the results into the box below.",
    ],

    options: [
      { id: 1, name: "Yes", value: 0.0 },
      { id: 2, name: "No", value: 1.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "As mentioned in #2, honesty and reputation are extremely important and a team that is willing to mislead or cheat in one area would likely be willing to mislead and cheat in other areas as well. Stealing someone's ideas and passing them off as your own is very similar to stealing money or assets. So people who have demonstrated they are willing to steal ideas are better off avoided as they might be willing to steal your money/crypto as well. \n Now does this mean that people should not be leveraging other ideas or knowledge? Of course not, that is one of the things that makes open source blockchain and tech in general so special. Everyone can learn from one another and build off each other which ultimately speeds. But blindly copying someone else's whitepaper does not really fall under this category. If a team ends up copying large sections of another teams whitepaper without citing their source or giving credit, it is usually a bad sign and something you would want to consider while evaluating the project. ",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 7,
    tag: "DT7-7",
    category: "Development Team",
    name: "Spelling Errors",
    question:
      "Are there grammer, spelling, and punctuation errors in the Whitepaper or webpage?",
    worksteps: [
      "A. Copy text from whitepaper and website and paste into Grammerly using this link (https://www.grammarly.com/plagiarism-checker).",
      "B. Grammarly is free, but if you do not wish to download it, perform manual review for grammar, spelling, and punctuation errors.",
      "C. Include a summary of the results into the box below.",
      "D. In general a few small errors are OK. If there are large numbers of grammer spelling and punctuation errors, then answer this question No.",
    ],

    options: [
      { id: 1, name: "Yes", value: 0.0 },
      { id: 2, name: "No", value: 1.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "Most serious teams that are truly building something significant take a lot of pride in what they do. They like to make sure that everything is presented as the best version of itself and take the time and effort to review things multiple times with multiple people. As a result of this effort, there usually arent too many errors to be found. This is contrasted against teams that have hastilly put something together as fast as possible to exit scam or rug pull before quickly moving on to the next one. \n If a team has no real intention of brining this product to market or sticking around long enough to see it through, they usually arent spending all the time and energy to ensure everything is perfect. So if you are seeing a whitepaper that is full of spelling, grammar, and punctuation errors, that can be an indication that this team has not taken anything very seriously and may have bad intentions. Of course this is not a guarantee and its possible for an amazing project to have plenty of flaws in the whitepaper or a malicious project to have a flawless whitepaper. It is just one of the many things we look at when assessing a project on the whole. ",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 8,
    tag: "DT8-8",
    category: "Development Team",
    name: "Whitepaper Length",
    question: "What is the length of the Whitepaper?",
    worksteps: [
      "A. Open Whitepaper. Count number of pages.",
      "B. Note number of pages in box below and any thoughts or observations you may have.",
    ],
    options: [
      { id: 1, name: "1 to 5 pages", value: 0.0 },
      { id: 2, name: "6 to 15 pages", value: 0.2 },
      { id: 3, name: ">15 Pages", value: 0.5 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "This point should be taken with a large grain of salt and will also be subjective to the type of project. A next generation lending application with lots of features and specs should obviously be a longer whitepaper than whatever your favorite new dog coin is (if it even has a whitepaper). At the end of the day, quality over quantity is what is important and simply printing out a hundred pages of garbage is not very impressive or useful. But this is one of many data points that you can use to assess how serious or legitimate the project appears. Having a few pages of fluff is a warning sign that this might not be a very serious project, which increases the chances of an exit scam or rug pull. Having many pages that comprehensively explains all aspects of the project is a good sign that it is a serious project and the team is actually busy at work building something useful.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 9,
    tag: "TK1-9",
    category: "Tokenomics",
    name: "Insider Allocation",
    question:
      "What portion of the tokens are held by the Development team or early investors?",
    worksteps: [
      "A. Review whitepaper and website for token allocation information",
      "B. Provide a breakdown of what percent belongs to each major group in the box below as follows:",
      "C. In the first box on the left type the category name (e.g. Development Team, Advisors, Treasury, etc).",
      "D. In the next box type in the percentage as an integer without a percentage sign (e.g. 10, 15, 80).",
      "E. Click the plus sign on the right to add as many rows as you need until all the data is captured.",
    ],

    options: [
      { id: 1, name: "0% to 15%", value: 3.0 },
      { id: 2, name: "16% to 25%", value: 2.0 },
      { id: 3, name: ">25%", value: 0.0 },
    ],
    answer: null,
    textarea: "",
    input: [
      {
        id: 0,
        name: "",
        per: "",
      },
    ],
    purpose:
      "Having huge portions of the token supply held by a small number of insiders is usually undesirable due to the selling pressure it can put on the token which can harm you as an investor. Team members or venture capitalists who got in extremely early and were able to acquire tokens for 1/1000 of the price you are able to acquire them for are going to want to sell at some point and lock in their gains. In order to sell these tokens, they will need sufficient liquidity from other people who are buying the token. Many projects can have large market caps, but if there is not a large amount of liquidity, any purchase or sale of the token can cause large fluctuations in price. In instances where teams and insiders want to exit their positions and cash out, this can cause the price to crash on the smaller investors who purchased the tokens at higher prices. \n Having large portions of tokens held by the team and insiders is also undesirable due to the centralized control that it means for the project. Decentralization is an important concept in blockchain and there are many different layers and aspects of decentralization to consider. One of those aspects is having this control over a large amount of supply held by a small number of people. Many project have governance features where 1 token = 1 vote and holders can propose changes, vote on those changes, and essentially control the project going forward. If you have large numbers of tokens concentrated in a few hands, they will essentially be able to control the project going forward, which is the antithesis of what most crypto projects are hoping to achieve.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 10,
    tag: "TK2-10",
    category: "Tokenomics",
    name: "Community Allocation",
    question:
      "What portion of tokens will be available to the general public either through sale or rewards ?",
    worksteps: [
      "A. With the tokenomics information collected in the previous question (TK1), indicate what percentage is allocated to the general public through sale or rewards.",
      "B. Provide the information in the box below",
    ],
    options: [
      { id: 1, name: "0% to 49%", value: 0.0 },
      { id: 2, name: "50% to 75%", value: 0.5 },
      { id: 3, name: ">75%", value: 1.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "Go back and re-read step #8, as it's essentially the same explanation, or I guess the mirror image of it. Just like having large numbers of tokens held by a few insiders can be bad, having a large number of tokens spread out across a large number of people is good. Explanations of sell pressure and decentralization both apply.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 11,
    tag: "TK3-11",
    category: "Tokenomics",
    name: "Vesting",
    question:
      "For tokens reserved for development team and early investors, is there a vesting schedule?",
    worksteps: [
      "A. Vesting means that all tokens are not immediately available. Instead they are held for a predetermined period of time.",
      "B. Review white paper, most likely in the tokenomics section, to see if development team or early investor tokens are immediately available to them or are held for a specified time.",
      "C. If there is a vesting schedule, outline it in the box below.",
    ],
    options: [
      { id: 1, name: "Yes", value: 1.5 },
      { id: 2, name: "No", value: 0.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "Lets start by describing what vesting is. According to Investopedia 'Being fully vested means a person has rights to the full amount of some benefit, most commonly employee benefits such as stock options, profit sharing, or retirement benefits. Benefits that must be fully vested benefits often accrue to employees each year, but they only become the employee's property according to a vesting schedule.Vesting may occur on a gradual schedule, such as 25 percent per year, or on a 'cliff' schedule where 100 percent of benefits vest at a set time, such as four years after the award date. Fully vested may be compared with partially vested. \n To give an example in the crpyrto world, the dev team might have 20% of all tokens reserved for themselves. As already discussed in #8, this can create a large amount of selling pressure if all the tokens were unlocked at once. It also can create concerns that there might be more work that needs to be done but now that the teams tokens are all unlocked, they could just take the money and run. To alleviate these concerns, a team can implement a vesting schedule so that not all of these tokens are available immediately. It can be vested over 4 years and 1/4 of the tokens are unlocked each year. It can be vested over 2 years where all the tokens are available at once at the end of the two years. Or anything that the team decides they want to do. By having a vesting schedule in place that makes sense, it is a clear signal to investors that tokens will not be massively dumped on them and that the team is in it for the long haul.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 12,
    tag: "TK4-12",
    category: "Tokenomics",
    name: "Locked Policy",
    question:
      "Is the token minting policy locked so that no changes can be made?",
    worksteps: [
      "A. Obtain the policy ID from project website. You may have to look around, but most minted tokens will list the policy on the website so you know you are getting the right token.",
      "B. Copy policy into pool.pm",
      "C. Under policy, ensure there is a lock symbol which signifies that policy is locked and cannot be changed (closed lock icon signifies locked policy).",
      "D. Copy in policy ID and note if policy is locked in box below.",
    ],
    options: [
      { id: 1, name: "Yes", value: 1.5 },
      { id: 2, name: "No", value: 0.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "Ask an Bitcoin Maxi why they love Bitcoin so much and there is a good chance one of their respnoses will be 'fixed and unchanging monetary policy'. They are not wrong about this being a good feature, as it ensures that everyone know the rules and can plan accordingly. You know how many tokens exist and know if more can be created. Most people wouldn't be too thrilled if the makers of the token they just purchased decided to mint trillions more which dilute the value of the ones they currently hold. You can make sure this is not possible if the policy is locked and can no longer be changed. If that is the case, then whatever the rules are when the tokens were minted will always apply and you do not run the risk of this being altered later down the line. \n It is also worth noting that each policy ID is unique to that token. It is possible to have 100 different tokens all with the same name, ticket symbol, and icon image. Some scammers might try to trick you by listing a copied token for sale on a DEX which appears to be the same (same name and ticket). But no matter what, the policy ID cannot be copied. It is a good practice to check the policy ID which is usually listed on the website and ensure you are purchasing the correct tokens.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 13,
    tag: "TK5-13",
    category: "Tokenomics",
    name: "Use Case",
    question:
      "Do you clearly understand the use case after reading the whitepaper and reviewing website info?",
    worksteps: [
      "A. Read the whitepaper and review website info. There is usually a section in both that discusses token use case/utility.",
      "B. After reviewing, do you uderstand the purpose of this project and its token? Is it a governance token that is used to make chages to the protocol. Is it a utility token that pays for transaction fees? Does it have some sort of functionality?",
      "C. Summarize the use case in the box below.",
    ],
    options: [
      { id: 1, name: "Yes", value: 2.0 },
      { id: 2, name: "No", value: 0.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "In the end, the projects that will truly last and thrive are the ones with real utility (usefulness). Something that fills a real world need, solves a problem, does something better than anyone else, etc. Projects that do not can definetly go up a lot in value as we have seen time and time again, but most of the time thier shot term success is driven by hype which can be fleeting and can go as quickly as it comes. So for many, identifying a project with a solid use case is a good step in the research proccess in determining if it is something you should risk your hard earned money on. Even the most technical projects should be able to explain what they are doing in a way that the average person can understand, so if you read the whitepaper and you still have no idea what the use case of the token or project is, chances are it doesnt really have one.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 14,
    tag: "TK6-14",
    category: "Tokenomics",
    name: "ISO Fee",
    question:
      "If the project utilizes an Initial Stake Offering, what is the percentage they charge?",
    worksteps: [
      "A. Review the project website, twitter page, discord, or twitter. ISO information and ticker should be listed somewhere.",
      "B. Look up ticker and check the costs listed for the stake pool.",
      "C. Some projects allow several SPOs to assist with this and they all may charge different fees. In that case try and determine what the majority of pools are using.",
      "D. Summarize results in box below.",
    ],

    options: [
      { id: 1, name: "0% to 3%", value: 0.5 },
      { id: 2, name: ">3%", value: 0.0 },
      { id: 3, name: "N/A", value: 0.5 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "This is another one of the more subjective points and shoud be taken with a grain of salt. Overall, if a pool is transparent about the fee structure they are charging and not misleading anybody, that is not a problem and each investor can decide for themselves if they want to proceed. So this is not really to punish the projects that decide to keep a larger percentage of the staking rewards for themselves, but more to reward the projects that try to make it as fair as possible. Many peopole in the crypto community care about fairness, and projects that conduct an ISO in a manner that helps smaller pools and doesnt gouge supporters are generally looked upon favorable and generate some positive attitudes towards it. \n So for that reason, we give a small number of bonus points to the projects which are extremely fair during thier ISO.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 15,
    tag: "TK7-15",
    category: "Tokenomics",
    name: "Originality",
    question:
      "Is the project an already existing business model or the first of its kind?",
    worksteps: [
      "A. Read the whitepaper.",
      "B. Identify the type primary function of the project. This would be things such as a DEX, lending dApp. NFT minter, etc.",
      "C. If you are unfamilar with the function of the project, review BuiltonCardano.com and check if there is already a category created.",
      "D. If it is an existing model,  please describe what the competition is like for this business model and list a few of the major competitors with market cap below.",
    ],
    options: [
      { id: 1, name: "Existing", value: 0.0 },
      { id: 2, name: "New", value: 0.5 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "This point has a few things to be considered. On the one hand, if a project is the first of its kind, it has a first mover advantage and has a better shot at cornering its market due to the fact that it’s the only game in town. As we have seen with Uniswap, Aave, Chainlink, and all the other projects that were the first of its kind, they usually have pretty good staying power and are typically one of if not the most popular project in its niche. \n On the other hand, being completely new can have negatives as its not really an established market, people might not fully understand what they are trying to do, the market might just not be ready for it yet, etc. Those are a lot of uncertainties that can make investing in a totally brand new product a bit risky. But in general, if you have read the whiteppaer and understand its use case, and beieve that it is fulfulling a reall need, there is a good chance that the positives outweigh the negatives when it comes to investing in something brand new.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 16,
    tag: "CT1-16",
    category: "Community",
    name: "Twitter",
    question: "How many followers does the project have on Twitter?",
    worksteps: [
      "A. Check the project website to see if it includes a link to its twitter profile.",
      "B. If it does not, open twitter and type the project name.",
      "C. Review results to ensure you are looking at the correct account.",
      "D. Note the number of followers in the box below.",
    ],

    options: [
      { id: 1, name: "<1000", value: 0.0 },
      { id: 2, name: "1000 to 5000", value: 0.5 },
      { id: 3, name: "5001 to 10,000", value: 1.0 },
      { id: 4, name: ">10K", value: 1.5 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "You have likely seen this a hundred times before. There is a meme coin that does nothing, has no use case, and it goes up 30,000 percent in a year. I would like to tell you that only quality projects go up in value but that is far from the case. Hype and marketing are a huge determinant in a project rising in value, and a large part of that is due to the community that is behind the project. And this doesn't just apply to meme coins or project with little to no utility. Serious projects will also be affected by the size and strength of the community behind them. \n Adoption is key to success and survival, and chains or tokens with millions or supporters are already further along in terms of adoption than ones with a couple hundred. Not to mention the projects with a million people behind them are constantly writing, posting, and talking about the projects which generates new interest from others who might not have been familiar with it yet. So taking a look at the size and quality of a community behind any crypto project will usually give you invaluable information on if it will be a wise investment or not. But these can always be manipulated, which we cover in the next point.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 17,
    tag: "CT2-17",
    category: "Community",
    name: "Real Followers",
    question:
      "For the twitter account, does it appear to have actual followers or bots/paid followers?",
    worksteps: [
      "A. Review 10 or more tweets from the project and note the number of likes, comments, and retweets it has.",
      "B. Compare the total number of followers to the average number of likes or comments they receive on posts.",
      "C. If on average the nuber of likes is less than .5% of the followers, this suggests that the followers are not real. This is not a hard rule so will need to exercise judgement.",
      "D. Write a summary of your findings in the box below.",
    ],

    options: [
      { id: 1, name: "Bots", value: 0.0 },
      { id: 2, name: "Real", value: 2.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "As discussed in the last point, community is important to a projects success. But simply looking at the number of followers is insufficient. This is because there are a LOT of projects out there that have recognized how important a community is to a project, and simply buy thousands of followers to give the appearance that they have a large organic community behind them. Now can a project buy followers and still end up being a good investment? Of course they can. But we have already covered honesty and integrity in the other points, and that still applies here. Most legitamite projets will gain a following organically because they are high quality and people can recognize that. Low quality projects that dont have much to offer will usually be the culprits in purchasing followers, which are typically the types of investments you would want to avoid. \n So doing a little extra leg work in reviewing the posts to see how much actual engagement they get will be a good indicator if the followers are real or not. Someone with 50K followers who gets 5 to 10 likes is probably purchainsg them. Someone who has no other people commenting or posting to thier page probably doenst have many real followers. And unfortunately, the really crafty projects who are on top of everything will also buy likes for thier posts to avoid being discovered. But those will typically be soething you can spot by looking through the people who engaged and seeing how many connections or followers they have. If they are all super low, its a good chance they are paid bots.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 18,
    tag: "CT3-18",
    category: "Community",
    name: "Reddit",
    question: "How many subscribers does the project have on Reddit?",
    worksteps: [
      "A. Check the project website to see if it includes a link to its Subreddit.",
      "B. If it does not, open Reddit and type the project name.",
      "C. Review results to determine if it is associated with the project or not.",
      "D. Note the number of followers in the box below.",
    ],

    options: [
      { id: 1, name: "<1000", value: 0.0 },
      { id: 2, name: "1000 to 10000", value: 0.5 },
      { id: 3, name: ">10K", value: 1.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "This is a very similar concept to the one on Twitter. I am copying it here again for your convenience. You have likely seen this a hundred times before. There is a meme coin that does nothing, has no use case, and it goes up 30,000 percent in a year. I would like to tell you that only quality projects go up in value but that is far from the case. Hype and marketing are a huge determinant in a project rising in value, and a large part of that is due to the community that is behind the project. And this doesn't just apply to meme coins or project with little to no utility. Serious projects will also be affected by the size and strength of the community behind them. \n Adoption is key to success and survival, and chains or tokens with millions or supporters are already further along in terms of adoption than ones with a couple hundred. Not to mention the projects with a million people behind them are constantly writing, posting, and talking about the projects which generates new interest from others who might not have been familiar with it yet. So taking a look at the size and quality of a community behind any crypto project will usually give you invaluable information on if it will be a wise investment or not. But these can always be manipulated, which we cover in the next point.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 19,
    tag: "CT4-19",
    category: "Community",
    name: "Subreddit Activity",
    question:
      "For the subreddit, does it appear to have an active environment?",
    worksteps: [
      "A. Review the subreddit several times over several days at different times. Note the nuber of people online vs the number of members. .1%  or more of members online at any given time is sufficient activity.",
      "B. Review the last 10 posts. If they are all recent (within the last 2 days) and by different accounts, this also suggests sufficient activity.",
      "C. Note the number of members below",
    ],

    options: [
      { id: 1, name: "Yes", value: 1.0 },
      { id: 2, name: "No", value: 0.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "This is a very similar concept to the one on Twitter I am copying it here again for your convenience.  As discussed in the last point, community is important to the success of a project. But simply looking at the number of subscribers is insufficient. This is because there are a LOT of projects out there that have recognized how important a community is to a project, and simply buy thousands of subscribers to give the appearance that they have a large organic community behind them. \n Now can a project buy subscribers and still end up being a good investment? Of course they can. But we have already covered honesty and integrity in the other points, and that still applies here. Most legitimate projects will gain a following organically because they are high quality and people can recognize that. Low-quality projects that don't have much to offer will usually be the culprits in purchasing subscribers, which are typically the types of investments you would want to avoid. So doing a little extra leg work in reviewing the posts to see how much actual engagement they get will be a good indicator if the subscribers are real or not. Someone with 50K subscribers who gets 5 to 10 upvotes is probably purchasing them. Someone who has no other people commenting or posting to their page probably doesn't have many real subscribers. And if you only see the same person making posts, that is usually not a good sign. Ideally, you want to look for a wide range of people posting and engaging on posts.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 20,
    tag: "CT5-20",
    category: "Community",
    name: "Telegram",
    question: "How many subscribers does the project have on Telegram?",
    worksteps: [
      "A. Check the project website to see if it includes a link to its Telegram",
      "B. If it does not, open Telegram and type the project name.",
      "C. Review results to determine if it is associated with the project or not.",
      "D. Note the number of members in the box below.",
    ],

    options: [
      { id: 1, name: "<1000", value: 0.0 },
      { id: 2, name: "1000 to 10000", value: 0.5 },
      { id: 3, name: ">10K", value: 1.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "This is a very similar concept to the one on Twitter. I am copying it here again for your convenience. You have likely seen this a hundred times before. There is a meme coin that does nothing, has no use case, and it goes up 30,000 percent in a year. I would like to tell you that only quality projects go up in value but that is far from the case. Hype and marketing are a huge determinant in a project rising in value, and a large part of that is due to the community that is behind the project. And this doesnt just apply to meme coins or project with little to no utility. Serious projects will also be affected by the size and strength of the community behind them. \n Adoption is key to success and survival, and chains or tokens with millions or supporters are already further along in terms of adoptoin than ones with a couple hundred. Not to mantion the projects with a million people behind them are constantly writing, posting, and talking about the projects which generates new interest from others who might not have been familiar with it yet. So taking a look at the size and quality of a community behind any crypto project will usually give you invalubale information on if it will be a wise investment or not. But these can always be manipulated, which we cover in the next point.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 21,
    tag: "CT6-21",
    category: "Community",
    name: "Telegram Activity",
    question: "Does their Telegram appear to have an active environment?",
    worksteps: [
      "A. Scan the recent activity. If there are several comments  by different accounts each day, this also suggests sufficient activity.",
      "B. If it is a Telegram that only allows for messages from the Dev team, answer this question with Yes.",
      "C. Comment on activity in box below.",
    ],

    options: [
      { id: 1, name: "Yes", value: 1.0 },
      { id: 2, name: "No", value: 0.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "This is the exact same concept we have been discussing in this section, so I'm not going to go into too much detail. But essentially, if there are a lot of people subscribed to a Telegram channel but there is nobody talking in it, that is not a good sign. It means either they have purchased those subscribers, or they are real but do not care about the project at all to engage on it. Either way, it is a bad sign and something that you should consider.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 22,
    tag: "CT7-22",
    category: "Community",
    name: "Discord",
    question: "How many members does the project have on discord?",
    worksteps: [
      "A. Check the project website to see if it includes an invite link to its Discord.",
      "B. If it does not, you will need to find an invite link to access the discord server. Check the projects twitter page for this.",
      "C. Note the number of members in the box below.",
    ],

    options: [
      { id: 1, name: "<1000", value: 0.0 },
      { id: 2, name: "1000 to 10K", value: 0.5 },
      { id: 3, name: "10K+", value: 1.5 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "This is a very similar concept to the one on Twitter. I am copying it here again for your convenience. You have likely seen this a hundred times before. There is a meme coin that does nothing, has no use case, and it goes up 30,000 percent in a year. I would like to tell you that only quality projects go up in value but that is far from the case. Hype and marketing are a huge determinant in a project rising in value, and a large part of that is due to the community that is behind the project. And this doesnt just apply to meme coins or project with little to no utility. Serious projects will also be affected by the size and strength of the community behind them. \n Adoption is key to success and survival, and chains or tokens with millions or supporters are already further along in terms of adoptoin than ones with a couple hundred. Not to mantion the projects with a million people behind them are constantly writing, posting, and talking about the projects which generates new interest from others who might not have been familiar with it yet. So taking a look at the size and quality of a community behind any crypto project will usually give you invalubale information on if it will be a wise investment or not. But these can always be manipulated, which we cover in the next point.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 23,
    tag: "CT8-23",
    category: "Community",
    name: "Discord Activity",
    question: "Does their Discord appear to have an active environment?",
    worksteps: [
      "A. Note the number of members compared to the number of people online. A large percentage of members online suggests an active environment.",
      "B. Scan the recent activity. If there are several comments  by different accounts each day, this also suggests an active environment.",
      "C. Comment on activity in box below.",
    ],

    options: [
      { id: 1, name: "Yes", value: 1.0 },
      { id: 2, name: "No", value: 0.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "This is a very similar concept to the one on Twitter. I am copying it here again for your convenience. You have likely seen this a hundred times before. There is a meme coin that does nothing, has no use case, and it goes up 30,000 percent in a year. I would like to tell you that only quality projects go up in value but that is far from the case. Hype and marketing are a huge determinant in a project rising in value, and a large part of that is due to the community that is behind the project. And this doesn't just apply to meme coins or project with little to no utility. Serious projects will also be affected by the size and strength of the community behind them. \n Adoption is key to success and survival, and chains or tokens with millions or supporters are already further along in terms of adoption than ones with a couple hundred. Not to mention the projects with a million people behind them are constantly writing, posting, and talking about the projects which generates new interest from others who might not have been familiar with it yet. So taking a look at the size and quality of a community behind any crypto project will usually give you invaluable information on if it will be a wise investment or not. But these can always be manipulated, which we cover in the next point.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 24,
    tag: "MT1-24",
    category: "Metrics",
    name: "Fair Launch",
    question:
      "If project has the token had its initial offering yet (ISO, IDO, ICO, etc.), was it a fair token launch?",
    worksteps: [
      "NOTE. This section only applies for projects which have had their initial offering and are actively traded. If it has not, skip this section by clicking next until it reaches the end.",
      "A. Fair launch would describe everyone having equal access to the token and no premine for specific individuals. Instances where certain countries are excluded for legal reasons would not apply.",
      "B. Google the project initial offering and read news articles and comments regarding how the launch was conducted and perceived.",
      "C. Summarize results in box below.",
    ],
    options: [
      { id: 1, name: "Yes", value: 2.0 },
      { id: 2, name: "No", value: 0.0 },
      { id: 404, name: "Doesn't apply", value: 0.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "We already touched on this a bit in the ISO percentage section when discussing projects that attempt to be as fair as possible in different aspects, and the launch is no different. So just like the ISO percentage, this is not really to punish the projects that do not have a fair launch, but more to reward the projects that try to make it as fair as possible. Many people in the crypto community care about fairness, and projects that conduct a fair launch  are generally looked upon favorable and generate some positive attitudes towards it. \n We also talked about tokens being concentrated in early investors/backers can create massive sell pressure at some point when they finally decide to sell. Well projects that had a fair launch have minimized the possibility of these VC/early investors and instead have tokens in the hands of the general community. So for those reasons, we give bonus points to the projects which are extremely fair during their launch.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 25,
    tag: "MT2-25",
    category: "Metrics",
    name: "Market cap",
    question: "What is the current market cap of the project?",
    worksteps: [
      "A. Utilize CoinGecko.com to obtain market cap. Cross reference against CoinMarketcap.com to nensure they match.",
      "B. If they do not match, review several sources as use what the majority of sources are reporting.",
      "C. Smaller market cap projects are typically riskier than larger market cap projects. However, smaller market cap projects also have the potential for greater returns, especially if its an established business model where competitors have significantly larger market caps. Both factors should be considered by potential investors to meet their specific goals.",
      "D. Note the market cap in the box below.",
    ],

    options: [
      { id: 1, name: "<50 Million", value: 0.0 },
      { id: 2, name: "50 to 100 Million", value: 0.5 },
      { id: 3, name: "100 Million +", value: 1.0 },
      { id: 404, name: "Doesn't apply", value: 0.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "This is another one of those double edged swords that can go in either direction. The smaller a projects market cap, the more room it has to grow. Getting in early on a project when the market cap is at 1 Million means you have the potential for those massive 1000X gains simply due to the fact that the project starts off so small. Similarly, it would be a bit silly to be getting into Bitcoin at a 1 Trillion dollar market cap and be expecting it to 1000X into a quadrillion dollar market cap and be worth more than there are dollars in existence. So when you are researching new projects, paying attention to the market cap can give you an idea of how much room it has to grow. \n Now the other side of the coin is that extremely small market caps are going to be much riskier investments than the larger and more established ones. Going back to our example, the 1 million market cap project has a lot of room to grow, but there is a good chance that your investment can fall to zero and be worth nothing. While Bitcoin isn't going to have its massive gains anymore, the chances of it dropping to zero are much lower (although it is still possible). Different investors will have different goals, but that is the general thought process when looking at a projects market cap. For the purposes of this assessment, we gave more points to the higher market cap because we are more focused on not losing money than we are in gaining money. But when doing your own personal assessments, it would be ok if you care more about the larger gain potential and lean towards a smaller market cap preference.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 26,
    tag: "MT3-26",
    category: "Metrics",
    name: "Volume",
    question: "What is the daily trading volume of the Token ?",
    worksteps: [
      "A. Utilize CoinGecko.com to obtain daily trading volume. Check 3 different days and use the average volume from those 3 days.",
      "B. Note the market cap in the box below.",
    ],
    options: [
      { id: 1, name: "<1 Million", value: 0.0 },
      { id: 2, name: "1 to 5 Million", value: 0.5 },
      { id: 3, name: "5 Million +", value: 1.0 },
      { id: 4, name: "N/A", value: 1.0 },
      { id: 404, name: "Doesn't apply", value: 0.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "Instead of writing my own take, I have copied this information from learncrypto.com as I think it explains it pretty well (https://learncrypto.com/knowledge-base/how-to-trade-crypto/understanding-crypto-trading-volume) Volume is important because it has such a significant impact on price from both an absolute and relative perspective. The total volume traded for a given cryptocurrency has a direct relationship with how volatile it is. Remember, price represents the balance of opinions between buyers and sellers. \n If an equal amount (in terms of volume) is being bought and sold then price will be stable, but stability suggests that people opinion about the price are well informed; this is known as market efficiency. \n Mature markets with significant volume and good price discovery have less volatility. Cryptocurrency is inherently volatile because it is immature and its adoption path is uncertain. Market participants are an unusual mix of recreational investors (holders), miners, speculators and institutional investors each with varying opinions and motivations, with those opinions subject to significant outside influences. \n So when looking at trading a given cryptocurrency, the total volume traded will immediately tell you how volatile it is likely to be. The change in volume over time will also give you a sense of interest in the project. \n  It may seem a bit obvious but in order to trade a particular cryptocurrency it has to be listed on an exchange. Exchanges choose which coins to trade, and being listed on the bigger exchanges can make a huge difference to volume. \n If, for example, you have an opinion about an obscure cryptocurrency and want to buy it at a specific price. The absence of volume is going to make that really hard - there won’t  be enough buyers and sellers, so the difference between the available Offers (buyers) and Bids (sellers) - known as the Spread - will be wide. \n The wider the spread, the less efficient a market and therefore the more volatile. Websites like Coinmarketcap provide historical volume data.",
    files: [],
    images: [],
    video: [],
  },
  {
    id: 27,
    tag: "MT4-27",
    category: "Metrics",
    name: "CEX",
    question: "Is the token listed on large  centralized exchanges?",
    worksteps: [
      "A. Utilize CoinGecko.com and type in the token ticker symbol.",
      "B. Scroll to the bottom of the page where it lists the top exchanges by volume.",
      "C. Review the exchanges listed. Large centralized exchanges would be Coinbase, KuCoin, Kraken, Binance, FTX, Huobi, Gate.io.",
      "D. Note the exchanges in the box.",
    ],
    options: [
      { id: 1, name: "Yes", value: 1.0 },
      { id: 2, name: "No", value: 0.0 },
      { id: 404, name: "Doesn't apply", value: 0.0 },
    ],
    answer: null,
    textarea: "",
    purpose:
      "We talked about volume in the last point. Well, where do you think most of the volume is coming from in crypto markets? I'd like to tell you it is from decentralized exchanges, but that is just not the case. Perhaps someday it will be, but for now, the tokens and coins listed on centralized exchanges have access to the most liquidity and volume of all the tokens. For this reason, checking if a token is listed on centralized exchanges or not is always worth the effort. If you have found one that is only listed on a decentralized exchange this can be a good thing as the price might get some upward movement if and when it ever gets listed on one. But this is also something that you should take caution of.  \n The shadiest projects out there that are trying to scam you will usually be found exclusively on decentralized exchanges, as they will not meet the more strict criteria to get listed on the centralized ones. Please note that this does not mean listed only on a DEX = shady, that is NOT what we are saying. Many great projects are only found on DEXs/ We are saying that Grimace cion or ElonDogeInuRocket with zero utility meant for quick pump and dumps will likely never make it on a centralized exchange. So to summarize, being only on a DEX can have some upside if it is a solid project, but you should definitely exercise caution as it can be riskier as well. Tokens that have been listed on the big centralized exchanges such as Coinbase, Kraken, Binance, etc. will have access to more liquidity, be more well-vetted, and oftentimes have less risk than a project that only lives on a DEX.",
    files: [],
    images: [],
    video: [],
  },
]

export default questionList