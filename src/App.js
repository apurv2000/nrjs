import logo from './logo.svg';
import React,{useState} from "react";
import './App.css';
import { BrowserRouter, Link,Route ,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Newsitem from "./components/Newsitem";

function App() {
  const apikey='4d1aed6e10b74e62979780c561cc6093'//todo process.env.REACT_APP_NEWS_API
  const[progress,setprogress]=useState(0);
  const[mode,setMode]=useState('dark');
  const [article,setar]=useState(
    [
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": null,
      "title": "Elon Musk Tweets Photo Of His Bedside Table, Says \"No Excuse For Lack Of Coasters\" - NDTV",
      "description": "In a separate tweet, he apologised for the lack of coasters and said that \"no excuses for he lack of coasters.\"",
      "url": "https://www.ndtv.com/world-news/elon-musk-tweets-photo-of-his-bedside-table-says-no-excuse-for-lack-of-coasters-3559873",
      "urlToImage": "https://c.ndtvimg.com/2022-11/db4973hc_elon-musk-reuters-photo_625x300_05_November_22.jpg",
      "publishedAt": "2022-11-28T11:04:54Z",
      "content": "Posted an hour ago, the tweet has 69,700 likes\r\nTwitter's new boss, Elon Musk revealed that he sleeps with two guns and a vast collection of Diet Coke cans. Musk posted a picture of the content of hi… [+1671 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Zee Business"
      },
      "author": "ZeeBiz WebTeam",
      "title": "Stock Market HIGHLIGHTS: All time high closing for Nifty, Sensex; BPCL, Hero MotoCorp end among top - Zee Business",
      "description": "Stock Market HIGHLIGHTS: Out of the 15 Nifty sectoral indices, six ended in the red against 9 gaine",
      "url": "https://www.zeebiz.com/market-news/live-updates-stock-market-today-sensex-nifty-paytm-anil-singhvi-strategy-china-covid-19-zomato-hero-motocorp-dow-jones-nikkei-brent-dharmaj-crop-ipo-209834",
      "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2022/11/28/212937-m1.jpg",
      "publishedAt": "2022-11-28T11:02:06Z",
      "content": "Stock Market HIGHLIGHTS: Unfazed by the losses witnessed by their Asia peers, Indian frontline indices continued their winning streak on Monday. Nifty50 scaled a new lifetime high of 18,614.25, bette… [+2845 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Investing.com"
      },
      "author": "Reuters",
      "title": "Oil prices erase 2022 gains as China's protests spark demand worries By Reuters - Investing.com",
      "description": "Oil prices erase 2022 gains as China's protests spark demand worries",
      "url": "https://www.investing.com/news/commodities-news/oil-drops-more-than-1-as-chinas-covid-protests-fuel-demand-worries-2952409",
      "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEE4G1TT_L.jpg",
      "publishedAt": "2022-11-28T10:27:00Z",
      "content": "By Noah Browning\r\n(Reuters) - Oil prices fell close to their lowest this year on Monday as street protests against strict COVID-19 curbs in China, the world's biggest crude importer, stoked concern o… [+2267 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Moneycontrol"
      },
      "author": "Moneycontrol News",
      "title": "Morgan Stanley sees Sensex at 80,000 by December 2023, but there's a catch - Moneycontrol",
      "description": "On November 28, both Sensex and Nifty ended at a record-high close. Sensex gained 182.21 points to end at 62,475.85. Nifty closed at 18,553.60 after touching a lifetime high of 18,613.20.",
      "url": "https://www.moneycontrol.com/news/business/markets/morgan-stanley-sees-sensex-at-80000-by-december-2023-but-theres-a-catch-9613621.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/05/bull.shutterstock-770x433.jpg",
      "publishedAt": "2022-11-28T10:24:11Z",
      "content": "Foreign brokerage firm Morgan Stanley sees Sensex hitting 80,000 by December 2023, if India is included in global bond indices which can result in $20 billion of inflows over the subsequent 12 months… [+2562 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "CarToq.com"
      },
      "author": "Shantonil Nag",
      "title": "Toyota Fortuner’s solid build saves MLA involved in massive crash [Video] - CarToq.com",
      "description": "India sees one of the largest numbers of accidents in the world every year. While many accident cases turn out to be fatal, this high-speed crash of a Toyota Fortuner shows how solid build quality of cars can save lives. The incident happened in Uttar Pradesh…",
      "url": "https://www.cartoq.com/toyota-fortuners-solid-build-saves-mla-involved-in-massive-crash-video/",
      "urlToImage": "https://www.cartoq.com/wp-content/uploads/2022/11/toyota-fortuner-mla-crash.jpg",
      "publishedAt": "2022-11-28T09:47:26Z",
      "content": "India sees one of the largest numbers of accidents in the world every year. While many accident cases turn out to be fatal, this high-speed crash of a Toyota Fortuner shows how solid build quality of… [+2824 chars]"
      },
      {
      "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
      },
      "author": "Bloomberg",
      "title": "Slower growth will be good for India, for now, economists say - Economic Times",
      "description": "Gross domestic product expansion at about 6% is a sweet spot for Asias third-largest economy to steer inflation back to the Reserve Bank of Indias target, and also to narrow budget and current account deficits, said Rahul Bajoria of Barclays. Price gains have…",
      "url": "https://economictimes.indiatimes.com/news/economy/policy/slower-growth-will-be-good-for-india-for-now-economists-say/articleshow/95823564.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-95823548,width-1070,height-580,imgsize-66992,overlay-economictimes/photo.jpg",
      "publishedAt": "2022-11-28T08:53:00Z",
      "content": "Indias annual economic growth is forecast to slow to about 6% for a few years, according to economists including from Goldman Sachs Group Inc. and Barclays Plc.. And they say thats not such a bad thi… [+2353 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Livemint"
      },
      "author": "Arti Singh",
      "title": "CTO, CPO, others quit BharatPe | Mint - Mint",
      "description": "BharatPe was incorporated in March 2018 by Koladiya and Shashvat Nakrani, who was then studying at IIT-Delhi, as co-founders with each owning 50% stake. Three months later in June 2018, Grover joined as the third co-founder. In August 2021, the company entere…",
      "url": "https://www.livemint.com/companies/news/cto-cpo-others-quit-bharatpe-11669622745659.html",
      "urlToImage": "https://images.livemint.com/img/2022/11/28/600x338/Bharatpe_1652205505798_1669623140479_1669623140479.jpg",
      "publishedAt": "2022-11-28T08:13:10Z",
      "content": "NEW DELHI: Three senior executives have resigned from BharatPe, two people aware of the matter told Mint. Vijay Aggarwal, chief technology officer; Nehul Malhotra, head, PostPe; and Rajat Jain, chief… [+3355 chars]"
      },
      {
      "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
      },
      "author": null,
      "title": "HSBC acquires L&T MF; schemes to be transferred or merged with HSBC schemes - Economic Times",
      "description": "HSBC Asset Management (India) has said that it has completed the acquisition of L&T Investment Management for a consideration of US$ 425 million, subject to closing adjustments.",
      "url": "https://economictimes.indiatimes.com/mf/mf-news/hsbc-acquires-lt-mf-schemes-to-be-transferred-or-merged-with-hsbc-schemes/articleshow/95821551.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-95821534,width-1070,height-580,imgsize-683512,overlay-etwealthmutualfunds/photo.jpg",
      "publishedAt": "2022-11-28T07:33:00Z",
      "content": "HSBC Asset Management (India) has said that it has completed the acquisition of L&amp;T Investment Management for a consideration of US$ 425 million, subject to closing adjustments. L&amp;T Investmen… [+2294 chars]"
      },
      {
      "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
      },
      "author": "Manish Singh",
      "title": "Amazon shutting down wholesale distribution in third business exit in India - TechCrunch",
      "description": "The closure of wholesale distribution is the latest in a series of retreats for Amazon in India, where it has deployed over $7 billion.",
      "url": "https://techcrunch.com/2022/11/27/amazon-shutting-down-wholesale-distribution-in-third-business-exit-in-india/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1195397594.jpg?resize=1200,801",
      "publishedAt": "2022-11-28T07:30:40Z",
      "content": "Amazon is shutting down its wholesale distribution business in India, the latest in a series of retreats for the retailer in the key overseas market where it has deployed over $7 billion in the past … [+3713 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": null,
      "title": "Mercedes Benz India Finds An Unusual Competitor. Read Details - NDTV Profit",
      "description": "Mercedes India finds systematic investment plans (SIPs), a preferred savings instrument, as a competitor.",
      "url": "https://www.ndtv.com/business/mercedes-benz-india-finds-an-unusual-competitor-read-details-3559151",
      "urlToImage": "https://c.ndtvimg.com/2022-11/ppk8q8u8_image_625x300_28_November_22.jpg",
      "publishedAt": "2022-11-28T07:29:26Z",
      "content": "Mercedes Benz India says systematic investment plans (SIPs) are a competitor\r\nLuxury car maker Mercedes Benz India has sparked an atypical debate that has surprised mutual funds.\r\nFor most Indians, s… [+1741 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Team-BHP"
      },
      "author": "Tushar Kelshikar",
      "title": "2023 Hyundai Grand i10 NIOS facelift spied in India - Team-BHP",
      "description": "The Hyundai Grand i10 NIOS facelift has been caught testing in India for the first time. The Grand i10 NIOS is expected to get a minor nip and tuck next year. The overall shape of the car has been retained with most of the changes focused around the front and…",
      "url": "https://www.team-bhp.com/news/2023-hyundai-grand-i10-nios-facelift-spied-india",
      "urlToImage": "https://www.team-bhp.com/sites/default/files/styles/large/public/2023-hyundai-grand-i10-nios-facelift-spied-chennai-first-7-747x420.jpg",
      "publishedAt": "2022-11-28T07:24:50Z",
      "content": "The Hyundai Grand i10 NIOS facelift has been caught testing in India for the first time.\r\nThe Grand i10 NIOS is expected to get a minor nip and tuck next year. The overall shape of the car has been r… [+745 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "India Today"
      },
      "author": "Sneha Saha",
      "title": "Fired without any reason: Former Twitter engineer on H1B visa looking for job, says many on parental leave terminated - India Today",
      "description": "After multiple rounds of layoffs, Musk recently told employees that there would be no more layoffs and that the company would start hiring for important positions. But that didn’t turn out well.",
      "url": "https://www.indiatoday.in/technology/news/story/former-twitter-engineer-h1b-visa-looking-for-job-many-on-parental-leave-terminated-elon-musk-2302564-2022-11-28",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/elon_musk_image_6-sixteen_nine.jpg?VersionId=G9VaARK.xgYvCym2FTuYZsXzP3u_1VuC",
      "publishedAt": "2022-11-28T07:01:39Z",
      "content": "By Sneha Saha: Last month changed everything at Twitter. Ever since Elon Musk took over as the Twitter boss, he has fired thousands of employees globally, dismissed various departments, and asked the… [+2128 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Moneycontrol"
      },
      "author": "Dipti Sharma",
      "title": "Railway stocks on racetrack as investors place tactical bets - Moneycontrol",
      "description": "“Railway stocks are generally a tactical play. This means investors are buying these stocks as a short-term investment bet based on the anticipation of some announcement from the government,” said Awanish Chandra, Head of Equities, SMIFS.",
      "url": "https://www.moneycontrol.com/news/business/stocks/railway-stocks-on-racetrack-as-investors-place-tactical-bets-9612641.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/12/IndianRailways-1-580x435.jpg",
      "publishedAt": "2022-11-28T06:57:29Z",
      "content": "With investors lapping up shares of railway companies, some sector-specific stocks have been in the limelight lately. At 11:23am today, shares of Indian Railway Finance Corporation Ltd (IRFC), Rail V… [+2040 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "India.com"
      },
      "author": "Zee Media Bureau",
      "title": "WhatsApp data breach: Here`s step-by-step guide to check whether your data is leaked or not - Zee News",
      "description": "Nearly 500 million WhatsApp users phone numbers are available for purchase on the hacking community forum. According to Cybernews, a threat actor has advertised on a hacking site that it is selling a database with 487 million mobile phone numbers of WhatsApp …",
      "url": "https://zeenews.india.com/technology/whatsapp-data-breach-heres-step-by-step-guide-to-check-whether-your-data-is-leaked-or-not-2541060.html",
      "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/11/28/1122812-untitled-design-2022-11-28t115654.304.jpg",
      "publishedAt": "2022-11-28T06:32:31Z",
      "content": "New Delhi: Nearly 500 million WhatsApp users' phone numbers are available for purchase on the hacking community forum. According to Cybernews, a threat actor has advertised on a hacking site that it … [+1040 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Moneycontrol"
      },
      "author": "Bloomberg",
      "title": "Foreign investor bets show Indian stocks rally has more legs - Moneycontrol",
      "description": "Holdings of foreign investors in long index futures have risen by about six times from their September lows, to 127,000 contracts, while short bets have dropped 76% over the same period to 38,600 lots -- the least bearish positioning since April.",
      "url": "https://www.moneycontrol.com/news/business/markets/foreign-investor-bets-show-indian-stocks-rally-has-more-legs-9612531.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/07/SensexBSENSE-770x433.jpg",
      "publishedAt": "2022-11-28T06:21:02Z",
      "content": "Overseas investors have stepped up their return to Indian equities, helping power benchmarks gauges to record highs and derivatives data signals more room for the rally.\r\nGlobal funds have bought a n… [+1450 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "CarToq.com"
      },
      "author": "Shantonil Nag",
      "title": "2022 Maruti Suzuki Eeco reaches dealerships; First video of the updated cabin - CarToq.com",
      "description": "Maruti Suzuki has introduced a midlife update to its high-selling entry-level van, Eeco. The new Maruti Suzuki Eeco now gets an updated interior with a couple of new features and an all-new powertrain replacing the old-generation G-Series engine. The price fo…",
      "url": "https://www.cartoq.com/2022-maruti-suzuki-eeco-reaches-dealerships-first-video-of-the-updated-cabin/",
      "urlToImage": "https://www.cartoq.com/wp-content/uploads/2022/11/eeco-cabin-1.jpg",
      "publishedAt": "2022-11-28T06:13:38Z",
      "content": "Maruti Suzuki has introduced a midlife update to its high-selling entry-level van, Eeco. The new Maruti Suzuki Eeco now gets an updated interior with a couple of new features and an all-new powertrai… [+2558 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Livemint"
      },
      "author": "Livemint",
      "title": "What Tata Consumer's potential Bisleri acquisition could mean for the stock | Mint - Mint",
      "description": "Tata Consumer Products (TCPL) might acquire Bisleri, India’s largest water brand",
      "url": "https://www.livemint.com/market/stock-market-news/what-tata-consumer-products-bisleri-acquisition-could-mean-for-the-tata-group-stock-11669613568724.html",
      "urlToImage": "https://images.livemint.com/img/2022/11/28/600x338/tata_consumer_1669614062836_1669614062980_1669614062980.jpg",
      "publishedAt": "2022-11-28T05:58:47Z",
      "content": "Bisleri International Pvt. Ltd is in advanced discussions to sell its business, comprising its flagship bottled water brand Bisleri, and Tata Consumer Products Ltd (TCPL) is a frontrunner while other… [+2142 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "wknd."
      },
      "author": "A Staff Reporter",
      "title": "Indian rupee slips against UAE dirham in early trade - Khaleej Times",
      "description": "However, lower crude prices in the international market and fresh foreign fund inflows restrict the rupee’s fall, forex dealers say",
      "url": "https://www.khaleejtimes.com/markets/indian-rupee-slips-against-uae-dirham-in-early-trade-7",
      "urlToImage": "https://image.khaleejtimes.com?uuid=3ead7ce8-6057-498a-ab5f-3a17fb7cc770&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.84428&width=1200&height=675&x=1.0E-5&y=0.09006",
      "publishedAt": "2022-11-28T05:32:08Z",
      "content": "However, lower crude prices in the international market and fresh foreign fund inflows restrict the rupees fall, forex dealers say\r\nThe Indian rupee depreciated six paise to 81.77 against the US doll… [+1444 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "CarToq.com"
      },
      "author": "Shantonil Nag",
      "title": "Kia Motors replaces customer’s Sonet with a new one after dealer staff crashes the car [Video] - CarToq.com",
      "description": "Days after a video of a Kia Motors service centre crashing a Sonet of a customer inside the service centre became viral, the customer received a brand-new car. Jalaj Agarwal has updated that Rajesh Kia Motors will replace his old one with exactly the same var…",
      "url": "https://www.cartoq.com/kia-motors-replaces-customers-sonet-with-a-new-one-after-dealer-staff-crashed-the-car-video/",
      "urlToImage": "https://www.cartoq.com/wp-content/uploads/2022/11/kia-sonet-replacement-new.jpg",
      "publishedAt": "2022-11-28T05:15:00Z",
      "content": "Days after a video of a Kia Motors service centre crashing a Sonet of a customer inside the service centre became viral, the customer received a brand-new car. Jalaj Agarwal has updated that Rajesh K… [+2803 chars]"
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": null,
      "title": "Global oil market signals short-term weakness ahead of EU ban on Russian oil - Reuters",
      "description": "The global oil market is signaling a potential shift, as traders and analysts worry about reduced crude demand and an oversupplied market in the coming months.",
      "url": "https://www.reuters.com/business/energy/global-oil-market-signals-short-term-weakness-ahead-eu-ban-russian-oil-2022-11-28/",
      "urlToImage": "https://www.reuters.com/resizer/XhUXD_Kj7pqGIJhk533o5dPKD6E=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GT4O7PJIEBIHJCSPF2TIY3LMPM.jpg",
      "publishedAt": "2022-11-28T05:11:00Z",
      "content": "NEW YORK, Nov 28 (Reuters) - The global oil market is signaling a potential shift, as traders and analysts worry about reduced crude demand and an oversupplied market in the coming months.\r\nAfter mon… [+3615 chars]"
      }
      ]

  );
  const [arti1,setarti1]=useState(
    [
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": "NDTV Sports Desk",
      "title": "Cameroon vs Serbia, FIFA World Cup 2022 Highlights: Cameroon, Serbia Share The Spoils In Thrilling 3-3 Draw - NDTV Sports",
      "description": "FIFA World Cup 2022, Cameroon vs Serbia Highlights: Aleksandar Mitrovic had given Serbia a 3-1 lead in the second half before Cameroon struck twice to make it 3-3. Both teams tried to find the winner but the match ended in a stalemate.",
      "url": "https://sports.ndtv.com/fifa-world-cup-2022/fifa-world-cup-2022-cameroon-vs-serbia-football-live-score-updates-3559229",
      "urlToImage": "https://c.ndtvimg.com/2022-11/qs3fn6ko_choupomoting_625x300_28_November_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
      "publishedAt": "2022-11-28T12:09:12Z",
      "content": "FIFA World Cup LIVE: Starting lineups -\r\nCameroon Starting XI: Epassy; Tolo, Nkoulou, Castelletto, Fai; Kunde, Hongla, Zambo Anguissa; Mbeumo, Choupo Moting, Toko Ekambi.\r\nSerbia Starting XI: V.Milin… [+112 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Sportskeeda"
      },
      "author": "Sportskeeda Desk",
      "title": "PUN vs KAR Live Score - Vijay Hazare Trophy Live Score & Commentary | Punjab vs Karnataka Score - Sportskeeda",
      "description": "Punjab vs Karnataka Vijay Hazare Trophy Live Score - Catch live cricket score, ball by ball commentary and highlights of PUN vs KAR.",
      "url": "https://www.sportskeeda.com/live-cricket-score/punjab-vs-karnataka-1st-quarter-final-28-november-2022",
      "urlToImage": null,
      "publishedAt": "2022-11-28T11:24:00Z",
      "content": "Karnataka beat Punjab by four wickets!Abhishek Sharma 109 (123) | Vidwath Kaverappa 4/40Ravikumar Samarth 71 (106) | Sanvir Singh 2/28\r\nKarnataka got off to a decent start but skipper Mayank Agarwal … [+1892 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Crictracker.com"
      },
      "author": "CricTracker Staff",
      "title": "Abu Dhabi T10 2022: Match 15, NYS vs MSA Match Prediction: Who will win today's T10 League match? - CricTracker",
      "description": "Match 15 of the Abu Dhabi T10 2022 will see an exciting contest between New York Strikers and Morrisville Samp Army. Strikers have come out strong in their last two fixtures following their loss in th",
      "url": "https://www.crictracker.com/cricket-match-predictions/abu-dhabi-t10-2022-match-15-nys-vs-msa-match-prediction-who-will-win-todays-t10-league-match/",
      "urlToImage": "https://media.crictracker.com/media/attachments/1669532451994_Morrisville-Samp-Army.jpeg",
      "publishedAt": "2022-11-28T11:00:00Z",
      "content": "Match 15 of the Abu Dhabi T10 2022 will see an exciting contest between New York Strikers and Morrisville Samp Army. Strikers have come out strong in their last two fixtures following their loss in t… [+2639 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "International Cricket Council"
      },
      "author": "ICC",
      "title": "Ben Stokes makes major announcement ahead of Pakistan Tests - ICC Cricket",
      "description": "Ahead of what would be England's first Test series in Pakistan in 17 years, skipper Ben Stokes has made an announcement on his social media handle.",
      "url": "https://www.icc-cricket.com/news/2919126",
      "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2022/11/28/0a4de518-fb06-4e3f-8bb0-35016dbcd2bc/GettyImages-1445106451.jpg",
      "publishedAt": "2022-11-28T10:47:38Z",
      "content": "Ahead of what would be England's first Test series in Pakistan in 17 years, skipper Ben Stokes has made an announcement on his social media handle.Stokes announced that he would be donating his match… [+1329 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Sportskeeda"
      },
      "author": "Sportskeeda Desk",
      "title": "GRA vs ALY Live Score - ECS T10 - Barcelona Live Score & Commentary | Gracia CC vs Ali Youngstars Score - Sportskeeda",
      "description": "Gracia CC vs Ali Youngstars ECS T10 - Barcelona Live Score - Catch live cricket score, ball by ball commentary and highlights of GRA vs ALY.",
      "url": "https://www.sportskeeda.com/live-cricket-score/gracia-cc-vs-ali-youngstars-match-74-28-november-2022",
      "urlToImage": null,
      "publishedAt": "2022-11-28T10:08:54Z",
      "content": "Innings break:Gracia 150/6 (10 Overs)Vibhor Yadav 54 (21) | Simranjit Singh 30 (11)Israr Ahmed 2/26 (2) | Muhammad Riaz 1/19 (2)"
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "HT Sports Desk",
      "title": "'Saleem Malik treated me like servant, told me to wash his clothes': Wasim Akram - Hindustan Times",
      "description": "Wasim Akram has made certain startling revelations about how he was mistreated by former Pakistan teammate Saleem Malik during his early playing days. | Cricket",
      "url": "https://www.hindustantimes.com/cricket/saleem-malik-treated-me-like-servant-ordered-me-to-massage-him-clean-his-clothes-wasim-akram-s-bombshell-revelation-101669628503579.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/11/28/1600x900/wasim-akram-salim-malik-getty_1669629069950_1669629078787_1669629078787.jpg",
      "publishedAt": "2022-11-28T09:55:45Z",
      "content": "Wasim Akram has made certain startling revelations about how he was mistreated by former Pakistan teammate Saleem Malik during his early playing days. Akram, who made his debut in 1984, two years aft… [+1813 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "India TV News"
      },
      "author": "Edited by India TV Trending Desk",
      "title": "MS Dhoni removes his jacket & burns the dance floor as he joins Hardik Pandya, Badshah | VIRAL VIDEO - India TV News",
      "description": "MS Dhoni has won the Internet yet again. This time not with his cricket skills but with his dance moves. Videos of Captain Cool dancing with his friends, DJ-ing and singing have gone viral on social media. Watch viral videos here.",
      "url": "https://www.indiatvnews.com/trending/news/ms-dhoni-removes-his-jacket-burns-the-dance-floor-as-he-joins-hardik-pandya-badshah-viral-video-2022-11-28-827132",
      "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/11/dhoni-dance-1669627724.jpg",
      "publishedAt": "2022-11-28T09:32:39Z",
      "content": "MS Dhoni was caught on camera having a gala time with cricketers Hardik Pandya, Ishan Kishan and Krunal Pandya among others. The former India captain Mahendra Singh Dhoni was also joined by his wife … [+1689 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "HT Sports Desk",
      "title": "'Shaw, Gaikwad there but this guy will score big 100s': Nehra on India youngster - Hindustan Times",
      "description": "Former India fast bowler Ashish Nehra has made a huge prediction on a 23-year-old batter, whom he believes is a better bet than the likes of Prithvi Shaw and Ruturaj Gaikwad. | Cricket",
      "url": "https://www.hindustantimes.com/cricket/prithvi-shaw-ruturaj-gaikwad-are-there-but-this-guy-will-give-you-big-hundreds-ashish-nehra-s-staggering-prediction-for-shubman-gill-101669622174255.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/11/28/1600x900/shaw-gaikwad-gill_1669622729060_1669622788718_1669622788718.jpg",
      "publishedAt": "2022-11-28T08:12:25Z",
      "content": "Following India's disappointing exit from the T20 World Cup, the team has undergone a transition phase, especially in T20Is with Hardik Pandya leading the younger crop and ushering them into the next… [+2148 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": "NDTV Sports Desk",
      "title": "Watch: Ruturaj Gaikwad Hits 7 Sixes In An Over In Vijay Hazare Trophy Match, Achieves World Record - NDTV Sports",
      "description": "The best part of his knock came in the penultimate over of the innings as he smashed 43 runs off the bowling of Shiva Singh. In this particular over, Ruturaj Gaikwad hit seven consecutive sixes.",
      "url": "https://sports.ndtv.com/cricket/vijay-hazare-trophy-ruturaj-gaikwad-hits-7-sixes-in-an-over-achieves-unique-record-watch-3559231",
      "urlToImage": "https://c.ndtvimg.com/2022-11/4r3i0nlg_ruturaj-gaikwad-twitter-_625x300_28_November_22.jpg",
      "publishedAt": "2022-11-28T07:56:12Z",
      "content": "Maharashtra opening batter Ruturaj Gaikwad was at his blistering best in the ongoing Vijay Hazare Trophy quarter-final against Uttar Pradesh and his unbeaten 220-run knock helped his side post 330 ru… [+1792 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Moneycontrol"
      },
      "author": "Moneycontrol News",
      "title": "Options trader PR Sundar faces backlash over 'most vulgar tweet of the year' - Moneycontrol",
      "description": "PR Sundar alleged that he was targeted by trolls on the social media site and that he spoke “their language”.",
      "url": "https://www.moneycontrol.com/news/business/markets/options-trader-pr-sundar-faces-backlash-over-most-vulgar-tweet-of-the-year-9612611.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/11/PR-Sundar-770x433.jpg",
      "publishedAt": "2022-11-28T06:45:09Z",
      "content": "Celebrated options trader PR Sundar has faced intense backlash from the investment community on twitter today after an exchange between him and another user on the social media platform.\r\nSundar, who… [+2468 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "HT Sports Desk",
      "title": "Gambhir's unusual pick as Hardik Pandya's competitor for India captaincy - Hindustan Times",
      "description": "Former India cricketer Gautam Gambhir does back the notion of Hardik taking over the reigns, but adds another name to the list of possible future captains by picking a rather unusual choice. | Cricket",
      "url": "https://www.hindustantimes.com/cricket/people-talk-about-his-off-field-activities-gautam-gambhir-s-unusual-pick-prithvi-shaw-as-hardik-pandya-s-competitor-for-india-captaincy-101669616255056.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/11/28/1600x900/hardik_gg_1669616501744_1669616519812_1669616519812.jpg",
      "publishedAt": "2022-11-28T06:42:34Z",
      "content": "With Hardik Pandya impressing as India selectors after his captaincy stint in IPL 2022 and then in the Ireland and New Zealand T20I series, there has been growing discussion among veteran cricketers … [+2191 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "DAWN.com"
      },
      "author": "Furkan Ali",
      "title": "The moral compass of the FIFA World Cup - DAWN.com",
      "description": "The level of criticism on Qatar in the lead up and in the first few days of the World Cup has probably been unprecedented for a global sporting event.",
      "url": "https://www.dawn.com",
      "urlToImage": "https://i.dawn.com/large/2022/11/2811311089c44d7.jpg?r=113115",
      "publishedAt": "2022-11-28T06:41:55Z",
      "content": "A staggering 5 billion viewers are expected to watch the football World Cup over the course of the next month. It is, by far, the biggest sporting event in the world. On the eve of the tournament, th… [+7328 chars]"
      },
      {
      "source": {
      "id": "espn-cric-info",
      "name": "ESPN Cric Info"
      },
      "author": "Alex Malcolm",
      "title": "Green gung-ho about IPL 2023 but hectic calendar will make it tough, warns Warner - ESPNcricinfo",
      "description": "The allrounder has not been discouraged by the selectors, but acknowledges that there is a monster international workload through the year",
      "url": "https://www.espncricinfo.com/story/australia-news-cameron-green-gung-ho-about-ipl-2023-but-hectic-calendar-will-make-it-tough-warns-david-warner-1346732",
      "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/349800/349833.6.jpg",
      "publishedAt": "2022-11-28T06:09:04Z",
      "content": "NewsThe allrounder has not been discouraged by the selectors, but acknowledges that there is a monster international workload through the year"
      },
      {
      "source": {
      "id": null,
      "name": "Manchester Evening News"
      },
      "author": "Richard Fay",
      "title": "Manchester United have two reasons to avoid Cody Gakpo transfer - Manchester Evening News",
      "description": "Man Utd are still interested in Cody Gakpo as they look to bolster their squad under Erik ten Hag next year.",
      "url": "https://www.manchestereveningnews.co.uk/sport/football/football-news/man-united-gakpo-transfer-news-25615992",
      "urlToImage": "https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article25616253.ece/ALTERNATES/s1200/0_GettyImages-1245138341.jpg",
      "publishedAt": "2022-11-28T06:00:00Z",
      "content": "There are few forwards in world football attracting quite as much attention as Cody Gakpo is right now. The Dutch forward has netted two goals at the World Cup in as many games, fueling further specu… [+3621 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Athletic"
      },
      "author": "Matt Slater",
      "title": "Liverpool and Manchester United are up for sale. Which is the more appealing club to buy? - The Athletic",
      "description": "Liverpool are ahead in some areas but that might not be an advantage and most experts believe United offer the better opportunity",
      "url": "https://theathletic.com/3932335/2022/11/28/liverpool-manchester-united-sale-trophies/",
      "urlToImage": "https://cdn.theathletic.com/app/uploads/2022/11/25110929/1124_UnitedLivSale-scaled.jpg",
      "publishedAt": "2022-11-28T05:16:31Z",
      "content": "Many years ago, friends wishing to wind me up would point out that I looked and sounded like my dad. One friend would simply say peas in a pod whenever he met us, knowing it would grate.\r\nNow that I … [+18157 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "HT Sports Desk",
      "title": "In search of diamond we lost gold: Kaif highlights IND's main problem before WC - Hindustan Times",
      "description": "India's ambitions of reclaiming the world title for the third time will depend on the preparations and not much time is left for it. | Cricket",
      "url": "https://www.hindustantimes.com/cricket/in-search-of-diamond-we-lost-gold-mohammad-kaif-rings-warning-bell-for-india-ahead-of-odi-world-cup-highlights-main-problem-101669536896451.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/11/27/1600x900/ind_1669540127485_1669540144880_1669540144880.jpg",
      "publishedAt": "2022-11-28T04:48:31Z",
      "content": "Team India's hunt for an elite ICC trophy got extended after a disappointing end at the T20 World Cup. The Men In Blue were completely outplayed by eventual champion England in the semifinals, losing… [+2865 chars]"
      },
      {
      "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
      },
      "author": null,
      "title": "Here’s why Sania Mirza and Shoaib Malik are tight-lipped about their divorce - Times of India",
      "description": "Sania Mirza and Shoaib Malik recently shocked fans when they announced their reality show together amid divorce rumours. Now according to reports, things are still not well between the couple and they will be announcing their divorce after the contract of the…",
      "url": "https://timesofindia.indiatimes.com/videos/entertainment/hindi/heres-why-sania-mirza-and-shoaib-malik-are-tight-lipped-about-their-divorce/videoshow/95816829.cms",
      "urlToImage": "https://timesofindia.indiatimes.com/photo/95816829/size-33422/95816829.jpg",
      "publishedAt": "2022-11-28T04:45:45Z",
      "content": "Sania Mirza\r\n and Shoaib Malik\r\n recently shocked fans when they announced their reality show together amid divorce\r\n rumours. Now according to reports, things are still not well between the couple a… [+425 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Indian Express"
      },
      "author": "Express News Service",
      "title": "'Did you see Messi cleaning the floor with our shirt and flag?' Mexican world champion boxer Canalo Alvarez threatens Lionel Messi - The Indian Express",
      "description": "In a video of celebrations in Argentina’s locker room, there is a Mexican jersey crumpled on the floor, just in front of Messi who has his jersey off.",
      "url": "https://indianexpress.com/article/sports/football/did-you-see-messi-cleaning-the-floor-with-our-shirt-and-flag-mexican-world-champion-boxer-canalo-alvarez-threatens-lionel-messi-after-locker-room-celebration-video-incident-8293671/",
      "urlToImage": "https://images.indianexpress.com/2022/11/Untitled-design-32-7.jpg",
      "publishedAt": "2022-11-28T04:41:45Z",
      "content": "Saulo Canalo Alvarez, a world champion boxer from Mexico, has tweeted out a series of angry messages against Lionel Messi. He believes that Messi kicked a Mexican jersey insultingly inside Argentinas… [+3021 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": null,
      "title": "Ronaldo Receives $225 Million Offer To Join Saudi Giants Al Nassr: Report - NDTV",
      "description": "Following the termination of his contract with Manchester United earlier this week, Christiano Ronaldo has been offered to continue his playing career with Saudi Arabian giants Al Nassr.",
      "url": "https://www.ndtv.com/world-news/ronaldo-receives-225-million-offer-to-join-saudi-giants-al-nassr-report-3558777",
      "urlToImage": "https://c.ndtvimg.com/2022-11/d1g66dtg_cristiano-ronaldo-afp_625x300_25_November_22.jpg",
      "publishedAt": "2022-11-28T04:28:00Z",
      "content": "Ronaldo is currently playing in his fifth World Cup.\r\nFollowing the termination of his contract with Manchester United earlier this week, Christiano Ronaldo has been offered to continue his playing c… [+1918 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Manchester Evening News"
      },
      "author": "Daniel Murphy",
      "title": "How Manchester United players have reacted to Cristiano Ronaldo's sudden exit - Manchester Evening News",
      "description": "Cristiano Ronaldo left Man United last week after his contract was mutually terminated following his explosive interview.",
      "url": "https://www.manchestereveningnews.co.uk/sport/football/football-news/manchester-united-news-cristiano-ronaldo-25617505",
      "urlToImage": "https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article25617600.ece/ALTERNATES/s1200/0_GettyImages-1444540516.jpg",
      "publishedAt": "2022-11-28T04:00:00Z",
      "content": "Manchester United players have been reacting following Cristiano Ronaldo's departure from the club.\r\nUnited confirmed in a statement last week that their legendary forward's contract had been termina… [+2585 chars]"
      }
      ]
  );

  const [arti2,setari2]=useState(
    [
      {
      "source": {
      "id": "google-news",
      "name": "Google News"
      },

      "author": null,
      "title": "Top 5 BoAt Airdopes you can buy - The Hindu",
      "description": null,
      "url": "https://news.google.com/__i/rss/rd/articles/CBMiVWh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9icmFuZGh1Yi90b3AtNS1ib2F0LWFpcmRvcGVzLXlvdS1jYW4tYnV5L2FydGljbGU2NjE5NTI1NC5lY2XSAQA?oc=5",
      "urlToImage": null,
      "publishedAt": "2022-11-28T12:22:00Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Moneycontrol"
      },
      "author": "Carlsen Martin",
      "title": "Asus Vivobook Pro 16X OLED Review: This mobile workstation is a content creator's dream - Moneycontrol",
      "description": "But this dream is extremely costly!",
      "url": "https://www.moneycontrol.com/news/technology/asus-vivobook-pro-16x-oled-review-this-mobile-workstation-is-a-content-creators-dream-9609191.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/11/asus-vivobook-pro-770x433.jpg",
      "publishedAt": "2022-11-28T12:19:33Z",
      "content": "The Asus Vivobook Pro 16X OLED laptop recently joined the ranks of the companys creator notebooks. Asus Vivobook line-up has always been targeted towards consumers, always offering a practical soluti… [+9887 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Digital Trends"
      },
      "author": "Jesse Hollington",
      "title": "5 Apple gadgets you really should avoid this holiday season - Digital Trends",
      "description": "Apple makes some great products, but they're not all obvious choices. Here are five Apple gadgets you'll want to think twice about before buying this season.",
      "url": "https://www.digitaltrends.com/mobile/5-apple-gadgets-you-should-avoid-this-holiday-season-iphone-ipad/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/06/apple-products-watch-iphone-airpods.jpg?p=1",
      "publishedAt": "2022-11-28T12:00:22Z",
      "content": "Theres no doubt that Apple makes some great products, and if youre an Apple fan or have one in your life then youre probably already scouting for AirPods, iPhones, and iPads to put under the tree thi… [+8172 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Essentially Sports"
      },
      "author": null,
      "title": "Call of Duty Warzone 2 Player Spots an Astonishing Verdansk Map Easter Egg in the Latest Battle Royale Sequel - EssentiallySports",
      "description": "An eagle-eyed Call of Duty Warzone 2 player finds a hidden easter egg connecting to the beloved map of Verdansk from 2020's Warzone.",
      "url": "https://www.essentiallysports.com/esports-news-call-of-duty-warzone-2-player-spots-an-astonishing-verdansk-map-easter-egg-in-the-latest-battle-royale-sequel/",
      "urlToImage": "https://image-cdn.essentiallysports.com/wp-content/uploads/call-of-duty-warzone-2-2-6.jpg",
      "publishedAt": "2022-11-28T12:00:00Z",
      "content": "Ever since the launch of the original Warzone in 2020, Verdansk has made a special place in the hearts of millions of fans. Although its nowhere to be seen these days and theres a new battle royale o… [+2249 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Sportskeeda"
      },
      "author": "Siddharth Patil",
      "title": "Pokemon Scarlet and Violet: How to get Magikarp and Gyarados - Sportskeeda",
      "description": "The brand new region of Paldea in Pokemon Scarlet and Violet is a massive open-world that's just waiting to be explored. As such, there are both old and new Pokemon to encounter.",
      "url": "https://www.sportskeeda.com/pokemon/pokemon-scarlet-violet-how-get-magikarp-gyarados",
      "urlToImage": "https://staticg.sportskeeda.com/editor/2022/11/c78b8-16696316929487-1920.jpg",
      "publishedAt": "2022-11-28T11:45:30Z",
      "content": "The brand new region of Paldea in Pokemon Scarlet and Violet is a massive open-world that's just waiting to be explored. As such, there are both old and new Pokemon to encounter. These include fan-fa… [+3357 chars]"
      },
      {
      "source": {
      "id": "google-news",
      "name": "Google News"
      },
      "author": null,
      "title": "How to turn off autoplaying video previews on Amazon Prime Video - The Indian Express",
      "description": null,
      "url": "https://news.google.com/__i/rss/rd/articles/CBMigQFodHRwczovL2luZGlhbmV4cHJlc3MuY29tL2FydGljbGUvdGVjaG5vbG9neS90ZWNoLW5ld3MtdGVjaG5vbG9neS9ob3ctdG8tdHVybi1vZmYtYXV0b3BsYXlpbmctdmlkZW8tcHJldmlld3MtcHJpbWUtdmlkZW8tODI5NDUwOS_SAQA?oc=5",
      "urlToImage": null,
      "publishedAt": "2022-11-28T11:22:10Z",
      "content": null
      },
      {
      "source": {
      "id": "google-news",
      "name": "Google News"
      },
      "author": null,
      "title": "Google brings new updates to Workspace; tweaks Gmail search results - BusinessLine",
      "description": null,
      "url": "https://news.google.com/__i/rss/rd/articles/CBMihQFodHRwczovL3d3dy50aGVoaW5kdWJ1c2luZXNzbGluZS5jb20vaW5mby10ZWNoL2dvb2dsZS1icmluZ3MtbmV3LXVwZGF0ZXMtdG8td29ya3NwYWNlLXR3ZWFrcy1nbWFpbC1zZWFyY2gtcmVzdWx0cy9hcnRpY2xlNjYxOTUyMDcuZWNl0gEA?oc=5",
      "urlToImage": null,
      "publishedAt": "2022-11-28T11:13:49Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Esports.net"
      },
      "author": null,
      "title": "Has Harbor flopped as a controller in the current Valorant meta? - Esports.net News",
      "description": "Since the launch of the Indian Origin Character Harbor in Valorant, there has been quite a lot of discussion on the Character and his usage",
      "url": "https://www.esports.net/news/harbor-flopped-valorant-meta/",
      "urlToImage": "https://www.esports.net/wp-content/uploads/2022/11/Harbor-Valorant.jpg",
      "publishedAt": "2022-11-28T11:08:42Z",
      "content": "Since the launch of the Indian origin character Harbor in Valorant, there has been quite a lot of discussion on the Agent. Firstly, due to the massive event that took place in the city of Mumbai by R… [+6249 chars]"
      },
      {
      "source": {
      "id": "google-news",
      "name": "Google News"
      },
      "author": null,
      "title": "How to recover deleted apps and games on Android - Android Police",
      "description": null,
      "url": "https://news.google.com/__i/rss/rd/articles/CBMiSGh0dHBzOi8vd3d3LmFuZHJvaWRwb2xpY2UuY29tL2hvdy10by1yZWNvdmVyLWRlbGV0ZWQtYXBwcy1nYW1lcy1hbmRyb2lkL9IBAA?oc=5",
      "urlToImage": null,
      "publishedAt": "2022-11-28T11:00:00Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Moneycontrol"
      },
      "author": "Moneycontrol News",
      "title": "Moto X40 with Snapdragon 8 Gen 2 SoC, IP68 Rating launching in December - Moneycontrol",
      "description": "The Moto X40 recently managed a 1312901 overall score on benchmarking platform AnTuTu, surpassing the MediaTek Dimensity 9200 SoC.",
      "url": "https://www.moneycontrol.com/news/technology/moto-x40-with-snapdragon-8-gen-2-soc-ip68-rating-launching-in-december-9613631.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/11/moto-x40-770x433.jpg",
      "publishedAt": "2022-11-28T10:56:00Z",
      "content": "Motorola has officially confirmed the launch of its upcoming flagship smartphone in China. The Moto Edge X40 is arriving in China sometime next month and will be the first smartphone from the company… [+1365 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "HT News Desk",
      "title": "After staying away for years, Snapchat finally makes debut on Microsoft store - Hindustan Times",
      "description": "The Snapchat app is built on the recently launched web version of Snapchat. It runs on Microsoft’s Chromium-based Microsoft Edge. It is just has 1.4MB size and carries the same features as the web version.",
      "url": "https://www.hindustantimes.com/technology/after-staying-away-for-years-snapchat-finally-makes-debut-on-microsoft-store-101669613277609.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/11/28/1600x900/Social-Media-Slump-0_1669615188264_1669615188264_1669615210312_1669615210312.jpg",
      "publishedAt": "2022-11-28T10:45:10Z",
      "content": "Snapchat, the instant messaging and picture sharing app, has since long stayed away from Windows based systems. However, things seem to be changing now. According to a report from Windows Central the… [+1240 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Moneycontrol"
      },
      "author": "Moneycontrol News",
      "title": "Apple's Esge Andersen talks Airflow and Lossless audio in interview - Moneycontrol",
      "description": "Andersen says Apple can improve sound quality without changing the codec",
      "url": "https://www.moneycontrol.com/news/technology/apples-esge-andersen-talks-airflow-and-lossless-audio-in-interview-9614091.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/09/airpods-Pro-2-1-770x433.jpg",
      "publishedAt": "2022-11-28T10:42:11Z",
      "content": "Apple engineer Esge Andersen gave an interview to publication What Hi-Fi? recently, where he talked about what Apple has done to improve sound quality on the AirPods Pro 2. He also addressed the lack… [+1489 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Zigwheels.com"
      },
      "author": null,
      "title": "The Ferrari Vision Gran Turismo Is A 1356PS hypercar For The Metaverse - ZigWheels",
      "description": "The single-seater Vision GT exists only inside the Gran Turismo racing simulation and will be displayed at the Ferrari Museum in Maranello",
      "url": "https://www.zigwheels.com/news-features/general-news/the-ferrari-vision-gran-turismo-is-a-1356ps-hypercar-for-the-metaverse/47867/",
      "urlToImage": "https://media.zigcdn.com/media/content/2022/Nov/cover_638487d746b00.jpg",
      "publishedAt": "2022-11-28T10:35:49Z",
      "content": "Get latest updates on the automobile community\r\n<ul><li>The AWD hypercar features a 3.0-litre, twin-turbo V6 good for 1030PS.</li><li>It also features a hybrid system that comes bundled with three el… [+2444 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Carwale.com"
      },
      "author": "Bilal Ahmed Firfiray",
      "title": "BMW 3.0 CSL reborn - CarWale",
      "description": "Last of 50th-anniversary celebration model",
      "url": "https://www.carwale.com/news/bmw-30-csl-reborn/",
      "urlToImage": "https://imgd.aeplcdn.com/642x336/n/cw/ec/136019/right-front-three-quarter3.jpeg?isig=0&art=1&q=75",
      "publishedAt": "2022-11-28T10:16:33Z",
      "content": "-         Last of 50th-anniversary celebration model\r\n-         Only 50 units will be made\r\nThe original 1971 BMW 3.0 CSL was a homologation specially built for the European Touring Car Championship.… [+2133 chars]"
      },
      {
      "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
      },
      "author": "Jagmeet Singh",
      "title": "WhatsApp rolls out a feature that makes it easier to message yourself - TechCrunch",
      "description": "WhatsApp has started rolling out a feature called 'Message Yourself' to let you chat with yourself and send messages to your own account.",
      "url": "https://techcrunch.com/2022/11/28/whatsapp-rolls-out-a-feature-that-makes-it-easier-to-message-yourself/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/whatsapp-message-yourself.jpg",
      "publishedAt": "2022-11-28T10:15:10Z",
      "content": "WhatsApp has started rolling out a feature to let you chat with yourself. Sending messages to your own account can be a way to keep a piece of information easily accessible, right next to your other … [+2121 chars]"
      },
      {
      "source": {
      "id": "google-news",
      "name": "Google News"
      },
      "author": null,
      "title": "10 Best Smartwatches Under 10000 In India - Buyer’s Guide - The Hindu",
      "description": null,
      "url": "https://news.google.com/__i/rss/rd/articles/CBMibGh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9icmFuZGh1Yi8xMC1iZXN0LXNtYXJ0d2F0Y2hlcy11bmRlci0xMDAwMC1pbi1pbmRpYS1idXllcnMtZ3VpZGUvYXJ0aWNsZTY2MTk0NzQ0LmVjZdIBcWh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9icmFuZGh1Yi8xMC1iZXN0LXNtYXJ0d2F0Y2hlcy11bmRlci0xMDAwMC1pbi1pbmRpYS1idXllcnMtZ3VpZGUvYXJ0aWNsZTY2MTk0NzQ0LmVjZS9hbXAv?oc=5",
      "urlToImage": null,
      "publishedAt": "2022-11-28T09:53:00Z",
      "content": null
      },
      {
      "source": {
      "id": "google-news",
      "name": "Google News"
      },
      "author": null,
      "title": "iQOO Neo 7 SE Key Features Officially Confirmed, Specifications Emerge on TENAA - gizmochina",
      "description": null,
      "url": "https://news.google.com/__i/rss/rd/articles/CBMidWh0dHBzOi8vd3d3Lmdpem1vY2hpbmEuY29tLzIwMjIvMTEvMjgvaXFvby1uZW8tNy1zZS1rZXktZmVhdHVyZXMtb2ZmaWNpYWxseS1jb25maXJtZWQtc3BlY2lmaWNhdGlvbnMtZW1lcmdlLW9uLXRlbmFhL9IBe2h0dHBzOi8vd3d3Lmdpem1vY2hpbmEuY29tLzIwMjIvMTEvMjgvaXFvby1uZW8tNy1zZS1rZXktZmVhdHVyZXMtb2ZmaWNpYWxseS1jb25maXJtZWQtc3BlY2lmaWNhdGlvbnMtZW1lcmdlLW9uLXRlbmFhLz9hbXA9MQ?oc=5",
      "urlToImage": null,
      "publishedAt": "2022-11-28T09:47:56Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "The Sportsrush"
      },
      "author": "Adnan Juzar Kachwala",
      "title": "What is JP in GTA V? The Uses of JP Explained - The Sportsrush",
      "description": "The JP in GTA V is used to give you an advantage while doing a job. We will discuss all the details of JP in this article.",
      "url": "https://thesportsrush.com/what-is-jp-in-gta-v-the-uses-of-jp-explained/",
      "urlToImage": "https://cdn-wp.thesportsrush.com/2022/11/8114fe0a-grand_theft_auto_online.jpg",
      "publishedAt": "2022-11-28T09:45:00Z",
      "content": "The JP in GTA V is used to give you an advantage while doing a job. We will discuss all the details of JP in this article.\r\nWhen you complete Jobs in GTA Online you get Job Points. The primary purpos… [+1433 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "YouTube"
      },
      "author": null,
      "title": "Top 5 must hear AI Podcasts - AIM Media Studios",
      "description": "Listening is better than reading or watching. So here are the Top 5 AI podcasts for you to listen to.AI in Business podcast, hosted by Daniel Faggella, featu...",
      "url": "https://www.youtube.com/watch?v=CnT9I_OE688",
      "urlToImage": "https://i.ytimg.com/vi/CnT9I_OE688/hq2.jpg?sqp=-oaymwEoCOADEOgC8quKqQMcGADwAQH4Ac4FgAKACooCDAgAEAEYQSA-KH8wDw==&rs=AOn4CLBnylNHbwzdqc5xaeRVbqFkq9014g",
      "publishedAt": "2022-11-28T09:30:04Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Moneycontrol"
      },
      "author": "Moneycontrol News",
      "title": "OpenAI trains a bot to play Minecraft using 70,000 hours of gameplay videos - Moneycontrol",
      "description": "The researchers called this an advancement in Imitation Learning",
      "url": "https://www.moneycontrol.com/news/technology/openai-trains-a-bot-to-play-minecraft-using-70000-hours-of-gameplay-videos-9613141.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/11/Minecraft-770x433.jpg",
      "publishedAt": "2022-11-28T09:03:03Z",
      "content": "OpenAI, the artificial intelligence research and deployment company, has managed to successfully train a bot to play Minecraft using 70,000 hours of gameplay footage.\r\nIt is the first bot that can cr… [+1684 chars]"
      }
      ]
  );
  const[gen,ssetg]=useState(
    [
      {
      "source": {
      "id": null,
      "name": "The Indian Express"
      },
      "author": "Sports Desk",
      "title": "Brazil vs Switzerland FIFA World Cup 2022 Live Updates: BRA 0-0 SUI after 35 mins at Stadium 974 - The Indian Express",
      "description": "Brazil vs Switzerland Group G Live Score Updates: BRA vs SWI at Stadium 974.",
      "url": "https://indianexpress.com/article/sports/football/fifa-world-cup-2022-live-updates-cameroon-vs-serbia-south-korea-vs-ghana-brazil-vs-switzerland-portugal-vs-uruguay-8294026/",
      "urlToImage": "https://images.indianexpress.com/2022/11/BRA-vs-SWI-Live.jpg",
      "publishedAt": "2022-11-28T16:33:45Z",
      "content": "Uruguay's Federico Valverde celebrates scoring a goal\r\nPortugal vs Uruguay: Fede Valverde is an embodiment of the spirit of Garra Chharua\r\nValverde is an embodiment of the unique Uruguayan spirit of … [+1629 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Indian Express"
      },
      "author": "Express Web Desk",
      "title": "China Covid Protests Live Updates: UK tells Chinese government to take notice of lockdown protests; China defends zero-Covid policy in the face of massive protests - The Indian Express",
      "description": "China Covid Protests Live Updates: China's foreign ministry responded saying that the reporter had not identified himself as a journalist.",
      "url": "https://indianexpress.com/article/world/china-covid-protests-live-updates-8293638/",
      "urlToImage": "https://images.indianexpress.com/2022/11/China-security.jpg",
      "publishedAt": "2022-11-28T15:52:43Z",
      "content": "China posted another record high COVID-19 infections on Monday, after an extraordinary weekend of protests across the country over restrictive coronavirus curbs, in scenes unprecedented since Preside… [+1495 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Indian Express"
      },
      "author": "Express News Service",
      "title": "Manipal assistant professor debarred after calling student 'Kasab'; video viral - The Indian Express",
      "description": "The engineering student later said the assistant professor had apologised and that ‘we, as a student community, must let it go as a genuine mistake’.",
      "url": "https://indianexpress.com/article/cities/bangalore/video-karnataka-students-outburst-asst-prof-kasab-probe-8294502/",
      "urlToImage": "https://images.indianexpress.com/2022/11/video-1.jpg",
      "publishedAt": "2022-11-28T15:31:52Z",
      "content": "A video of an angry exchange between an engineering student and an assistant professor of Manipal Institute of Technology who allegedly addressed him by the name of a terrorist has gone viral on soci… [+2841 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "HT Tech",
      "title": "New iPhone features that you simply must try-Magical photo trick, notifications, more - HT Tech",
      "description": "You should try these new iPhone features for a much richer, and fun, experience.",
      "url": "https://tech.hindustantimes.com/how-to/new-iphone-features-that-you-simply-must-try-magical-photo-trick-notifications-more-71669646615930.html",
      "urlToImage": "https://images.hindustantimes.com/tech/img/2022/11/28/1600x900/neil-soni-6wdRuK7bVTE-unsplash_1669646888773_1669646921064_1669646921064.jpg",
      "publishedAt": "2022-11-28T14:51:33Z",
      "content": "The iPhone is a hidden well of secret features. Literally! Chances are that you may have been introduced to some common features of the iPhone, but the truth is that there are a number of secret tric… [+2233 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Livemint"
      },
      "author": "Meghna Sen",
      "title": "Sensex may hit 80,000 by Dec 2023, says Morgan Stanley. But there's a catch | Mint - Mint",
      "description": "India might have to wait until early next year to see its bonds enter the JPMorgan emerging market global index",
      "url": "https://www.livemint.com/market/stock-market-news/sensex-may-hit-80-000-by-dec-2023-but-there-s-a-catch-11669643934903.html",
      "urlToImage": "https://images.livemint.com/img/2022/11/28/600x338/sensex_1669646387530_1669646387758_1669646387758.jpg",
      "publishedAt": "2022-11-28T14:40:37Z",
      "content": "BSE Sensex is expected to hit 80,000 by December 2023 if India is included in the global bond indexes and prices of commodities including oil and fertilisers correct sharply and earnings growth compo… [+3300 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": "NDTV Sports Desk",
      "title": "South Korea vs Ghana, FIFA WC Live: Ghana Take Lead Through Kudus; Make It 3-2 vs South Korea - NDTV Sports",
      "description": "FIFA World Cup 2022, South Korea vs Ghana Live: South Korea pulled themselves level 2-2 with two quick second-half strikes after Ghana went into the break with a 2-0 lead.",
      "url": "https://sports.ndtv.com/fifa-world-cup-2022/fifa-world-cup-2022-south-korea-vs-ghana-football-live-score-updates-3559328",
      "urlToImage": "https://c.ndtvimg.com/2022-11/v95voapo_kudus-afp_625x300_28_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      "publishedAt": "2022-11-28T14:32:54Z",
      "content": "South Korea vs Ghana, FIFA World Cup 2022 Live Updates: Mohamamd Kudus struck for the second time to help Ghana re-establish their lead with a second-half strike, making it 3-2 against South Korea. E… [+679 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "Amit Bathla",
      "title": "Former Russian minister caught with satellite phone at Dehradun airport: Police - Hindustan Times",
      "description": "According to officials, the use of satellite phones other than BSNL-provided Inmarsat Satellite handset (ISAT Phone) in India is unlawful",
      "url": "https://www.hindustantimes.com/cities/dehradun-news/former-russian-minister-caught-with-satellite-phone-at-dehradun-airport-police-101669645944694.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/11/28/1600x900/320665bc-6f29-11ed-bd01-73668e446825_1669645943405.jpg",
      "publishedAt": "2022-11-28T14:32:24Z",
      "content": "A former Russian minister was on Sunday caught with a prohibited satellite phone during a security check at the Jolly Grant Airport in Uttarakhands Dehradun. \r\nVictor Semenov (64), who was the minist… [+2010 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": null,
      "title": "On Camera, Men With Swords Attack Police Van Carrying Aaftab Poonawala - NDTV",
      "description": "Police van carrying Aaftab Poonawala, accused of killing girlfriend, attacked in Delhi",
      "url": "https://www.ndtv.com/india-news/police-van-carrying-aaftab-poonawala-accused-of-killing-girlfriend-attacked-in-delhi-3560411",
      "urlToImage": "https://c.ndtvimg.com/2022-11/rb24b0c8_attack-on-aaftab-poonawala_650x400_28_November_22.jpg",
      "publishedAt": "2022-11-28T14:29:00Z",
      "content": "New Delhi: A police van carrying Aaftab Amin Poonawala -- accused of the horrific murder of girlfriend Shraddha Walkar in Delhi -- was attacked by a group of sword-wielding men this evening. The poli… [+1690 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "NDTV News"
      },
      "author": null,
      "title": "World's Largest Volcano In Hawaii Erupts For 1st Time In 40 Years - NDTV",
      "description": "Hawaii's Mauna Loa, the largest active volcano in the world, has erupted for the first time in nearly 40 years, US authorities said, as emergency crews went on alert early Monday.",
      "url": "https://www.ndtv.com/world-news/worlds-largest-volcano-in-hawaii-erupts-alert-level-raised-3559989",
      "urlToImage": "https://c.ndtvimg.com/2022-11/32mr4vb_hawaii-volcano_625x300_28_November_22.jpg",
      "publishedAt": "2022-11-28T14:02:00Z",
      "content": "Hawaii authorities said no evacuation orders have been given.\r\nLos Angeles: Hawaii's Mauna Loa, the largest active volcano in the world, has erupted for the first time in nearly 40 years, US authorit… [+2124 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Cricbuzz"
      },
      "author": null,
      "title": "Gaikwad special powers Maharashtra into Vijay Hazare semis | Cricbuzz.com - Cricbuzz - Cricbuzz",
      "description": "Karnataka, Saurashtra and Assam won their respective quarterfinal games",
      "url": "https://www.cricbuzz.com/cricket-news/124639/gaikwad-special-powers-maharashtra-into-vijay-hazare-semis",
      "urlToImage": "http://www.cricbuzz.com/a/img/v1/600x400/i1/c249027/file-photo-ruturaj-gaikwad.jpg",
      "publishedAt": "2022-11-28T13:27:43Z",
      "content": "[File photo]: Ruturaj Gaikwad scored seven sixes in an over during his career-best 220* off 119 © BCCI/IPL\r\nPunjab vs Karnataka, Ahmedabad\r\nAbhishek Sharma's 109 and Sanvir Singh's all-round efforts … [+4558 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "YouTube"
      },
      "author": null,
      "title": "Indian authorities step up vaccination efforts as Mumbai sees surge in measles cases - CNA",
      "description": "India's financial capital Mumbai is experiencing a surge in measles cases. Outbreaks in the wider state of Maharashtra have affected almost 7,000 children, a...",
      "url": "https://www.youtube.com/watch?v=LryMc8ogxUY",
      "urlToImage": "https://i.ytimg.com/vi/LryMc8ogxUY/maxresdefault.jpg",
      "publishedAt": "2022-11-28T13:15:20Z",
      "content": null
      },
      {
      "source": {
      "id": "the-times-of-india",
      "name": "The Times of India"
      },
      "author": "Bloomberg",
      "title": "A third of Adani’s NDTV offer subscribed despite steep discount - Economic Times",
      "description": "The category of corporate investors have tendered the most at 3.9 million shares while retail investors have offered to sell a little over 706,000 shares to the ports-to-power conglomerate with qualified Institutional buyers making up the rest",
      "url": "https://economictimes.indiatimes.com/markets/stocks/news/a-third-of-adanis-ndtv-offer-subscribed-despite-steep-discount/articleshow/95832153.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-95832244,width-1070,height-580,imgsize-31020,overlay-etmarkets/photo.jpg",
      "publishedAt": "2022-11-28T13:11:00Z",
      "content": "Adani Group has already found investors willing to sell 5.3 million shares of the Indian broadcaster -- or roughly a third of the entire open offer size -- despite the deep discount to the stocks cur… [+1902 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Indian Express"
      },
      "author": "Science Desk",
      "title": "Researchers investigate the secret to Octopus intelligence | Technology News - The Indian Express",
      "description": "Octopuses are remarkably intelligent animals, especially considering the fact that most other invertebrates have little more than rudimentary nervous systems. Now, scientists are working to uncover what caused them to develop such complex nervous systems.",
      "url": "https://indianexpress.com/article/technology/science/octopus-intelligence-microrna-nervous-system-8294654/",
      "urlToImage": "https://images.indianexpress.com/2022/11/Octopus-intelligence-20221128.jpg",
      "publishedAt": "2022-11-28T12:53:35Z",
      "content": "Many cephalopods like octopus, cuttlefish and squid are remarkably intelligent, especially considering the fact that they are all invertebrates. Now, a team of scientists have worked to uncover how t… [+3820 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "ANI",
      "title": "Red Planet Day 2022: Mind-blowing facts about Mars - HT Tech",
      "description": "Named after the Roman God of War, Mars, which even though it has a thin atmosphere composed primarily of carbon dioxide, still holds humanity's fascination centuries after its discovery.",
      "url": "https://tech.hindustantimes.com/tech/news/red-planet-day-2022-mind-blowing-facts-about-mars-71669624565068.html",
      "urlToImage": "https://images.hindustantimes.com/tech/img/2022/11/28/1600x900/Untitled_design_-_2022-11-28T160157855_1669631605264_1669631605384_1669631605384.png",
      "publishedAt": "2022-11-28T12:25:15Z",
      "content": "Mars, also known as the Red Planet due to its soil's colour, is the fourth planet from the Sun and Earth's neighbour which holds the potential to possibly host the humankind some day.\r\nThe humans hav… [+2435 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Livelaw.in"
      },
      "author": "Sohini Chowdhury",
      "title": "'Can High Court Become Town Planner?\" : Supreme Court Stays AP HC Direction To Develop Amaravati Capital... - Live Law - Indian Legal News",
      "description": "In the plea pertaining to the  Andhra-Pradesh Three Capitals row, the Supreme Court, on Monday, stays certain  time-bound directions passed by the Andhra Pradesh High Court, including the  one...",
      "url": "https://www.livelaw.in/top-stories/supreme-court-andhra-pradesh-amaravati-capital-three-capital-city-215258",
      "urlToImage": "https://www.livelaw.in/h-upload/2021/07/14/396634-whatsapp-image-2021-07-14-at-40835-pm.jpeg",
      "publishedAt": "2022-11-28T11:23:16Z",
      "content": "In the plea pertaining to the Andhra-Pradesh Three Capitals row, the Supreme Court, on Monday, stays certain time-bound directions passed by the Andhra Pradesh High Court, including the one directing… [+16278 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Deccan Herald"
      },
      "author": null,
      "title": "ACV Burn Keto Gummies Canada | ACV Keto Gummies CA Shark Tank | Keto Blast Gummies Fake Exposed & Legitimate Review? - Deccan Herald",
      "description": "The ACV Burn Keto Gummies work using the ketosis principle and are distinctive in that it aids in losing weight fast while at the same time it is not detrimental to your health.  Are you also a fan of attention but don't get it due to your size? Are you also …",
      "url": "https://www.deccanherald.com/brandspot/pr-spot/acv-burn-keto-gummies-canada-acv-keto-gummies-ca-shark-tank-keto-blast-gummies-fake-exposed-legitimate-review-1166435.html",
      "urlToImage": "https://www.deccanherald.com/sites/dh/files/vhncvb-1166435-1669634461.jpg",
      "publishedAt": "2022-11-28T11:21:01Z",
      "content": "The ACV Burn Keto Gummies work using the ketosis principle and are distinctive in that it aids in losing weight fast while at the same time it is not detrimental to your health.  Are you also a fan o… [+9927 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Business Standard"
      },
      "author": "BS Web Team",
      "title": "WhatsApp announces Message Yourself feature: What is it and how it works - Business Standard",
      "description": "The Message Yourself feature is a 11 chat window on WhatsApp for the user to transferring media documents contacts and more to self",
      "url": "https://www.business-standard.com/article/technology/whatsapp-announces-message-yourself-feature-what-is-it-and-how-it-works-122112800670_1.html",
      "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2021-01/14/full/1610620831-7911.jpg",
      "publishedAt": "2022-11-28T11:03:00Z",
      "content": "Meta-owned instant messaging platform WhatsApp on Monday announced the roll out of the 'Message Yourself' feature. It is a 1:1 chat with yourself to send notes, reminders, and updates as needed, anno… [+1488 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Zee Business"
      },
      "author": "ZeeBiz WebTeam",
      "title": "Stock Market HIGHLIGHTS: All time high closing for Nifty, Sensex; BPCL, Hero MotoCorp end among top - Zee Business",
      "description": "Stock Market HIGHLIGHTS: Out of the 15 Nifty sectoral indices, six ended in the red against 9 gaine",
      "url": "https://www.zeebiz.com/market-news/live-updates-stock-market-today-sensex-nifty-paytm-anil-singhvi-strategy-china-covid-19-zomato-hero-motocorp-dow-jones-nikkei-brent-dharmaj-crop-ipo-209834",
      "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2022/11/28/212937-m1.jpg",
      "publishedAt": "2022-11-28T11:02:06Z",
      "content": "Stock Market HIGHLIGHTS: Unfazed by the losses witnessed by their Asia peers, Indian frontline indices continued their winning streak on Monday. Nifty50 scaled a new lifetime high of 18,614.25, bette… [+2845 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Medical Dialogues"
      },
      "author": "Kajal Rajput",
      "title": "ICMR issues guidelines against use of antibiotics for low-grade fever - Medical Dialogues",
      "description": "\"A clinical diagnosis most often helps us predict causative pathogens fitting into a clinical syndrome which would tailor the correct antibiotic rather than blindly relying on fever, procalcitonin...",
      "url": "https://medicaldialogues.in/news/health/icmr-issues-guidelines-for-prescribing-antibiotics-103060",
      "urlToImage": "https://medicaldialogues.in/h-upload/2022/11/28/192141-icmr-6.jpg",
      "publishedAt": "2022-11-28T10:30:06Z",
      "content": "New Delhi: The apex research regulator the Indian Council of Medical Research (ICMR) has issued guidelines warning against the use of antibiotics for conditions such as low-grade fever and viral bron… [+4355 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Livelaw.in"
      },
      "author": "LIVELAW NEWS NETWORK",
      "title": "Centre Disrupts Judges' Seniority By Splitting Up Collegium Resolutions: Supreme Court - Live Law - Indian Legal News",
      "description": "The Supreme Court today criticized the practice of Centre splitting up the Collegium Resolutions by approving some names from the recommendation and withholding other names. While hearing a...",
      "url": "https://www.livelaw.in/top-stories/collegium-resolutions-supreme-court-centre-disrupts-judges-seniority-by-splitting-215250",
      "urlToImage": "https://www.livelaw.in/h-upload/2022/09/20/435920-justice-sk-kaul-and-sc.jpg",
      "publishedAt": "2022-11-28T10:27:26Z",
      "content": "The Supreme Court today criticized the practice of Centre splitting up the Collegium Resolutions by approving some names from the recommendation and withholding other names. \r\nWhile hearing a petitio… [+2500 chars]"
      }
      ]
  );
  const toggleMode=()=>{
   
    if(mode=='dark'){
     document.body.style.backgroundColor="black"
     setMode("light")  
     document.body.style.backgroundColor="white"
    }else{
     setMode('dark');
     document.body.style.backgroundColor="black"
    }
  
    }
    
  return (
    <>
   
    <div className="App">
    <BrowserRouter>
         
         <Routes>
         <Route path="/" exact element={<Navbar  toggleMode={toggleMode} mode={mode}/>} />
        
                 
                <Route exact path='/N' element={<News ar={gen}  author={article[0].author}  title={article[0].title}  description={article[0].description} url={article[0].url} urlM={article[0].urlToImage} publish={article[0].publishedAt}   toggleMode={toggleMode} mode={mode}/>}/>
                 
                    {/* <Route exact path='/sports' element={ <News  ar={arti1[0]} author={arti1[0].author}  title={arti1[0].title}  description={arti1[0].description} url={arti1[0].url} urlM={arti1[0].urlToImage} publish={arti1[0].publishedAt} toggleMode={toggleMode} mode={mode} />}/> */}
                  
                 <Route exact path='/sports' element={ <News  ar={arti1} author={arti1[0].author}  title={arti1[0].title}  description={arti1[0].description} url={arti1[0].url} urlM={arti1[0].urlToImage} publish={arti1[0].publishedAt} toggleMode={toggleMode} mode={mode} />}/>
                
                 
                 <Route exact path='/technology' element={<News ar={arti2} author={arti2[0].author}  title={arti2[0].title}  description={arti2[0].description} url={arti2[0].url} urlM={arti2[0].urlToImage} publish={arti2[0].publishedAt}   toggleMode={toggleMode} mode={mode}/>}/>
                 
            
                 <Route exact path='/business' element={<News ar={article}  author={article[0].author}  title={article[0].title}  description={article[0].description} url={article[0].url} urlM={article[0].urlToImage} publish={article[0].publishedAt}   toggleMode={toggleMode} mode={mode}/>}/>
                 
                 
       
         <Route  path="/signin" exact element={<Newsitem/>} />
      {/* <PrivateRoute path="/user/Dashboard" exact element={<UserDashBoard/>} />
      <AdminRoute path="/admin/Dashboard" exact element={<AdminDash />} /> */}
       </Routes>
         </BrowserRouter>
    </div>


    </>
    
  );
}

export default App;
