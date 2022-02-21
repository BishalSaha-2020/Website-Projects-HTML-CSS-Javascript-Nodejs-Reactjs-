import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
   
    articles=[
        {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Paul LeBlanc, CNN",
            "title": "Monica Lewinsky: Social media companies 'need to do better'",
            "description": "Monica Lewinsky said Tuesday that social media companies \"need to do better\" as scrutiny builds over new revelations from a Facebook whistleblower, who suggested the social media giant has been aware its platforms are used to spread hate, violence and misinfo…",
            "url": "https://www.cnn.com/2021/10/05/politics/monica-lewinsky-social-media-cnntv/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005183557-monica-lewinsky-super-tease.jpeg",
            "publishedAt": "2021-10-05T22:54:48Z",
            "content": "Washington (CNN)Monica Lewinsky said Tuesday that social media companies \"need to do better\" as scrutiny builds over new revelations from a Facebook whistleblower, who suggested the social media gian… [+2249 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Analysis by Chris Cillizza, CNN Editor-at-large",
            "title": "Why we shouldn't give Stephanie Grisham a pass",
            "description": "Stephanie Grisham is on something of a reclamation tour these days. In support of her tell-all memoir about her time in the Trump White House -- she was chief of staff to first lady Melania Trump and served as press secretary for President Donald Trump -- Gri…",
            "url": "https://www.cnn.com/2021/10/05/politics/stephanie-grisham-trump-image-rehab/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200407100829-stephanie-grisham-trump-file-super-tease.jpg",
            "publishedAt": "2021-10-05T22:30:30Z",
            "content": "THE POINT -- NOW ON YOUTUBE! \r\nIn each episode of his weekly YouTube show, Chris Cillizza will delve a little deeper into the surreal world of politics. Click to subscribe!"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Kara Scannell",
            "title": "Lev Parnas trial judge says he will question prospective jurors who have strong feelings about Trump or Giuliani",
            "description": "A federal judge overseeing the campaign finance trial of Lev Parnas said he would likely question prospective jurors about former President Donald Trump and his lawyer Rudy Giuliani as their names and images are likely to be mentioned during the three-week tr…",
            "url": "https://www.cnn.com/2021/10/05/politics/parnas-trump-giuliani-trial-jurors/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200116074540-lev-parnas-donald-trump-split-super-tease.jpg",
            "publishedAt": "2021-10-05T22:16:40Z",
            "content": "(CNN)A federal judge overseeing the campaign finance trial of Lev Parnas said he would likely question prospective jurors about former President Donald Trump and his lawyer Rudy Giuliani as their nam… [+2891 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Opinion by Sean Anderson",
            "title": "A serious question about our weirded world",
            "description": "The spreading oil spill off Huntington Beach is not a lone actor or a unique monster, writes Sean Anderson. We have been here before and will be again -- probably quite soon. Oil spills, the pandemic, wildfire smoke and more; all are thought about and dealt w…",
            "url": "https://www.cnn.com/2021/10/05/opinions/oil-spill-california-anderson/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005173550-anderson-oped-oil-spill-super-tease.jpg",
            "publishedAt": "2021-10-05T22:14:53Z",
            "content": "Sean Anderson is a professor of environmental science and resource management at California State University Channel Islands. The opinions expressed in this commentary are solely those of the author.… [+3733 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Priscilla Alvarez, CNN",
            "title": "Refugee admissions to US the lowest in 40 years",
            "description": "The United States admitted 11,411 people through the refugee admissions program in fiscal year 2021, according to the State Department, the lowest number in 40 years.",
            "url": "https://www.cnn.com/2021/10/05/politics/refugee-united-states/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210903230238-01-afg-refugees-dulles-airport-083121-super-tease.jpg",
            "publishedAt": "2021-10-05T21:58:46Z",
            "content": "(CNN)The United States admitted 11,411 people through the refugee admissions program in fiscal year 2021, according to the State Department, the lowest number in 40 years.\r\nPreviously, the lowest num… [+1888 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Amanda Jackson, CNN",
            "title": "Group of bystanders builds makeshift stretcher to help rescue an injured hiker from a Colorado mountainside",
            "description": "A family on a trip to see the fall foliage in Colorado turned into a rescue mission when they came across an injured man.",
            "url": "https://www.cnn.com/2021/10/05/us/hiker-rescued-bystanders-colorado-makeshift-stretcher-trnd/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005163247-03-colorado-hiker-rescued-by-bystanders-super-tease.jpg",
            "publishedAt": "2021-10-05T21:58:40Z",
            "content": "(CNN)A family on a trip to see the fall foliage in Colorado turned into a rescue mission when they came across an injured man.\r\nOn Sunday, Matthew Meyers, his wife, Karen, and their two young sons, C… [+2937 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Manu Raju and Lauren Fox, CNN",
            "title": "Democrats explore new options to raise debt ceiling amid deepening standoff with GOP",
            "description": "Democratic senators are scrambling to find a way to avert a potential debt default as soon as next week amid a high-stakes standoff with Republicans -- and are privately discussing whether it's possible to change Senate rules so the borrowing limit can be rai…",
            "url": "https://www.cnn.com/2021/10/05/politics/democrats-debt-ceiling-new-options/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005173428-01-schumer-capitol-1005-restricted-super-tease.jpg",
            "publishedAt": "2021-10-05T21:47:43Z",
            "content": "(CNN)Democratic senators are scrambling to find a way to avert a potential debt default as soon as next week amid a high-stakes standoff with Republicans -- and are privately discussing whether it's … [+6977 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Jamie Gumbrecht, CNN",
            "title": "Washington woman died from rare blood clotting syndrome after receiving J&J vaccine",
            "description": "A King County, Washington, woman has died from a rare blood clotting syndrome after receiving the Johnson & Johnson Covid-19 vaccine, according to a statement posted online by Public Health -- Seattle & King County.",
            "url": "https://www.cnn.com/2021/10/05/health/washington-blood-clot-vaccine-death/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210910104242-us-vaccine-doses-jj-0805-super-tease.jpg",
            "publishedAt": "2021-10-05T21:40:45Z",
            "content": "(CNN)A King County, Washington, woman has died from a rare blood clotting syndrome after receiving the Johnson &amp; Johnson Covid-19 vaccine, according to a statement posted online by Public Health … [+3622 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": null,
            "title": "CNN anchor presses Facebook executive on whistleblower claims",
            "description": "Monika Bickert, Vice President for Content Policy at Facebook, responds to the allegations made by Facebook whisteblower Frances Haugen before Congress that their algorithm is harmful to children and weakens our democracy.",
            "url": "https://www.cnn.com/videos/business/2021/10/05/monika-bickert-facebook-executive-whistleblower-testimony-sot-vpx-nr.cnn",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005165206-monika-bickert-super-tease.jpeg",
            "publishedAt": "2021-10-05T21:17:04Z",
            "content": ""
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Brandon Griggs, CNN",
            "title": "How oil spills harm birds, dolphins, sea lions and other wildlife",
            "description": "An oil spill like the one off the coast of Southern California is a disaster on many levels -- maybe none more tragic than the deadly effects of petroleum on marine life.",
            "url": "https://www.cnn.com/2021/10/05/us/oil-spills-wildlife/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005124857-01-wildlife-oil-spill-file-super-tease.jpg",
            "publishedAt": "2021-10-05T21:06:43Z",
            "content": "By Brandon Griggs, CNN\r\nUpdated 5:06 PM ET, Tue October 5, 2021\r\n (CNN)An oil spill like the one off the coast of Southern California is a disaster on many levels -- maybe none more tragic than the d… [+3805 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Leah Asmelash, CNN",
            "title": "Wisconsin's wolf hunt quota is lowered following months of conflict",
            "description": "After months of tension between hunters and environmentalists in Wisconsin, the state's Department of Natural Resources on Monday announced a limit of 130 wolves for a planned hunt in November -- a move that has upset both supporters and detractors of the hun…",
            "url": "https://www.cnn.com/2021/10/05/us/wisconsin-wolf-hunt-quota-lowered-cec/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005152641-grey-wolf-wisconsin-file-super-tease.jpg",
            "publishedAt": "2021-10-05T20:53:04Z",
            "content": "(CNN)After months of tension between hunters and environmentalists in Wisconsin, the state's Department of Natural Resources on Monday announced a limit of 130 wolves for a planned hunt in November -… [+3875 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Sarah Dean",
            "title": "Anti-Semitic graffiti found at Auschwitz, says museum",
            "description": "Anti-Semitic graffiti has been found at the Auschwitz concentration camp complex, staff from the museum said in a statement on Tuesday, denouncing the incident as \"an outrageous attack\" on the memorial site.",
            "url": "https://www.cnn.com/2021/10/05/europe/anti-semitic-graffiti-discovered-at-auschwitz-birkenau-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005144550-auschwitz-barracks-file-super-tease.jpg",
            "publishedAt": "2021-10-05T20:46:50Z",
            "content": "(CNN)Anti-Semitic graffiti has been found at the Auschwitz concentration camp complex, staff from the museum said in a statement on Tuesday, denouncing the incident as \"an outrageous attack\" on the m… [+1738 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Opinion By Mark Zuckerman and Andrew Stettner",
            "title": "Now is not time to turn our backs on the unemployed",
            "description": "Congress has a lot on its plate in the coming months. But to lose sight of the millions of our fellow Americans who remain out of work would deal a devastating blow to families and our economy, write Mark Zuckerman and Andrew Stettner of The Century Foundatio…",
            "url": "https://www.cnn.com/2021/10/05/opinions/pandemic-unemployment-benefits-stettner-zuckerman/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005140519-hiring-fair-0909-super-tease.jpg",
            "publishedAt": "2021-10-05T20:33:13Z",
            "content": "Mark Zuckerman is president of The Century Foundation and former deputy director of President Obama's Domestic Policy Council. Andrew Stettner is a senior fellow at the think tank who specializes in … [+5651 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "By Maureen O'Hare, CNN",
            "title": "World's 50 best restaurants for 2021",
            "description": "The world's 50 best restaurants for 2021 have been named at a ceremony in Antwerp. So where's the No. 1 place to dine? Head to the newly reopened Noma in Copenhagen.",
            "url": "https://www.cnn.com/travel/article/worlds-50-best-restaurants-2021/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/190625150032-noma-danish-perch-super-tease.jpg",
            "publishedAt": "2021-10-05T20:13:54Z",
            "content": "(CNN) The gentle clink of glasses, the low hum of conversation, the soft lights and appetite-whetting scents. \r\nAll were sadly missed when restaurants around the world were forced to shut their doors… [+6166 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Kristin Magaldi",
            "title": "13 makeup, hair and nail products you can get now from Amazon's Holiday Beauty Haul",
            "description": "In case you haven't heard, the holidays have come early this year at Amazon, and in addition to some early Black Friday deals happening now, the mega-retailer has officially launched a beauty sales event, too. From now until Oct. 25, Amazon's Holiday Beauty H…",
            "url": "https://www.cnn.com/2021/10/05/cnn-underscored/amazon-holiday-beauty-haul-holiday/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/211005154358-amazon-beauty-haul-lifestyle.jpg?q=x_2,y_0,h_1123,w_1995,c_crop/w_800",
            "publishedAt": "2021-10-05T19:57:29Z",
            "content": "In case you havent heard, the holidays have come early this year at Amazon, and in addition to some early Black Friday deals happening now, the mega-retailer has officially launched a beauty sales ev… [+4394 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Ella Nilsen and Liz Stark, CNN",
            "title": "California's oil spill points to another problem: Aging and deteriorating offshore oil equipment",
            "description": "America's offshore oil and gas infrastructure is aging, and becoming increasingly vulnerable to accidents, natural disasters and stronger hurricanes.",
            "url": "https://www.cnn.com/2021/10/05/us/oil-spill-aging-fossil-fuel-infrastructure-climate/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005143029-huntington-beach-off-shore-oil-platform-california-040520-file-restricted-super-tease.jpg",
            "publishedAt": "2021-10-05T19:47:28Z",
            "content": "(CNN)After a pipeline leak sent as much as 144,000 gallons of oil gushing into the ocean off the coast of California last week, energy experts pointed to another growing problem: America's offshore o… [+7125 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Opinion by Amy K. Matsui",
            "title": "The powerful message behind 'Maid'",
            "description": "Congress must seize its historic opportunity to reshape public benefits, says Amy K. Matsui, who writes that extending the expanded Child Tax Credit is a chance to invest in the real-life Americans whose lives mirror those in Netflix's \"Maid\" -- instead of fu…",
            "url": "https://www.cnn.com/2021/10/05/opinions/maid-stephanie-land-biden-child-tax-credit-matsui/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210928201054-01-maid-netflix-super-tease.jpg",
            "publishedAt": "2021-10-05T19:26:38Z",
            "content": "Amy K. Matsui is director of Income Security and senior counsel at the National Women's Law Center. She works on a broad range of economic issues affecting low- and moderate-income women and families… [+6289 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Chris Isidore, CNN Business",
            "title": "Former Tesla contractor awarded $137 million in racial harassment suit",
            "description": "A former worker at Tesla's Fremont, California, factory was subjected to a racially hostile workplace, according to a federal jury, which awarded him $136.9 million in damages Monday.",
            "url": "https://www.cnn.com/2021/10/05/business/tesla-racial-harassment-jury-verdict/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005115227-01-tesla-fremont-factory-file-super-tease.jpg",
            "publishedAt": "2021-10-05T19:05:11Z",
            "content": "New York (CNN Business)A former worker at Tesla's Fremont, California, factory was subjected to a racially hostile workplace, according to a federal jury, which awarded him $136.9 million in damages … [+4424 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "By Pete Muntean and Gregory Wallace, CNN",
            "title": "Unruly passenger incidents rising again, FAA data shows",
            "description": "Unruly passenger incidents are rising again, new Federal Aviation Administration numbers show. Flight crews reported 128 new incidents in the past week, the highest in two and half months.",
            "url": "https://www.cnn.com/travel/article/unruly-passengers-faa/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210924115047-airport-travel-0903-file-super-tease.jpg",
            "publishedAt": "2021-10-05T18:42:40Z",
            "content": "(CNN) Unruly passenger incidents are rising again, new Federal Aviation Administration numbers show. \r\nFAA figures released Tuesday show more disruptions on commercial flights in the past week than a… [+2673 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "By Inke Kappeler, CNN",
            "title": "German hotel investigating after Jewish musician says he was discriminated against",
            "description": "A hotel in Germany has launched an investigation and suspended employees after musician Gil Ofarim, who is Jewish, alleged he was discriminated against on Monday because he was prominently wearing a Star of David necklace.",
            "url": "https://www.cnn.com/travel/article/germany-hotel-discrimination-gil-ofarim/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005135726-gil-ofarim-0819-restricted-super-tease.jpg",
            "publishedAt": "2021-10-05T18:23:19Z",
            "content": "(CNN) A hotel in Germany has launched an investigation and suspended employees after musician Gil Ofarim, who is Jewish, alleged he was discriminated against on Monday because he was prominently wear… [+1199 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "By Inke Kappeler, CNN",
            "title": "German hotel investigating after Jewish musician says he was discriminated against",
            "description": "A hotel in Germany has launched an investigation and suspended employees after musician Gil Ofarim, who is Jewish, alleged he was discriminated against on Monday because he was prominently wearing a Star of David necklace.",
            "url": "https://www.cnn.com/travel/article/germany-hotel-discrimination-gil-ofarim/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005135726-gil-ofarim-0819-restricted-super-tease.jpg",
            "publishedAt": "2021-10-05T18:23:19Z",
            "content": "(CNN) A hotel in Germany has launched an investigation and suspended employees after musician Gil Ofarim, who is Jewish, alleged he was discriminated against on Monday because he was prominently wear… [+1199 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Analysis by Chris Cillizza, CNN Editor-at-large",
            "title": "Donald Trump is no longer one of Forbes' 400 richest people in America",
            "description": "Donald Trump takes tremendous pride in being rich. Just ask him.",
            "url": "https://www.cnn.com/2021/10/05/politics/donald-trump-forbes-400-rich/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/190113201916-donald-trump-speaking-jan-9-super-tease.jpg",
            "publishedAt": "2021-10-05T18:00:53Z",
            "content": "THE POINT -- NOW ON YOUTUBE! \r\nIn each episode of his weekly YouTube show, Chris Cillizza will delve a little deeper into the surreal world of politics. Click to subscribe!"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Brynn Gingras, Sonia Moghe and Mark Morales, CNN",
            "title": "FBI raids headquarters of NYPD sergeants union and home of its president",
            "description": "The FBI on Tuesday raided the headquarters of the New York Police Department's second largest union and the home of the union's outspoken president, multiple people confirmed to CNN.",
            "url": "https://www.cnn.com/2021/10/05/us/nypd-sergeants-union-fbi-raid/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005133017-01-ed-mullins-sergeants-benevolent-association-file-super-tease.jpg",
            "publishedAt": "2021-10-05T17:48:51Z",
            "content": "(CNN)The FBI on Tuesday raided the headquarters of the New York Police Department's second largest union and the home of the union's outspoken president, multiple people confirmed to CNN. \r\nNew York … [+1318 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Paul R. La Monica, CNN Business",
            "title": "Don't worry (too much) about an October market crash",
            "description": "October has often been a spooky month on Wall Street. Stocks famously crashed in October 1929, 1987 and, most recently, 2008.",
            "url": "https://www.cnn.com/2021/10/05/investing/october-stocks/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005081147-01-nyse-1004-super-tease.jpg",
            "publishedAt": "2021-10-05T17:42:13Z",
            "content": "New York (CNN Business)October has often been a spooky month on Wall Street. Stocks famously crashed in October 1929, 1987 and, most recently, 2008. \r\nBut the market isn't always a terrifying place t… [+2644 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Opinion by Pete Stauffer",
            "title": "Opinion: California oil spill is heartbreaking",
            "description": "The oil spill disaster unfolding off the coast of Orange County, California, is just the latest example of the damaging effects of offshore drilling. The spill, estimated by officials to be at least 144,000 gallons, is devastating to birds, fish, marine mamma…",
            "url": "https://www.cnn.com/2021/10/05/opinions/us-must-ban-offshore-oil-drilling-stauffer/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005125306-08-wildlife-oil-spill-file-super-tease.jpg",
            "publishedAt": "2021-10-05T17:13:42Z",
            "content": "Pete Stauffer is Environmental Director of the Surfrider Foundation, non-profit organizations dedicated to the protection and enjoyment of the world's ocean, waves and beaches. The opinions expressed… [+4582 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Eva McKend, CNN",
            "title": "Black voters were central to Terry McAuliffe winning Virginia in 2013. Will they help him again?",
            "description": "Back in 2013, Terry McAuliffe won a majority of Black voters when he sought -- and ultimately won -- the top office in Virginia.",
            "url": "https://www.cnn.com/2021/10/05/politics/terry-mcauliffe-black-voters/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005095006-01-terry-mcauliffe-0608-super-tease.jpg",
            "publishedAt": "2021-10-05T17:12:34Z",
            "content": "Washington (CNN)Back in 2013, Terry McAuliffe won a majority of Black voters when he sought -- and ultimately won -- the top office in Virginia.\r\nAs he vies for a second term as the Commonwealth's go… [+12037 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Paula Reid",
            "title": "Gaetz associate asks to delay sentencing, continues to cooperate with federal investigation",
            "description": "A lawyer for Joel Greenberg, the former Florida tax collector with close ties to Rep. Matt Gaetz, has asked a federal judge to delay his federal sentencing for the second time while he continues to cooperate with the federal government.",
            "url": "https://www.cnn.com/2021/10/05/politics/gaetz-greenberg-sentencing-delay/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005124935-joel-greenberg-restricted-super-tease.jpg",
            "publishedAt": "2021-10-05T16:52:21Z",
            "content": "(CNN)A lawyer for Joel Greenberg, the former Florida tax collector with close ties to Rep. Matt Gaetz, has asked a federal judge to delay his federal sentencing for the second time while he continues… [+2467 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Ali Zaslav and Clare Foran, CNN",
            "title": "Schumer warns on debt ceiling: 'It's not too late, but it's getting dangerously close'",
            "description": "Senate Majority Leader Chuck Schumer warned on Tuesday that action must be taken soon to avert a debt limit crisis, saying in a floor speech, \"it's not too late, but it's getting dangerously close,\" as a key deadline looms on October 18.",
            "url": "https://www.cnn.com/2021/10/05/politics/debt-ceiling-congress-latest/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005123445-01-chuck-schumer-1004-restricted-super-tease.jpg",
            "publishedAt": "2021-10-05T16:46:33Z",
            "content": "(CNN)Senate Majority Leader Chuck Schumer warned on Tuesday that action must be taken soon to avert a debt limit crisis, saying in a floor speech, \"it's not too late, but it's getting dangerously clo… [+2140 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Analysis by Allison Morrow, CNN Business",
            "title": "Facebook revelations are shocking. But nothing will change until Congress acts",
            "description": "After a roller coaster 24 hours for Facebook — in which a whistleblower lodged damning claims at at the site, its stock fell 5% and the company suffered a more than five-hour outage across its most popular apps — the spotlight has shifted to Congress and what…",
            "url": "https://www.cnn.com/2021/10/05/tech/facebook-congress-whistleblower-analysis/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004134847-us-capitol-1004-restricted-super-tease.jpg",
            "publishedAt": "2021-10-05T16:28:06Z",
            "content": "New York (CNN Business)After a roller coaster 24 hours for Facebook in which a whistleblower lodged damning claims at at the site, its stock fell 5% and the company suffered a more than five-hour out… [+4518 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Jacqui Palumbo, CNN",
            "title": "Bretman Rock is Playboy's first openly gay male cover star",
            "description": "Donning the iconic Playboy bunny ears, the Filipino beauty influencer says, \"It's all so surreal.\"",
            "url": "https://www.cnn.com/style/article/bretman-rock-playboy-cover/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005112325-04-bretman-rock-playboy-super-tease.jpg",
            "publishedAt": "2021-10-05T16:12:49Z",
            "content": "Bretman Rock has donned Playboy's famed bunny ears and become the first out gay man to star on its cover.\r\nThe 23-year-old Filipino beauty influencer, who rose to fame on YouTube before landing his o… [+2150 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Lisa Respers France, CNN",
            "title": "Daniel Craig explains why 'No Time to Die' is best experienced in a theater",
            "description": "Daniel Craig knows that with all the global challenges of the pandemic, \"everything has to be put in perspective.\" That includes Hollywood blockbusters like his final Jame Bond film, \"No Time to Die.\"",
            "url": "https://www.cnn.com/2021/10/05/entertainment/daniel-craig-no-time-cast/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210928155359-mttd-thumb-1-super-tease.jpg",
            "publishedAt": "2021-10-05T16:09:29Z",
            "content": "(CNN)Daniel Craig knows that with all the global challenges of the pandemic, \"everything has to be put in perspective.\" That includes Hollywood blockbusters like his final Jame Bond film, \"No Time to… [+2291 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Jacob Krol",
            "title": "Amazon's new smart soap dispenser is better in theory than practice",
            "description": "In terms of Amazon products that work with Alexa, we've seen smart clocks, microwaves, wall plugs and, now, a smart soap dispenser.",
            "url": "https://www.cnn.com/2021/10/05/cnn-underscored/amazon-smart-soap-dispenser/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/211005113440-1-amazon-smart-soap-dispenser.jpg?q=x_2,y_0,h_900,w_1599,c_crop/w_800",
            "publishedAt": "2021-10-05T16:00:44Z",
            "content": "In terms of Amazon products that work with Alexa, weve seen smart clocks, microwaves, wall plugs and, now, a smart soap dispenser. \r\nIts helpful to a degree, but its also a reminder that not everythi… [+4445 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Anneken Tappe",
            "title": "Dow jumps more than 400 points as stocks attempt rebound",
            "description": "Stocks staged a rebound Tuesday, rallying across the board as Wall Street tries to bounce back from a sell-off at the start of the week.",
            "url": "https://www.cnn.com/2021/10/05/investing/dow-stock-market-today/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005115029-02-nyse-1004-super-tease.jpg",
            "publishedAt": "2021-10-05T15:58:47Z",
            "content": "New York (CNN Business)Stocks staged a rebound Tuesday, rallying across the board as Wall Street tries to bounce back from a sell-off at the start of the week.\r\nAround midday, the Dow(INDU) was up so… [+2188 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Krystin Arneson",
            "title": "Brooklinen just launched the coziest slippers and socks for fall — and they're on sale",
            "description": "It's getting to be the season for cozy slippers and socks, and Brooklinen is here for us just in time for chillier temperatures.",
            "url": "https://www.cnn.com/2021/10/05/cnn-underscored/brooklinen-slippers-socks-launch/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/211005114003-brooklinen-slippers-socks-launch-lead.jpg?q=x_0,y_0,h_900,w_1599,c_fill/w_800",
            "publishedAt": "2021-10-05T15:51:24Z",
            "content": "Its getting to be the season for cozy slippers and socks, and Brooklinen is here for us just in time for chillier temperatures. The brands linensheets are some of our favorites, and now the brand has… [+1033 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Amy Woodyatt, CNN",
            "title": "'Korean wave' sweeps Oxford English Dictionary as new words are added",
            "description": "Korean exports seem to be sweeping the world's screens, headsets and runways -- and now more than 20 words of Korean origin have been added to the Oxford English Dictionary (OED) in its September update.",
            "url": "https://www.cnn.com/2021/10/05/asia/korean-words-oed-intl-scli/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005105807-01-bts-file-super-tease.jpg",
            "publishedAt": "2021-10-05T15:27:19Z",
            "content": "(CNN)Korean exports seem to be sweeping the world's screens, headsets and runways -- and now more than 20 words of Korean origin have been added to the Oxford English Dictionary (OED) in its Septembe… [+2489 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Walé Azeez, CNN Business",
            "title": "Boris Johnson isn't worried about the UK economy. He should be",
            "description": "The UK economy is facing fuel shortages, empty supermarket shelves, rising inflation and slowing growth, all part of the transition to a new post-Brexit economic model, says Prime Minister Boris Johnson. So is UK the fastest growing economy in the G7 and are …",
            "url": "https://www.cnn.com/2021/10/05/business/boris-johnson-uk-economy-growth/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004105537-boris-johnson-1004-super-tease.jpg",
            "publishedAt": "2021-10-05T15:11:56Z",
            "content": "London (CNN Business)The United Kingdom is suffering from fuel shortages, gaps on supermarket shelves, rising inflation and slowing economic growth. Prime Minister Boris Johnson insists he isn't worr… [+5609 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Scottie Andrew, CNN",
            "title": "A Florida teen makes history as her high school's first trans homecoming queen",
            "description": "Evan Bialosuknia's peers voted for her to be their homecoming queen, the first transgender student at Olympia High School to wear the crown. She said her crowning has made her feel more at home at school.",
            "url": "https://www.cnn.com/2021/10/05/us/transgender-homecoming-queen-florida-cec/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005093400-01-first-trans-homecoming-queen-florida-cec-super-tease.jpg",
            "publishedAt": "2021-10-05T15:04:47Z",
            "content": "(CNN)In a metallic gold gown, her dual-toned hair curled into effortless waves, Evan Bialosuknia looked every bit the undisputed queen of her high school homecoming. \r\nShe'd been nominated to her Orl… [+3104 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Kaitlyn McInnis",
            "title": "14 spooky and sweet Halloween costumes that'll fit over a snowsuit",
            "description": "The change of seasons typically means cooler nights, the slow turn of leaves and a gentle breeze in the air as winter appears on the horizon — but residents of certain parts of Canada know all too well that the shift between summer and fall can sometimes lead…",
            "url": "https://www.cnn.com/2021/10/05/cnn-underscored/ca-halloween-costumes-snow/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/210930093217-ca-halloween-costumes-snow-lead.jpg?q=x_0,y_0,h_900,w_1601,c_crop/w_800",
            "publishedAt": "2021-10-05T15:01:29Z",
            "content": "The change of seasons typically means cooler nights, the slow turn of leaves and a gentle breeze in the air as winter appears on the horizon but residents of certain parts of Canada know all too well… [+6891 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Chelsea Stone and Kristin Magaldi",
            "title": "The best sales to shop today: Samsung, Puma, Parade and more",
            "description": "Today, you'll find a deal on the newest version of pick for best mesh Wi-Fi system, discounted Parade underwear and bralettes and savings on giant Halloween decorations at Best Buy. All that and more below.",
            "url": "https://www.cnn.com/2021/10/05/cnn-underscored/best-online-sales-right-now/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/211005071204-1005dealslead.jpg?q=x_0,y_0,h_1080,w_1919,c_fill/w_800",
            "publishedAt": "2021-10-05T14:41:19Z",
            "content": "Today, youll find a deal on the newest version of pick for best mesh Wi-Fi system, discounted Parade underwear and bralettes and savings on giant Halloween decorations at Best Buy. All that and more … [+9529 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Analysis by Chris Cillizza, CNN Editor-at-large",
            "title": "Mike Pence just said something absolutely ridiculous about January 6",
            "description": "Mike Pence showed Monday night that he is willing to say almost anything to get back in Donald Trump's good graces.",
            "url": "https://www.cnn.com/2021/10/05/politics/mike-pence-january-6-sean-hannity/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210920214947-02-trump-pence-file-2020-super-tease.jpg",
            "publishedAt": "2021-10-05T14:23:42Z",
            "content": "THE POINT -- NOW ON YOUTUBE! \r\nIn each episode of his weekly YouTube show, Chris Cillizza will delve a little deeper into the surreal world of politics. Click to subscribe!"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Devan Cole, CNN",
            "title": "Bipartisan group urges California bar to open investigation into pro-Trump lawyer who tried to convince Pence to overturn election",
            "description": "A bipartisan group of former public officials and lawyers are urging the California bar association to investigate a conservative lawyer who reportedly tried to convince then-Vice President Mike Pence that he could overturn the election results on January 6.",
            "url": "https://www.cnn.com/2021/10/05/politics/john-eastman-california-bar-complaint/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004231150-john-eastman-file-010621-super-tease.jpg",
            "publishedAt": "2021-10-05T14:06:35Z",
            "content": "Washington (CNN)A bipartisan group of former public officials and lawyers are urging the California bar association to investigate a conservative lawyer who reportedly tried to convince then-Vice Pre… [+3875 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Tanya Edwards and Tanya Edwards",
            "title": "Everything you need to groom your own brows at home",
            "description": "Whether it's been a minute since your last eyebrow appointment, or you've been meaning to do them yourself, we talked to experts about everything you need to do your eyebrows at home just the way they do.",
            "url": "https://www.cnn.com/2021/10/05/cnn-underscored/how-to-do-your-eyebrows/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/211001134031-how-to-do-your-eyebrows-lead.jpg?q=x_0,y_0,h_900,w_1601,c_fill/w_800",
            "publishedAt": "2021-10-05T13:57:33Z",
            "content": "To help you achieve the perfect brow look at home, we got experts to share their tips and tricks, along with all the tools youll need to tidy or fix your eyebrows. We checked in with Joey Healy, cele… [+8888 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Marianne Garvey, CNN",
            "title": "Alan Kalter, 'Late Show with David Letterman' announcer, dies at 78",
            "description": "Alan Kalter, the announcer on \"Late Show With David Letterman,\" has died, according to Rabbi Joshua Hammerman of Temple Beth El in Connecticut.",
            "url": "https://www.cnn.com/2021/10/05/entertainment/alan-kalter-late-show-announcer/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005092040-01-alan-kalter-file-super-tease.jpg",
            "publishedAt": "2021-10-05T13:56:15Z",
            "content": "(CNN)Alan Kalter, the announcer on \"Late Show With David Letterman,\" has died, according to Rabbi Joshua Hammerman of Temple Beth El in Connecticut.\r\n\"Alan died peacefully on Monday, surrounded by fa… [+1514 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Kylie Atwood, CNN",
            "title": "Blinken meets with Macron and senior French leaders amid tensions",
            "description": "Secretary of State Tony Blinken met with French Foreign Minister Jean-Yves Le Drian and French President Emmanuel Macon in Paris Tuesday amid tensions between the two countries.",
            "url": "https://www.cnn.com/2021/10/05/politics/blinken-france-macron-ledrian-day-one/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005090156-01-blinken-paris-1005-super-tease.jpg",
            "publishedAt": "2021-10-05T13:54:29Z",
            "content": "(CNN)Secretary of State Tony Blinken met with French Foreign Minister Jean-Yves Le Drian and French President Emmanuel Macon in Paris Tuesday amid tensions between the two countries.\r\nA senior State … [+3106 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Kiana Murden",
            "title": "Looking for fall nail inspo? Here are some stunning colors and designs to try yourself",
            "description": "Fall is officially here! And if you want your manicure to reflect the season, we spoke with manicurists about their favorite nail polishes and designs to try out this year.",
            "url": "https://www.cnn.com/2021/10/05/cnn-underscored/fall-nail-ideas/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/211004160433-fall-nail-ideas-lead.jpg?q=x_0,y_0,h_1407,w_2500,c_fill/w_800",
            "publishedAt": "2021-10-05T13:30:30Z",
            "content": "Bring on the crunchy leaves, cozy vibes, warm scents and hearty food fall is officially here! While youre planning your fall candle buy and shopping for new sweatsuits or leather jackets, consider ho… [+12846 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Analysis by Chris Cillizza, CNN Editor-at-large",
            "title": "Donald Trump's allies are going to make America great again. Again. Seriously.",
            "description": "When the press release showed up in my email inbox, I assumed it was a parody.",
            "url": "https://www.cnn.com/2021/10/05/politics/donald-trump-super-pac/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210914123622-01-trump-fist-file-super-tease.jpg",
            "publishedAt": "2021-10-05T13:16:20Z",
            "content": "THE POINT -- NOW ON YOUTUBE! \r\nIn each episode of his weekly YouTube show, Chris Cillizza will delve a little deeper into the surreal world of politics. Click to subscribe!"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Michael Andronico",
            "title": "Microsoft Surface Go 3 review: Is the cheapest Surface actually a good value?",
            "description": "The Microsoft Surface Go 3 packs a full Windows experience into a highly portable design, but its bogged down by subpar performance and pricey add-ons.",
            "url": "https://www.cnn.com/2021/10/05/cnn-underscored/microsoft-surface-go-3-review/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/211004191314-underscored-surface-go-3-review-lead.jpg?q=x_0,y_0,h_1921,w_3415,c_fill/w_800",
            "publishedAt": "2021-10-05T13:00:28Z",
            "content": "The Surface Go 3 is the latest entry-level member of Microsofts PC lineup, packing a full Windows 11 experience into a small tablet that can also transform into a laptop. But while the Go 3 is the ch… [+12011 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "By <a href=\"/profiles/clare-duffy\">Clare Duffy</a>, <a href=\"/profiles/samantha-murphy-kelly\">Samantha Murphy Kelly</a>, Mike Hayes, Melissa Macaya and <a href=\"/profiles/veronica-rocha\">Veronica Rocha</a>, CNN",
            "title": "Facebook whistleblower testifies in Congress",
            "description": "The Facebook whistleblower who released tens of thousands of pages of internal research and documents will testify today before a Senate subcommittee about the company's impact on kids. Follow here for the latest news.",
            "url": "https://www.cnn.com/business/live-news/facebook-senate-hearing-10-05-21/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211003205150-facebook-whistleblower-60-minutes-algorithm-profit-stelter-sot-nr-vpx-00000411-super-tease.jpeg",
            "publishedAt": "2021-10-05T12:59:40Z",
            "content": "The Facebook whistleblower who released tens of thousands of pages of internal research and documents indicating the company was aware of various problems caused by its apps, including Instagram's po… [+1803 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Review by Brian Lowry, CNN",
            "title": "'Fauci' celebrates a life marked by public service -- and more recently, political attacks",
            "description": "\"Fauci\" celebrates a life devoted to public service and the politicization of the response to Covid-19, in roughly that order. A National Geographic presentation premiering on Disney+, the documentary was shot with Dr. Anthony Fauci's cooperation (but not his…",
            "url": "https://www.cnn.com/2021/10/05/entertainment/fauci-review/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004135913-01-fauci-nat-geo-disney-super-tease.jpg",
            "publishedAt": "2021-10-05T12:51:36Z",
            "content": "(CNN)\"Fauci\" celebrates a life devoted to public service and the politicization of the response to Covid-19, in roughly that order. A National Geographic presentation premiering on Disney+, the docum… [+3051 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Analysis by Brian Lowry, CNN",
            "title": "'Squid Game' sets off a new game, trying to figure out why it took off on Netflix",
            "description": "\"Squid Game\" has set off its own Hollywood-centric game -- trying to explain how (or really, guess why) a South Korean drama that arrived with virtually no fanfare has become what Netflix is billing as possibly its \"biggest show ever.\"",
            "url": "https://www.cnn.com/2021/10/05/entertainment/squid-game-analysis/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210929133837-squid-game-netflix-03-super-tease.jpeg",
            "publishedAt": "2021-10-05T12:48:36Z",
            "content": "The following story contains minor spoilers about the Netflix series \"Squid Game.\"\r\n (CNN)\"Squid Game\" has set off its own Hollywood-centric game -- trying to explain how (or really, guess why) a Sou… [+4290 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Maeve Reston, CNN",
            "title": "A strong gasoline odor. Plumes of oil. And now California's coastal residents brace for damage",
            "description": "The oil spill off the coast of Orange County is a slow-moving disaster that is still hard for many residents to detect with the naked eye.",
            "url": "https://www.cnn.com/2021/10/05/us/california-oil-spill-local-residents/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005022241-07-california-oil-spill-kg-super-tease.jpg",
            "publishedAt": "2021-10-05T12:14:21Z",
            "content": "Newport Beach, California (CNN)The oil spill off the coast of Orange County is a slow-moving disaster that is still hard for many residents to detect with the naked eye.\r\nAs officials expanded their … [+10405 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Jen Christensen",
            "title": "Vaccines may have led to over a quarter-million Covid-19 fewer cases and 39,000 deaths among seniors",
            "description": "Vaccines may have led to over a quarter-million Covid-19 fewer cases and 39,000 deaths among seniorscnn.com",
            "url": "https://www.cnn.com/2021/10/05/health/covid-vaccines-reduce-senior-deaths/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004202435-florida-seniors-vaccine-file-super-tease.jpg",
            "publishedAt": "2021-10-05T12:08:05Z",
            "content": "(CNN)Before vaccines, the San Francisco Department of Public Health needed three whiteboards to capture all the names of senior facilities that had Covid-19 outbreaks. \r\n\"We had been dealing with out… [+4240 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Sherry Liang, CNN",
            "title": "Kirsten Dunst opens doors to her charming LA ranch house",
            "description": "With references to her career-defining roles and smatterings of family heirlooms, the personal touches throughout Dunst's 1930s ranch house help make it more than just a beautiful space.",
            "url": "https://www.cnn.com/style/article/kirsten-dunst-home-architectural-digest/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005125308-ad-kirstin-dunst-homepage-super-tease.jpg",
            "publishedAt": "2021-10-05T12:05:40Z",
            "content": "With references to her career-defining roles and smatterings of family heirlooms, the personal touches throughout Dunst's 1930s ranch house make it more than just a beautiful space.\r\nA Frits Hennings… [+2485 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Samantha Murphy Kelly and Clare Duffy, CNN Business",
            "title": "Facebook whistleblower to testify in Senate hearing about company's impact on kids",
            "description": "The Facebook whistleblower who released tens of thousands of pages of internal research and documents indicating the company was aware of various problems caused by its apps, including Instagram's potential \"toxic\" effect on teen girls, is set to testify at a…",
            "url": "https://www.cnn.com/2021/10/05/tech/facebook-whistleblower-testify/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211003205015-02-frances-haugen-60-minutes-10-03-2021-super-tease.jpg",
            "publishedAt": "2021-10-05T11:34:32Z",
            "content": "(CNN Business)The Facebook whistleblower who released tens of thousands of pages of internal research and documents indicating the company was aware of various problems caused by its apps, including … [+4745 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Dr. Sanjay Gupta, CNN Chief Medical Correspondent",
            "title": "Dr. Sanjay Gupta: Pandemic proofing your life is not what you think",
            "description": "Pandemic proofing your life is easier than you think, and it's not about building a bunker or megadosing on supplements and waiting white-knuckled for the next booster shot. A remarkable suit of armor is already within you.",
            "url": "https://www.cnn.com/2021/10/05/health/sanjay-gupta-pandemic-proof-wwc-wellness/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210920132503-blurred-background---sanjay-gupta-world-war-c-book-super-tease.jpg",
            "publishedAt": "2021-10-05T11:18:26Z",
            "content": "CNN Chief Medical Correspondent Dr. Sanjay Gupta is a practicing neurosurgeon and the author of the new book \"World War C: Lessons from the Covid-19 Pandemic and How to Prepare for the Next One.\"\r\n (… [+7865 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Katie Lobosco, CNN",
            "title": "Big changes are coming to the 'broken' Public Service Loan Forgiveness program",
            "description": "Education Secretary Miguel Cardona is set to announce big changes this week to a federal student loan forgiveness program that aims to provide government and nonprofit workers significant relief but has caused widespread confusion, leaving many people with th…",
            "url": "https://www.cnn.com/2021/10/05/politics/public-service-loan-forgiveness-changes/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004135823-graduation-2021-restricted-super-tease.jpg",
            "publishedAt": "2021-10-05T11:03:22Z",
            "content": "Washington (CNN)Education Secretary Miguel Cardona is set to announce big changes this week to a federal student loan forgiveness program that aims to provide government and nonprofit workers signifi… [+4729 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "AJ Willingham, CNN",
            "title": "5 things to know for October 5: Congress, Pandora Papers, coronavirus, church abuse, China",
            "description": "Here's what else you need to know to Get Up to Speed and On with Your Day.",
            "url": "https://www.cnn.com/2021/10/05/us/five-things-october-5-trnd/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005051137-01-us-capitol-washington-0930-super-tease.jpg",
            "publishedAt": "2021-10-05T10:42:09Z",
            "content": "(CNN)California Gov. Gavin Newsom declared a state of emergency yesterday in response to the oil spill currently coating parts of the Southern California coast. Though teams are working to contain th… [+5637 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Maggie Fox",
            "title": "Johnson & Johnson asks FDA to authorize Covid-19 vaccine booster shots",
            "description": "Johnson & Johnson has asked the FDA to authorize booster shots for its coronavirus vaccine, but has left it up to the FDA and the US Centers for Disease Control and Prevention to decide just who should get their boosters and when.",
            "url": "https://www.cnn.com/2021/10/05/health/johnson-covid-vaccine-boosters-eua-request/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004155429-johnson-and-johnson-covid-vaccine-0819-super-tease.jpg",
            "publishedAt": "2021-10-05T10:32:43Z",
            "content": "(CNN)Johnson &amp; Johnson said Tuesday it has asked the US Food and Drug Administration to authorize booster shots for its coronavirus vaccine, but has left it up to the FDA and the US Centers for D… [+3050 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Opinion by Kara Alaimo",
            "title": "How to protect ourselves against Facebook's failures",
            "description": "Kara Alaimo writes that if we're not going to abandon Facebook and similar platforms en masse -- which, let's face it, is not likely to happen-- it's time to devise ways to protect ourselves and our loved ones.",
            "url": "https://www.cnn.com/2021/10/05/opinions/facebook-whistleblower-what-users-should-know-alaimo/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211003205150-facebook-whistleblower-60-minutes-algorithm-profit-stelter-sot-nr-vpx-00000411-super-tease.jpeg",
            "publishedAt": "2021-10-05T10:06:32Z",
            "content": "Kara Alaimo, an associate professor of public relations at Hofstra University, is the author of \"Pitch, Tweet, or Engage on the Street: How to Practice Global Public Relations and Strategic Communica… [+6986 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Harry Enten, CNN",
            "title": "Couples sleeping apart aren't just in 'I Love Lucy' anymore",
            "description": "Let me tell you a quick little story. About five years ago, I was dating someone, and we had some difficulty getting on the same page at bedtime. We decided that we'd try sleeping separately.",
            "url": "https://www.cnn.com/2021/10/05/politics/harry-enten-podcast-margins-of-error-couples-sleeping-wellness/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004165856-sleeping-separate-stock-super-tease.jpg",
            "publishedAt": "2021-10-05T10:04:08Z",
            "content": "(CNN)Let me tell you a quick little story. About five years ago, I was dating someone, and we had some difficulty getting on the same page at bedtime. We decided that we'd try sleeping separately. \r\n… [+2224 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "By Masrur Jamaluddin and Lilit Marcus, CNN",
            "title": "Bali to reopen to international flights",
            "description": "Arrivals from select list of countries will be allowed after October 14, potentially signaling the island is preparing to revive its Covid-battered tourist industry.",
            "url": "https://www.cnn.com/travel/article/bali-denpasar-airport-reopening-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004211932-kuta-beach-bali-092621-super-tease.jpg",
            "publishedAt": "2021-10-05T09:54:11Z",
            "content": "Jakarta (CNN) The Indonesian island of Bali is to reopen its airport to international arrivals this month, officials have announced, signaling that the country is potentially ready to revive its tour… [+2424 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Amy Woodyatt, CNN",
            "title": "Marc Pilcher, 'Bridgerton' Emmy winner, dies age 53",
            "description": "Marc Pilcher, the award-winning hair stylist and makeup designer who won an Emmy for his work on the hit Netflix show \"Bridgerton,\" has died of Covid-19 at the age of 53, weeks after winning the award.",
            "url": "https://www.cnn.com/style/article/marc-pilcher-bridgerton-intl-scli/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005042923-01-marc-pilcher-emmys-2021-super-tease.jpg",
            "publishedAt": "2021-10-05T09:46:48Z",
            "content": "beautyPublished 5th October 2021\r\nMarc Pilcher, the award-winning hair stylist and makeup designer who won an Emmy for his work on the hit Netflix show \"Bridgerton,\" has died of Covid-19 at the age o… [+1546 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Kristen Rogers, CNN",
            "title": "How to rebuild trust in your relationships",
            "description": "Trust is critical for social relationships, and trying to rebuild trust you broke might seem impossible. But all hope isn't lost: Experts advise what you should do to mend your relationship, which could help the bond grow stronger than ever.",
            "url": "https://www.cnn.com/2021/10/05/health/how-to-rebuild-trust-in-relationships-wellness/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004174722-01-broken-trust-wellness-stock-super-tease.jpg",
            "publishedAt": "2021-10-05T08:43:26Z",
            "content": "(CNN)Since trust is fundamental to relationships, trying to restore the feeling once it's lost might seem impossible. But if you're the offender in a breakdown of trust, know that all hope might not … [+5479 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Analysis by John Duffy, CNN",
            "title": "Instagram's grim appeal as a silent self-esteem breaker",
            "description": "Therapist John Duffy argues that Instagram's potential upside is far outweighed by the emotional risks to teens and tweens using the social media platform.",
            "url": "https://www.cnn.com/2021/10/05/health/instagram-self-esteem-parenting-wellness/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210915102012-instagram-photo-illustration-super-tease.jpg",
            "publishedAt": "2021-10-05T08:33:01Z",
            "content": "Psychologist John Duffy, author of \"Parenting the New Teen in the Age of Anxiety,\" practices in Chicago. He specializes in work with teens, parents, couples and families. \r\n (CNN)One 17-year-old girl… [+7582 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Madeline Holcombe, CNN",
            "title": "Covid-19 cases are declining but remain high among children. Here's what the US needs to do to end the surge",
            "description": "After weeks of a troubling Covid-19 surge across the US, infection rates are finally on the decline -- but experts say there's still work to be done before the tide can be turned, especially when cases remain exceptionally high among children.",
            "url": "https://www.cnn.com/2021/10/05/health/us-coronavirus-tuesday/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005031625-covid-vaccination-0924-rhode-island-super-tease.jpg",
            "publishedAt": "2021-10-05T07:58:54Z",
            "content": "(CNN)After weeks of a troubling Covid-19 surge across the US, infection rates are finally on the decline -- but experts say there's still work to be done before the tide can be turned, especially whe… [+4597 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "George Ramsay, CNN",
            "title": "Premier League footballers offered 'bespoke quarantine facilities' after international break, but Jurgen Klopp says it's 'not a real solution'",
            "description": "With another round of international matches looming in the football calendar, questions about players being released to represent their countries remain a headache for the Premier League.",
            "url": "https://www.cnn.com/2021/10/05/football/football-international-break-premier-league-spt-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004104406-jrgen-klopp-0928-super-tease.jpg",
            "publishedAt": "2021-10-05T07:48:12Z",
            "content": "(CNN)With another round of international matches looming in the football calendar, questions about players being released to represent their countries remain a headache for the Premier League.\r\nUnder… [+4356 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Simon Bouvier and Saskya Vandoorne, CNN",
            "title": "More than 200,000 minors estimated to have been sexually abused by French Catholic clergy, inquiry chief says",
            "description": "Members of the Catholic clergy sexually abused more than 200,000 minors in France over the last seven decades, a survey carried out as part of an independent probe into abuse within the church estimates, according to the head of the commission that produced t…",
            "url": "https://www.cnn.com/2021/10/05/europe/france-catholic-church-abuse-report-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004182631-hands-rosary-beads-church-stock-super-tease.jpg",
            "publishedAt": "2021-10-05T07:41:22Z",
            "content": "Paris (CNN)Members of the Catholic clergy sexually abused more than 200,000 minors in France over the last seven decades, a survey carried out as part of an independent probe into abuse within the ch… [+2121 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Alexandra Meeks, CNN",
            "title": "Amplify Energy faces possible class-action lawsuit after Southern California oil spill",
            "description": "A Southern California DJ, who said he will lose substantial business because of an oil spill off the coast of Orange County, filed a lawsuit Monday against the operator of the pipeline and its affiliated companies.",
            "url": "https://www.cnn.com/2021/10/05/us/california-oil-spill-lawsuit/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005022228-01-california-oil-spill-kg-super-tease.jpg",
            "publishedAt": "2021-10-05T07:30:39Z",
            "content": "(CNN)A Southern California DJ, who said he will lose substantial business because of an oil spill off the coast of Orange County, filed a lawsuit Monday against the operator of the pipeline and its a… [+4125 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Story by Reuters",
            "title": "Son of Bollywood superstar Shah Rukh Khan in custody in drugs probe",
            "description": "A Mumbai court sent the 23-year-old son of Bollywood star Shah Rukh Khan to three days' custody on Monday, a lawyer said, after he was arrested in a drugs investigation that has captivated India's broadcast media.",
            "url": "https://www.cnn.com/2021/10/05/india/shah-rukh-khan-son-drug-case-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005001438-aryan-khan-drugs-investigation-100421-super-tease.jpg",
            "publishedAt": "2021-10-05T06:29:42Z",
            "content": "(CNN)A Mumbai court sent the 23-year-old son of Bollywood star Shah Rukh Khan to three days' custody on Monday, a lawyer said, after he was arrested in a drugs investigation that has captivated India… [+1384 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Reuters",
            "title": "Indonesian museum made from plastic bottles, bags highlights marine crisis",
            "description": "Environmentalists in Indonesia keen to send a message about the world's worsening ocean plastics crisis have created a museum made entirely from plastics, to convince people to rethink their habits and say no to single-use bags and bottles.",
            "url": "https://www.cnn.com/style/article/indonesian-museum-plastic-bottles/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211005014108-04-plastic-museum-indonesia-super-tease.jpg",
            "publishedAt": "2021-10-05T06:04:50Z",
            "content": "designPublished 5th October 2021\r\nEnvironmentalists in Indonesia keen to send a message about the world's worsening ocean plastics crisis have created a museum made entirely from plastics, to convinc… [+1882 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Rebekah Riess and Kelly McCleary, CNN",
            "title": "Louisiana offering travel trailers and other housing to those left without a home after Hurricane Ida",
            "description": "Louisiana is launching a sheltering program for those \"currently living in unsafe or unsanitary\" conditions due to damage from Hurricane Ida, which slammed into the Gulf Coast as a Category 4 storm more than five weeks ago, officials said Monday.",
            "url": "https://www.cnn.com/2021/10/05/us/louisiana-hurricane-ida-temporary-housing-shelter-program/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210901162615-13-hurricane-ida-0831-super-tease.jpg",
            "publishedAt": "2021-10-05T05:31:57Z",
            "content": "(CNN)Louisiana is launching a sheltering program for those \"currently living in unsafe or unsanitary\" conditions due to damage from Hurricane Ida, which slammed into the Gulf Coast as a Category 4 st… [+3800 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Amir Vera, CNN",
            "title": "The California oil spill is endangering wildlife. Here's how authorities are trying to clean it up",
            "description": "Stopping the leak, deploying booms and treating human and animal life are the top priorities.",
            "url": "https://www.cnn.com/2021/10/05/us/california-oil-spill-explainer/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004134736-01-california-oil-spill-1004-super-tease.jpg",
            "publishedAt": "2021-10-05T05:22:23Z",
            "content": "(CNN)The pristine beaches and beautiful wildlife in Southern California are now suffering after a weekend oil spill that responders and environmental officials say will take months, if not years, to … [+5099 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Madeline Holcombe, CNN",
            "title": "Beaches sit empty and fragile habitats hang in the balance as crews race to clean up a Southern California oil spill",
            "description": "A stretch of Southern California's coast has been transformed by a leak at an oil pipe that released more than 100,000 gallons of oil into the Pacific Ocean.",
            "url": "https://www.cnn.com/2021/10/05/us/california-oil-spill-tuesday/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004225342-05-california-oil-spill-1004-super-tease.jpg",
            "publishedAt": "2021-10-05T05:20:27Z",
            "content": "(CNN)A stretch of Southern California's coast has been transformed by a leak at an oil pipe that released more than 100,000 gallons of oil into the Pacific Ocean.\r\nThe normally bustling beaches of Hu… [+5348 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Taylor Romine, CNN",
            "title": "Estate of Henrietta Lacks sues biotechnical company for nonconsensual use of her cells",
            "description": "The family of Henrietta Lacks, the woman whose cells have been used for groundbreaking scientific research for decades, filed a lawsuit Monday against Thermo Fisher Scientific Inc. for unjust enrichment from the nonconsensual use and profiting from her tissue…",
            "url": "https://www.cnn.com/2021/10/05/us/henrietta-lacks-estate-sues-biotech-company/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004174856-01-henrietta-lacks-family-lawsuit-super-tease.jpg",
            "publishedAt": "2021-10-05T05:03:39Z",
            "content": "(CNN)The family of Henrietta Lacks, the woman whose cells have been used for groundbreaking scientific research for decades, filed a lawsuit Monday against Thermo Fisher Scientific Inc. for unjust en… [+4769 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Sarah Dean, CNN",
            "title": "Taliban accused of killing 13 ethnic Hazaras in Afghanistan",
            "description": "Taliban forces unlawfully killed 13 ethnic Hazaras -- including nine surrendering former government soldiers and a 17-year-old girl -- in Afghanistan's Daykundi province on August 30, according to a new investigation by Amnesty International.",
            "url": "https://www.cnn.com/2021/10/05/asia/taliban-hazaras-killing-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004202553-taliban-fighters-0901-file-super-tease.jpg",
            "publishedAt": "2021-10-05T04:59:28Z",
            "content": "(CNN)Taliban forces unlawfully killed 13 ethnic Hazaras -- including nine surrendering former government soldiers and a 17-year-old girl -- in Afghanistan's Daykundi province on August 30, according … [+1812 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Ben Westcott, CNN",
            "title": "New Zealand to abandon zero-Covid strategy as Delta variant proves hard to shake",
            "description": "New Zealand will begin to move away from a zero-Covid strategy toward living with the virus, Prime Minister Jacinda Ardern said Monday, becoming the latest country to abandon its elimination attempts in the face of the highly-contagious Delta variant.",
            "url": "https://www.cnn.com/2021/10/05/asia/new-zealand-ardern-covid-zero-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004232137-jacinda-ardern-presser-100421-super-tease.jpg",
            "publishedAt": "2021-10-05T04:46:19Z",
            "content": "(CNN)New Zealand will begin to move away from a zero-Covid strategy toward living with the virus, Prime Minister Jacinda Ardern said Monday, becoming the latest country to abandon its elimination att… [+4346 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Analysis by Ronald Brownstein",
            "title": "Why the Senate doesn't work anymore",
            "description": "Anger is peaking among a wide range of Democrats toward Sens. Joe Manchin and Kyrsten Sinema over their resistance to President Joe Biden's economic agenda, but the Democrats' struggle to pass Biden's sweeping plan is rooted in more than the personal idiosync…",
            "url": "https://www.cnn.com/2021/10/05/politics/senate-broken-biden-agenda/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004195443-manchin-press-0930-super-tease.jpg",
            "publishedAt": "2021-10-05T04:01:45Z",
            "content": "Even when you take policy arenas where you can imagine [bipartisan] cooperation happening in a lab, place it in our current system or structure of politics and it can't happen. Most of the ties to pa… [+202 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Maggie Fox, CNN",
            "title": "Dr. Francis Collins to step down as head of NIH",
            "description": "Dr. Francis Collins, the folksy, guitar-playing director of the National Institutes of Health (NIH), is planning to step down Tuesday as head of the gigantic research agency and return to his previous job as the director of the National Human Genome Research …",
            "url": "https://www.cnn.com/2021/10/04/health/collins-leaving-national-institutes-of-health/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004225014-dr-francis-collins-2020-file-super-tease.jpg",
            "publishedAt": "2021-10-05T03:58:40Z",
            "content": "(CNN)Dr. Francis Collins, the folksy, guitar-playing director of the National Institutes of Health (NIH), is planning to step down Tuesday as head of the gigantic research agency and return to his pr… [+3083 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Josh Campbell and Amir Vera, CNN",
            "title": "Texas pardons board votes unanimously to recommend posthumous pardon for George Floyd",
            "description": "The Texas State Board of Pardons and Paroles voted unanimously Monday to recommend a full posthumous pardon of George Floyd for a 2004 drug conviction, according to hearing minutes provided by the board to CNN.",
            "url": "https://www.cnn.com/2021/10/04/us/george-floyd-harris-county-texas-pardon-recommendation/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200527194814-george-floyd-police-minneapolis-minnesota-dead-protests-00021927-super-tease.jpg",
            "publishedAt": "2021-10-05T03:13:11Z",
            "content": "(CNN)The Texas State Board of Pardons and Paroles voted unanimously Monday to recommend a full posthumous pardon of George Floyd for a 2004 drug conviction, according to hearing minutes provided by t… [+2297 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Tami Luhby, CNN",
            "title": "Low-income Missouri residents finally gain Medicaid coverage",
            "description": "Medicaid expansion has finally begun in Missouri, nearly five months after Republican Gov. Mike Parson unsuccessfully tried to block it.",
            "url": "https://www.cnn.com/2021/10/04/politics/missouri-medicaid-expansion/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210818141853-gov-mike-parson-file-2019-super-tease.jpg",
            "publishedAt": "2021-10-05T02:18:15Z",
            "content": "(CNN)Medicaid expansion has finally begun in Missouri, nearly five months after Republican Gov. Mike Parson unsuccessfully tried to block it.\r\nRoughly 275,000 low-income adults in the state are now e… [+2229 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Story by Reuters",
            "title": "Philippines says it will investigate more than 150 police officers over Duterte's deadly drugs war",
            "description": "An initial investigation by the Philippine government has found 154 police officers could be criminally liable over their conduct in President Rodrigo Duterte's bloody war on drugs, in a rare admission by the state that abuses may have taken place.",
            "url": "https://www.cnn.com/2021/10/04/asia/philippines-police-drugs-war-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004210519-rodrigo-duterte-0915-file-super-tease.jpg",
            "publishedAt": "2021-10-05T01:37:54Z",
            "content": "Manila, PhilippinesAn initial investigation by the Philippine government has found 154 police officers could be criminally liable over their conduct in President Rodrigo Duterte's bloody war on drugs… [+2314 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Reuters",
            "title": "Bali gradually reopening to tourists starting October 14",
            "description": "Indonesia will reopen its tourist island Bali for some international travelers, including those from China, New Zealand, and Japan, among others, from October 14, senior cabinet minister Luhut Pandjaitan said on Monday, October 4.",
            "url": "https://www.cnn.com/travel/article/bali-reopening-tourism-october-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004211932-kuta-beach-bali-092621-super-tease.jpg",
            "publishedAt": "2021-10-05T01:23:49Z",
            "content": "Indonesia will reopen its tourist island Bali for some international travelers, including those from China, New Zealand, and Japan, among others, from October 14, senior cabinet minister Luhut Pandja… [+1434 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Reuters",
            "title": "Bali gradually reopening to tourists starting October 14",
            "description": "Indonesia will reopen its tourist island Bali for some international travelers, including those from China, New Zealand, and Japan, among others, from October 14, senior cabinet minister Luhut Pandjaitan said on Monday, October 4.",
            "url": "https://www.cnn.com/travel/article/bali-reopening-tourism-october-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004211932-kuta-beach-bali-092621-super-tease.jpg",
            "publishedAt": "2021-10-05T01:23:49Z",
            "content": "Indonesia will reopen its tourist island Bali for some international travelers, including those from China, New Zealand, and Japan, among others, from October 14, senior cabinet minister Luhut Pandja… [+1434 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Melanie Zanona and Lauren Fox, CNN",
            "title": "Republicans use debt ceiling and infrastructure as cudgels to derail Democratic agenda",
            "description": "Republicans don't want the nation to default on its debts and they support more funding for roads and bridges. Yet they're fully prepared to oppose bills that would achieve both those goals.",
            "url": "https://www.cnn.com/2021/10/04/politics/republicans-debt-ceiling-infrastructure-cudgels/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210930105441-02-congress-budget-0930-mcconnell-super-tease.jpg",
            "publishedAt": "2021-10-05T01:13:07Z",
            "content": "(CNN)Republicans don't want the nation to default on its debts and they support more funding for roads and bridges. Yet they're fully prepared to oppose bills that would achieve both those goals.\r\nSe… [+9839 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Devan Cole, CNN",
            "title": "Justice Breyer says return to in-person Supreme Court arguments is a 'big improvement'",
            "description": "Justice Stephen Breyer on Monday reflected on the Supreme Court's return to in-person oral arguments earlier that day, saying he prefers the high court's usual structure over the virtual system the nine jurists had started using just after the Covid-19 pandem…",
            "url": "https://www.cnn.com/2021/10/04/politics/stephen-breyer-supreme-court-culture/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004184312-02-stephen-breyer-smithsonian-1004-super-tease.jpg",
            "publishedAt": "2021-10-05T01:08:12Z",
            "content": "Washington (CNN)Justice Stephen Breyer on Monday reflected on the Supreme Court's return to in-person oral arguments earlier that day, saying he prefers the high court's usual structure over the virt… [+3048 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Devan Cole, CNN",
            "title": "Justice Breyer says return to in-person Supreme Court arguments is a 'big improvement'",
            "description": "Justice Stephen Breyer on Monday reflected on the Supreme Court's return to in-person oral arguments earlier that day, saying he prefers the high court's usual structure over the virtual system the nine jurists had started using just after the Covid-19 pandem…",
            "url": "https://www.cnn.com/2021/10/04/politics/stephen-breyer-supreme-court-culture/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004184312-02-stephen-breyer-smithsonian-1004-super-tease.jpg",
            "publishedAt": "2021-10-05T01:08:12Z",
            "content": "Washington (CNN)Justice Stephen Breyer on Monday reflected on the Supreme Court's return to in-person oral arguments earlier that day, saying he prefers the high court's usual structure over the virt… [+3048 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Whitney Wild, CNN",
            "title": "Capitol Hill security forces will be able to report problems anonymously to House committee",
            "description": "Members of Capitol Hill security will be able to file whistleblower complaints about potential wrongdoing directly to a congressional committee, Rep. Rodney Davis announced on Monday.",
            "url": "https://www.cnn.com/2021/10/04/politics/capitol-hill-security-anonymous-tips-house-committee/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004201742-capitol-police-file-super-tease.jpg",
            "publishedAt": "2021-10-05T00:24:14Z",
            "content": "(CNN)Members of Capitol Hill security will be able to file whistleblower complaints about potential wrongdoing directly to a congressional committee, Rep. Rodney Davis announced on Monday.\r\nThe Illin… [+1699 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Abel Alvarado and Lauren Said-Moorhouse, CNN",
            "title": "Alberto Fujimori, ex-president of Peru, in 'delicate' health after hospitalization",
            "description": "Peru's former president, Alberto Fujimori, is currently in \"delicate\" condition, after suffering heart issues, according to his daughter.",
            "url": "https://www.cnn.com/2021/10/04/americas/fujimori-peru-health-intl-latam/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004183708-08-alberto-fujimori-lead-image-super-tease.jpg",
            "publishedAt": "2021-10-04T23:35:16Z",
            "content": "(CNN)Peru's former president, Alberto Fujimori, is currently in \"delicate\" condition, after suffering heart issues, according to his daughter.\r\n\"His heart problem has worsened,\" tweeted Keiko Fujimor… [+1650 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": null,
            "title": "Senator's office sets up Instagram account appearing to be teen. See what happens",
            "description": "Sen. Blumenthal's office conducted an experiment where it registered an account as belonging to a 13-year-old girl, followed some exercise and dieting accounts, and was quickly served by Instagram's algorithms with increasingly extreme content promoting eatin…",
            "url": "https://www.cnn.com/videos/tech/2021/10/04/instagram-eating-disorders-teens-osullivan-dnt-tsr-vpx.cnn",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004152639-06-instagram-app---stock-super-tease.jpeg",
            "publishedAt": "2021-10-04T23:27:15Z",
            "content": ""
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Kaitlan Collins, CNN",
            "title": "Top Biden official held calls with airline executives to push for vaccine mandates",
            "description": "President Joe Biden's Covid-19 response coordinator is having discussions with the leaders of several major airlines about vaccine requirements for employees, according to a source familiar with the talks.",
            "url": "https://www.cnn.com/2021/10/04/politics/jeff-zients-airline-vaccine-requirements/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210805122811-jeff-zients-0210-super-tease.jpg",
            "publishedAt": "2021-10-04T23:24:32Z",
            "content": "(CNN)President Joe Biden's Covid-19 response coordinator is having discussions with the leaders of several major airlines about vaccine requirements for employees, according to a source familiar with… [+957 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Tierney Sneed, CNN",
            "title": "Garland defends DOJ against criticisms about charging decisions in Capitol riot cases",
            "description": "Attorney General Merrick Garland on Monday defended the Justice Department against claims that it is not charging the rioters who breached the US Capitol on January 6 harshly enough.",
            "url": "https://www.cnn.com/2021/10/04/politics/garland-defends-prosecutors-charging-decisions-january-6/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210719113401-merrick-garland-0623-super-tease.jpg",
            "publishedAt": "2021-10-04T23:21:16Z",
            "content": "(CNN)Attorney General Merrick Garland on Monday defended the Justice Department against claims that it is not charging the rioters who breached the US Capitol on January 6 harshly enough. \r\n\"Prosecut… [+2468 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Maggie Fox, CNN",
            "title": "Study confirms pandemic hit Black Americans, American Indians and Latinos harder than Whites",
            "description": "A study published Monday confirms that the pandemic hit Black Americans, Native Americans and Latinos far harder than Whites early on, killing greater proportions of these groups.",
            "url": "https://www.cnn.com/2021/10/04/health/pandemic-deaths-minorities/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004184711-navajo-monument-valley-tribal-park-may-2020-super-tease.jpg",
            "publishedAt": "2021-10-04T23:16:51Z",
            "content": "(CNN)A study published Monday confirms that the pandemic hit Black Americans, Native Americans and Latinos far harder than Whites early on, killing greater proportions of these groups.\r\nPeople from t… [+2749 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Liz Stark, CNN",
            "title": "Florida is only state not to submit school Covid-19 relief funding plan, US Education Department says",
            "description": "Florida is the only state that has not yet submitted a plan to the US Department of Education for how it will use federal Covid-19 relief funds for schools, according to a new letter from the agency -- the latest in a series of escalating stances against the …",
            "url": "https://www.cnn.com/2021/10/04/politics/florida-schools-covid-relief-funding-plan/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004183609-florida-public-school-super-tease.jpg",
            "publishedAt": "2021-10-04T23:11:46Z",
            "content": "(CNN)Florida is the only state that has not yet submitted a plan to the US Department of Education for how it will use federal Covid-19 relief funds for schools, according to a new letter from the ag… [+4399 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Rachel Ramirez, CNN",
            "title": "Why ending our dependence on fossil fuels is so challenging",
            "description": "We use them to heat our homes, cook our food and fuel our cars. Here's why it's taking so long to end our reliance on fossil fuels.",
            "url": "https://www.cnn.com/2021/10/04/us/oil-spill-fossil-fuel-dependence-climate/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004175510-talbert-marsh-huntington-beach-california-100421-restricted-super-tease.jpg",
            "publishedAt": "2021-10-04T23:00:41Z",
            "content": "(CNN)Humans have been burning fossil fuels for energy since the Industrial Revolution. We use them to heat our homes, cook our food and fuel our cars. Over the course of more than a century, fossil f… [+5224 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Samantha Murphy Kelly and Seth Fiegerman, CNN Business",
            "title": "Whistleblower: 'Almost no one outside of Facebook knows what happens inside Facebook'",
            "description": "Frances Haugen, the Facebook whistleblower who released tens of thousands of pages of internal research and documents, said the social media company could \"destroy\" her for speaking out, but she believed that \"as long as Facebook is operating in the dark, it …",
            "url": "https://www.cnn.com/2021/10/04/tech/facebook-whistleblower-prepared-testimony/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211003205015-02-frances-haugen-60-minutes-10-03-2021-super-tease.jpg",
            "publishedAt": "2021-10-04T22:56:20Z",
            "content": "(CNN Business)Frances Haugen, the Facebook whistleblower who released tens of thousands of pages of internal research and documents, said the social media company could \"destroy\" her for speaking out… [+1975 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Analysis by Chris Cillizza, CNN Editor-at-large",
            "title": "What Mitch McConnell is betting on",
            "description": "Two weeks out from a dangerous debt default with broad consequences for the American economy, Mitch McConnell isn't budging.",
            "url": "https://www.cnn.com/2021/10/04/politics/mcconnell-gop-debt-ceiling-default/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210618123013-01-mcconnell-0617-super-tease.jpg",
            "publishedAt": "2021-10-04T22:30:16Z",
            "content": "THE POINT -- NOW ON YOUTUBE! \r\nIn each episode of his weekly YouTube show, Chris Cillizza will delve a little deeper into the surreal world of politics. Click to subscribe!"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Manu Raju and Clare Foran, CNN",
            "title": "Manchin breaks with party leaders over strategy on debt ceiling and Biden's economic package",
            "description": "Democratic Sen. Joe Manchin on Monday pushed back on several politically sensitive positions his party leaders are taking at a crucial time for President Joe Biden's domestic agenda.",
            "url": "https://www.cnn.com/2021/10/04/politics/manchin-debt-ceiling-biden-economic-package/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210930145747-03-manchin-media-0930-super-tease.jpg",
            "publishedAt": "2021-10-04T22:29:09Z",
            "content": "(CNN)Democratic Sen. Joe Manchin on Monday pushed back on several politically sensitive positions his party leaders are taking at a crucial time for President Joe Biden's domestic agenda.\r\nThe West V… [+4743 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": null,
            "title": "In photos: Southern California oil spill",
            "description": "A pipeline leak has spilled more than 100,000 gallons of oil in Southern California, devastating local wildlife and forcing some popular beaches to close.",
            "url": "https://www.cnn.com/2021/10/04/us/gallery/california-oil-spill-2021/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004113203-02-california-oil-spill-unf-restricted-super-tease.jpg",
            "publishedAt": "2021-10-04T21:51:06Z",
            "content": "This aerial photo, taken on Sunday, October 3, shows oil that has washed ashore in Huntington Beach, California.\r\nUpdated 5:51 PM ET, Mon October 4, 2021\r\nThis aerial photo, taken on Sunday, October … [+1062 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Donie O'Sullivan, Clare Duffy and Sarah Jorgensen, CNN Business",
            "title": "Instagram promoted pages glorifying eating disorders to teen accounts",
            "description": "\"I have to be thin,\" \"Eternally starved,\" \"I want to be perfect.\" These are the names of accounts Instagram's algorithms promoted to an account registered as belonging to a 13-year-old girl who expressed interest in weight loss and dieting.",
            "url": "https://www.cnn.com/2021/10/04/tech/instagram-facebook-eating-disorders/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211004152639-06-instagram-app---stock-super-tease.jpeg",
            "publishedAt": "2021-10-04T21:17:48Z",
            "content": "New York (CNN Business)\"I have to be thin,\" \"Eternally starved,\" \"I want to be perfect.\" These are the names of accounts Instagram's algorithms promoted to an account registered as belonging to a 13-… [+7919 chars]"
          },
          {
            "source": {
              "id": "cnn",
              "name": "CNN"
            },
            "author": "Devan Cole, CNN",
            "title": "Washington Post: Biden administration reverses Trump-era rule prohibiting federally funded health care providers from making abortion referrals",
            "description": "The Biden administration is reversing a controversial Trump-era rule that prohibited federally funded health care providers from making abortion referrals, The Washington Post reported Monday.",
            "url": "https://www.cnn.com/2021/10/04/politics/biden-administration-trump-era-abortion-rule-reversal/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211002115957-02-womens-march-2021-1002-dc-super-tease.jpg",
            "publishedAt": "2021-10-04T21:14:41Z",
            "content": "Washington (CNN)The Biden administration is reversing a controversial Trump-era rule that prohibited federally funded health care providers from making abortion referrals, The Washington Post reporte… [+1537 chars]"
          }
    ]
    //not using upper json file and artiles also
    constructor(){
        super();
        //this.state={articles:[this.articles]} for upper json only
        this.state={articles:[],
        loading:false,
        page:1,
        totalResults:0
        }
    
        }

        async componentDidMount(){
          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3bceef99f08246f1b417f4274cd22fde&pageSize=${this.props.pagesize}`
          let data=await fetch(url);
          let parseData=await data.json();
          this.setState({articles:parseData.articles,totalResults:parseData.totalResults})
          // this.update();
   
       }

      //  async update(){
      //   const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3bceef99f08246f1b417f4274cd22fde&page=${this.state.page}&pageSize=${this.props.pagesize}`
      //   let data=await fetch(url);
      //   let parseData=await data.json();
      //   this.setState({articles:parseData.articles,totalResults:parseData.totalResults})

      //  }

  handlepreviousClick=async ()=>{
    
 
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3bceef99f08246f1b417f4274cd22fde&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parseData=await data.json();
    this.setState(
      {
        loading:false,
        page:this.state.page -1,
        articles: parseData.articles,
      }
    )
    // this.setState({page:this.state.page-1});
    // this.update()
    
  }

  handleNextClick= async ()=>{
    console.log("ya");
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)){

    }

    else{
    console.log("Next");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3bceef99f08246f1b417f4274cd22fde&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parseData=await data.json()
    this.setState({
      loading:false,
      page:this.state.page +1,
      articles: parseData.articles}
  
      
    )
    }
    // this.setState({page:this.state.page+1});
    // this.update()

  }
    
  

    render() {
        return (
            <div className="container my-3 ">
              <div className="con text-center " style={{color:'orange', margin:'30px 0px 0px 0',textDecoration: 'underline'}}>
               <h1><b>News Bishal-Top Headlines On {this.props.category}</b></h1>
              {this.state.loading && <Spinner/>}  
            {/* <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.articles.length!==this.state.totalResults}
                loader={<Spinner/>}
              
              /> */}

               </div>

              
               <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{ 
          
              return <div className="col-md-4 my-4"  >
                    <NewsItem key={element.url} title={element.title} description={element.description}  author={element.author} date={element.publishedAt} source={"The Times Of India"} imageurl= {element.urlToImage} newsurl={element.url}></NewsItem>
               </div>
               })}
                
               </div> 
               <div className="container d-flex justify-content-between">
               <button disabled={this.state.page<=1} type="button" class="btn btn-success " onClick={this.handlepreviousClick}> &larr; Previous</button>
               <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" class="btn btn-success " onClick={this.handleNextClick}>Next &rarr;</button>
               </div>
               <div >
              
                </div>
            </div>
            
        )
    }
}

export default News
