
INSTITUTE FOR ADVANCED COMPUTING AND 
SOFTWARE DEVELOPMENT 
AKURDI, PUNE
Documentation On
“Fine Living”
E-DAC MAY 2021


Submitted By:
Group No: 10
Ankita Singh 1015
 Akshay Shimpi 1011







Mr. Prashant Karhale	Mr. Milind Arjun
Centre Coordinator	Project Guide 


Table of Contents




1.	Introduction	1
Document Purpose	2
Problem Statement	2
Product Scope	2
Aim & Objectives	2
2.	Overall Description	3
Product Perspective	3
Benefits of System	3
User and Characteristics	3
Operating Environment	3
Design and Implementation Constraints	3
3.	Requirements Specification	4
External Interface Requirements	4
3.3 Non-Functional Requirements	12
4.	System Diagram	11
Activity Diagram	11
Data Flow Diagram	13
Class Diagram	15
Use Case Diagram	16
ER Diagram	16
5.	Table Structure	17
User	17
Services	18
6.	Conclusion	19
Future Scope	19
7.	References	20 

1.	Introduction



Fine Living.com is an e-commerce website allows consumers to electronically provide goods and services with no barriers of time or distance. Electronic commerce has expanded rapidly over the past five years and is predicted to continue at this rate, or even accelerate. There is almost no area of service Fine Living does not cover. Having nine categories present in the app – massage and fitness, appliance repair, home cleaning, moving homes, beauty and spa, painting and renovation, weddings and events, academic tutors, business and taxes – everything here is just one click away. Payment options - COD, EMI, Credit card, Debit card & more.

Document Purpose

The purpose of the document is to collect and analyze all assorted ideas that have come up to define the system, its requirements with respect to consumers. The purpose of this SRS document is to provide a detailed overview of our software service, its parameters and goals. Developing an online platform is a job that requires equal share of technological expertise and sound decision making. Principally built on MERN stack, this website makes home services experience as satisfying as in a real store. Programming engineers make it sure that the site is high on responsiveness and low on technical errors, which is the most favorable selling point of this online platform.

Enhance Business Processes:
To be able to use internet technology to project to the global world instead of limiting their services to their local domain alone, thus increase their return on investment (ROI).

Fine Living Services:
A platform through which user can order household services and seller can ship or provide those services to user. 
 


Problem Statement
Existing system for household service is based on our traditional way of calling individual person or people for any kind of service if it is plumber, electrician, AC repair, etc. During the pandemic situation of June 2020 people had problems in handling any of these issues due to unavailability of skilled professionals. Hence this system is proposed to overcome the flaws of the existing system and bridging the gap between consumer or user and service provider and provide hassle-free services.

Product Scope


E-commerce is a term for any type of business, or commercial transaction that involves the transfer of information across the Internet. It covers a range of different types of businesses, from consumer based retail sites, through auction or music sites, to business exchanges trading goods and services between corporations. It is currently one of the most important aspects of the Internet to emerge.
•	Household Services: This includes study on how the daily required services can be provided to consumer and also providing employable opportunities to providers.
•	MERN Stack Technology used for the development of the application.
•	General customers as well as the sellers will be able to use the system effectively.
•	Web-platform means that the system will be available for access 24/7 except when there is a temporary server issue which is expected to be minimal.

Aims & Objectives


Specific goals are: -
•	To produce a web-based system that allows the consumer to order or request any type of services at ease of their house.
•	To ease service providers by providing different functionalities to it. 


Overall Description


Product Perspective:


 2.1.1 Existing system function:

Existing system for household service is based on our traditional way of calling individual person or people for any kind of service if it is plumber, electrician, AC repair, etc. During the pandemic situation of June 2020 people had problems in handling any of these issues due to unavailability of skilled professionals. Hence this system is proposed to overcome the flaws of the existing system and bridging the gap between consumer or user and service provider and provide hassle-free services.

•	III. PROPOSED SYSTEM

Fine Living’s online website based e-commerce is an outstanding way of bringing Sellers and customers on an online platform to make purchase in a secured and efficient manner irrespective of distance between the two. The service is one stop for many services online. Fine Living offers daily recommendations for discounts and offers on services based on their category
•	Provide a simple interface and platform to ease the process of buying as well as selling services online
•	Include smooth functionality and efficiency that adds to buyers’ confidence.
•	Appropriate space is dedicated to its Offers zone and deal of the day that fetches adequate attention of users.
•	Fine Living keeps a constant focus on new category creation and expansion of services.
•	Ads and promotion activities motivate shoppers to buy online.
•	Tracking feature of orders and pending deliveries for both sellers and buyers.
•	Notifying order and delivery reports to customers and sellers.


Benefits of System


