const testimonials = [
  // --- 10 YOUTH (Education, Career, Innovation) ---
  {
    name: "Tyler Henderson",
    message: "This grant was the final piece of the puzzle for my education. It allowed me to finish my last semester without the crushing weight of student debt hanging over my head. I was able to focus entirely on my finals and graduate with top honors. I’m truly grateful for this support.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Madison Clark",
    message: "I was worried about how I'd balance work and my career goals. The application process was surprisingly straightforward, and the support team answered all my questions quickly. Receiving this grant gave me the financial breathing room I needed to finally stop worrying and start achieving.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    name: "Justin Rivera",
    message: "Starting my small business wouldn’t have been possible without this financial boost. The funding helped me purchase essential equipment and register my company properly without taking out a high-interest loan. It really gave my dream the professional push it needed to succeed.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    name: "Alexis Jordan",
    message: "This is a fantastic initiative that truly supports young entrepreneurs across the country. The grant not only provided the necessary funding for my marketing plan but also gave me the confidence to keep pushing forward. It's rare to find a program that actually invests in youth.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/24.jpg"
  },
  {
    name: "Austin Brooks",
    message: "I was honestly skeptical at first because so many programs promise help but never deliver. Thankfully, this one was different. The process was transparent from start to finish, and the funds arrived in my account exactly when they said they would. It’s the real deal.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Brianna Reed",
    message: "I used these funds to enroll in a high-level coding bootcamp that I otherwise couldn't afford. Fast forward six months, and I’ve landed a junior developer role! This grant didn't just give me money; it gave me a completely new career path and a brighter financial future.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    name: "Jordan Smith",
    message: "As a young father, balancing school and family is hard. This grant helped cover my childcare costs during my final exam weeks. Knowing my kids were safe and paid for allowed me to pass with flying colors. I can’t thank the EmpowerAid team enough for their kindness.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    name: "Chloe Bennett",
    message: "I applied for help with startup costs for my online boutique. The team was so encouraging and the paperwork wasn't a headache. It’s wonderful to see a program that actually empowers young women to take charge of their own businesses. I highly recommend applying!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/18.jpg"
  },
  {
    name: "Marcus Thorne",
    message: "The grant helped me relocate to a new city for a life-changing job opportunity. Without this financial assistance, I wouldn't have been able to cover the moving costs or the first month's rent. This program bridges the gap between having a dream and actually living it.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    name: "Hailey Morgan",
    message: "I was struggling to pay for my specialized medical textbooks and a reliable laptop for my nursing degree. This grant covered everything! I no longer have to spend my nights working extra shifts, and I can finally dedicate my time to becoming the best nurse I can be.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/29.jpg"
  },

  // --- 30 SENIORS (Health, Security, Home, Comfort) ---
  {
    name: "Robert Miller",
    message: "As a veteran and a retiree, I truly appreciate the professionalism and respect the team showed me throughout the entire process. The support helped cover some critical home repairs that I had been postponing for years due to a tight budget. It’s a weight off my shoulders.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/60.jpg"
  },
  {
    name: "Barbara Wilson",
    message: "This program helped me repair my leaking roof just before the heavy winter snow arrived. Without this assistance, I honestly don't know how I would have managed the costs on my fixed income. I’m deeply thankful for this meaningful support during a very difficult time.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "William Davis",
    message: "The staff members were incredibly patient with me while I was filling out the online forms. They guided me step-by-step and made sure every detail was correct. That level of personal support means the world to seniors like me who aren't always comfortable with technology.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    name: "Patricia Taylor",
    message: "Because of this grant, I can now afford my monthly medications and basic living expenses without constant anxiety. Programs like this are a beautiful reminder that there are still organizations out there that genuinely care about the well-being of the elderly in our community.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/48.jpg"
  },
  {
    name: "Richard Moore",
    message: "The entire process was transparent, honest, and respectful. They explained every step clearly and kept every promise they made. It’s rare to find an organization that operates with this level of integrity. I am proud to share my positive experience with others.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/48.jpg"
  },
  {
    name: "Margaret Evans",
    message: "I live alone on a small pension, and when my furnace broke, I was terrified of the cold. This grant paid for a brand new heating system. I am so warm and safe in my home now. It feels like a miracle happened when I needed it most. God bless everyone involved.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/61.jpg"
  },
  {
    name: "Charles Thompson",
    message: "I had been suffering from dental pain for months because I couldn't afford the surgery. This grant covered the entire cost of my dental implants. Being able to eat comfortably and smile again has completely changed my outlook on life. This program is a true blessing.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/62.jpg"
  },
  {
    name: "Dorothy Lewis",
    message: "The process was simple, easy, and very fast. I didn't have to jump through hoops or wait months for a response. The money helped me pay off some old property taxes that were threatening my home. I can sleep peacefully now knowing my house is secure.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    name: "Edward Walker",
    message: "I haven't been able to visit my grandchildren in three years because of the rising costs of travel. This grant gave me the extra funds to finally buy a plane ticket and see my family. The joy of hugging my grandkids is something money can't buy, but this grant made it possible.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/64.jpg"
  },
  {
    name: "Linda Hall",
    message: "With grocery prices going up every week, I was struggling to buy healthy food. This support ensures I have fresh vegetables and protein in my fridge every single day. My health has improved significantly since I stopped worrying about where my next meal was coming from.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Thomas Young",
    message: "I desperately needed a new pair of hearing aids that my insurance wouldn't cover. EmpowerAid stepped in and handled everything. I can hear the birds singing and have conversations with my neighbors again. It has brought me back into the world. Thank you so much.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/66.jpg"
  },
  {
    name: "Nancy King",
    message: "My car is my lifeline for doctor appointments, but the repairs were becoming too much to handle. This grant helped me get my vehicle back in safe, working order. I no longer have to worry about being stranded or missing my important check-ups. Truly life-changing.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    name: "George Wright",
    message: "At 72 years old, I didn't think anyone would be interested in helping me. I was wrong. This program is truly inclusive and cares for people of all ages. The funds helped me settle some outstanding utility bills, and for the first time in years, I am debt-free.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/68.jpg"
  },
  {
    name: "Sandra Baker",
    message: "I used the funds to install a walk-in tub and grab bars in my bathroom to ensure my safety. It has made such a massive difference in my daily life. I feel much more independent and I’m no longer afraid of slipping. It’s the best thing that’s happened to me this year.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/69.jpg"
  },
  {
    name: "Kenneth Adams",
    message: "I’m a widower and I was really struggling to keep up with the rising costs of home maintenance. This grant was a direct answer to my prayers. It allowed me to hire a professional to fix my porch and clear my gutters. It’s wonderful to know there’s still help for us.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/70.jpg"
  },
  {
    name: "Betty Campbell",
    message: "Everything was handled with such kindness over the phone. I’m not very good with computers, but the representative walked me through the application with so much patience. The grant arrived exactly as they said it would. They are honest people doing great work.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/71.jpg"
  },
  {
    name: "Ronald Phillips",
    message: "It’s not just about the financial assistance, though that is life-changing. It’s about the feeling that you haven't been forgotten by society. This program makes us seniors feel valued and supported in our later years. It’s brought a lot of hope back into my life.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/72.jpg"
  },
  {
    name: "Donna Parker",
    message: "I received my grant funds within just two weeks of applying. There were no hidden fees, no tricks, and no complicated legal jargon. It’s a very clean and professional program that focuses on getting help to those who need it most. I tell all my friends to apply.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/73.jpg"
  },
  {
    name: "Larry Evans",
    message: "My property taxes saw a huge increase this year, and I was terrified I’d have to sell my family home. This grant covered the difference and saved my house. I can stay in the place where I raised my children. I am eternally grateful for this lifeline.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/74.jpg"
  },
  {
    name: "Shirley Edwards",
    message: "I was finally able to buy a new pair of bifocals and see an eye specialist for my glaucoma. My vision has improved so much, and the headaches are gone. It’s amazing how much a little help can improve your daily health. Thank you for looking out for us seniors.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/75.jpg"
  },
  {
    name: "Frank Collins",
    message: "Reliable, fast, and honest. In a world full of online scams, it’s refreshing to find a program that is the real deal. They really do follow through on their mission to help people. The money was deposited directly into my account without any hassle at all.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/76.jpg"
  },
  {
    name: "Carol Stewart",
    message: "I used my grant for a new high-quality mobility scooter. Now I can go to the local park and the grocery store on my own without needing someone to drive me. It has given me back my sense of freedom and independence. I feel like a new person!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/77.jpg"
  },
  {
    name: "Arthur Morris",
    message: "I truly appreciate the transparency of the whole system. I received email updates at every stage so I knew exactly where my application stood. The professionalism of the staff is top-notch. If you are struggling financially, please don't hesitate to reach out to them.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/78.jpg"
  },
  {
    name: "Janet Rogers",
    message: "The extra funds helped me pay for my husband's physical therapy sessions after his stroke. Insurance only covered so much, and we were drowning in bills. This grant allowed him to continue his recovery without us going into debt. It has helped our family so much.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/79.jpg"
  },
  {
    name: "Raymond Reed",
    message: "I was skeptical at first, but after my neighbor successfully received her grant, I decided to try. I’m so glad I did. It helped me clear my credit card debt and start fresh. It’s a wonderful feeling to start the month without owing anyone a single penny.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/80.jpg"
  },
  {
    name: "Joyce Cook",
    message: "A true blessing in disguise. I can finally afford the high-quality organic food and supplements my doctor recommended for my heart health. Before the grant, I was eating whatever was cheapest. Now, I am eating to live. My energy levels are higher than ever.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/81.jpg"
  },
  {
    name: "Stephen Morgan",
    message: "The grant arrived at the perfect time. My water heater burst and my social security check just couldn't cover the replacement. This program saved me from a cold house and a huge repair bill. I am so thankful that there is help available for seniors like me.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    name: "Gloria Bell",
    message: "It’s a simple process with a very big reward. I tell everyone at my local community center and church to apply because it’s absolutely worth it. The peace of mind that comes with a little extra financial security is priceless. Thank you for everything you do.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/83.jpg"
  },
  {
    name: "Walter Murphy",
    message: "This money helped me renovate my bathroom to be fully handicap accessible. I was struggling to use the shower, but now I have a safe, easy-to-use space. I feel much more independent and safe in my own home. This grant is making life better for people every day.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/84.jpg"
  },
  {
    name: "Alice Rivera",
    message: "I feel so much more at peace now that my financial burden has been lifted. I can finally enjoy my retirement years without the constant dark cloud of debt over my head. EmpowerAid is a fantastic organization that truly lives up to its name. God bless you all.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/85.jpg"
  }
];

export default testimonials;