•	Customer - He or she is a verified user of website who is intended to buy a service from the seller via the Fine Living platform. The customer must have a username and password to make a purchase. The person is regularly updated and fed with latest offers and discounts according their interest.
•	Seller - He or she is a verified person who is allowed to sell items over the platform. Seller’s details are stored on database and all the services are listed under him that he is ready to sell or are available. He is responsible to set services details, price, and quantity.
•	Administrator - He or she is responsible for monitoring functions and procedures on platform. Administrator is responsible to provide valid information of a purchase to the concerned authority in case of any dispute between the customer and seller or in case of exchange.


Users and Characteristics:


•	Notifications
•	Contact Us
•	User Agreement
•	Select the operator
•	Make A Payment
•	Submit Account Details
•	Payment Security
•	Privacy Policy









Operating Environment:

Particulars	Client System	Server System
Operating System	Windows/Linux/Android/iOS	Linux
Processor	Intel or AMD	Intel or AMD
Hard Disk	1 GB	1 TB
RAM	256	8GB

 


Design and Implementation Constraints:

•	The customer and seller must have basic knowledge of computers and English language.
•	Each User must have a User ID and password.
•	Each Seller must have Seller ID and password.
•	There must be an Administrator.
•	Internet connection is a must.
•	Proper browsers should be installed in the user’s system

Specific Requirement


External Interface Requirements:


User Interfaces:
•	All the users will see the same page when they enter in this website. This page asks the users a username and a password.
•	After being authenticated by correct username and password, user will be redirect to their corresponding profile where they can do various activities.
•	The user interface will be simple and consistence, using terminology commonly understood by intended users of the system. The system will have simple interface, consistent with standard interface, to eliminate need for user training of infrequent users.

Hardware Interfaces:
•	No extra hardware interfaces are needed.
•	The system will use the standard hardware and data communication resources.
•	This includes, but not limited to, general network connection at the server/hosting site, network server and network management tools.

Web Server Deployment and Technologies
Nginx
Nginx (pronounced as "engine X") is a lightweight open source web server developed by Igor Sysoev.
MySQL	MySQL database for storage of Data and user as well as seller information
RESTful API	A RESTful API is an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data.
 


Application Interfaces:


OS: Windows 7, Linux
Web Browser:
The system is a web-based application; clients need a modern web browser such as Mozilla Firebox, Internet Explorer, Opera, and Chrome. The computer must have an Internet connection in order to be able to access the system.

Communications Interfaces:
•	This system uses communication resources which includes but not limited to, HTTP protocol for communication with the web browser and web server and TCP/IP network protocol with HTTP protocol.
•	This application will communicate with the database that holds all the booking information. Users can contact with server side through HTTP protocol by means of a function that is called HTTP Service. This function allows the application to use the data retrieved by server to fulfill the request fired by the user.

Client-side Programming Language
JavaScript	JavaScript is a lightweight, object-oriented, cross-platform scripting language, mainly used within web pages.
HTML5	HTML5 is the fifth revision of the HTML standard.
CSS	Cascading Style Sheets define style rules in a separate CSS file.
 

1.	User table


Column name	Data type	Key constraint
Object id	Varchar(30)	Primary key not null
Firstname	Varchar(30	not null
Lastname	Char(20)	Not null
Username	Varchar(30)	Not null
Email	Varchar(30)	Not null
Password	Varchar(30)	Not null
Phone	Varchar(30)	Not null

2.	Service Table
Column name	Data type	Key constraints	extra
Object id	Varchar(30)	Primary key not null	Auto increment
id	int	Foreign key Not null	
URL	Char(100)	Not null	
detailUrl	Char(100)	null	
Title	Char(40)	Not NULL	
Price	Double	Not null	
Quantity	Int	Not null	
Description	Varchar(100)	Not null	
Discount	Varchar		
Tagline	varchar		

 


Conclusion
Fine Living helps in overcoming the issues faced by consumers as well as Service providers by easily making it possible to provide household services to users and give employment opportunities to providers. User can access services and functionalities from home anywhere and anytime for their own comfort.

Future Scope
E-commerce is a term for any type of business, or commercial transaction that involves the transfer of information across the Internet. It covers a range of different types of businesses, from consumer based retail sites, through auction or music sites, to business exchanges trading goods and services between corporations. It is currently one of the most important aspects of the Internet to emerge.
This web application can be further developed by adding extra functionalities and developing dedicated  Mobile Application for consumer as well as seller.  


7.0	References

Reference for geeky operating environments www.w3techs.com 
Reference for user interfaces of e-commerce www.uianduxdesign.com 
Reference for Fine Living’s Vision and motto www.wikipedia.com
Reference for https://programformca.com
