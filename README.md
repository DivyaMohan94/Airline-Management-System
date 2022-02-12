# Spartans Airlines - Team 10

# Team Members:
Divya Mohan <br>
Saurabh Vijaywargia <br>
Shakthivel Ramesh Nirmala <br>
Shravan Vallaban <br>

# Technology Stack:
* Frontend - ReactJS, Redux
* Backend - ExpressJS
* Database - MongoDB
* Cloud - AWS
* Load Balancer - AWS Elastic Load Balancer
* Postman - API Testing
* Project Management Tools:  
   * GitHub - Source code and Project Management
   * Google Sheet - Tracking tasks and sprint burndown charts
   * Zoom - Team collaboration (Organizing daily scrum meetings)

# Architechture Diagram:

<p align="center">
	<img width="900" src="https://user-images.githubusercontent.com/77031080/143789168-cf8b0fda-afee-47f0-b891-c3ad099c5a53.png">
</p>

# UI Wireframes:
<p>
	<img height="400" width="700" src="https://user-images.githubusercontent.com/77031080/143789346-ccea2995-c456-494a-a616-295056e4efbc.png">
</p>
<p>
	<img height="400" width="700" src="https://user-images.githubusercontent.com/77031080/143789467-6f78e2aa-85bf-4e29-860f-c3321fcd472f.png">
</p>
<p>
	<img height="400" width="700" src="https://user-images.githubusercontent.com/77031080/143789494-79ec5397-1214-44e8-856e-5bcec5c2a9f7.png">
</p>
<p>
	<img height="400" width="700" src="https://user-images.githubusercontent.com/77031080/143789551-af2d07aa-a277-43ce-b12b-eaf5e7e0400e.png">
</p>
<p>
	<img height="400" width="700" src="https://user-images.githubusercontent.com/77031080/143789591-17499473-46ad-4b99-99cb-2d5c9067fdf8.png">
</p>
<p>
	<img height="400" width="700" src="https://user-images.githubusercontent.com/77031080/143789620-9168f455-af25-455c-9339-396bc7ce81bd.png">
</p>
<p>
	<img height="400" width="700" src="https://user-images.githubusercontent.com/77031080/143789647-044f75d1-4255-44f2-a509-d4d0b83e2d18.png">
</p>
<p>
	<img height="400" width="700" src="https://user-images.githubusercontent.com/77031080/143789683-73e07f8b-ef89-439f-8a41-eea7a8437c64.png">
</p>
<p>
	<img height="400" width="700" src="https://user-images.githubusercontent.com/77031080/143789664-56fb448d-d00f-4ea7-af33-0a433bec0ba7.png">
</p>

# Deployment Diagram:

![Deployment Diagram](https://user-images.githubusercontent.com/23494069/144701112-95b6c2ed-b18e-4996-9902-fcfbee2070c6.png)

# Feature Set
   
### ***Employee/Admin***
__Login__

   While the registration of an Admin is done using a backend API which is not exposed in the User Interface since we did not want it be accessed by anyone and just be restricted the employees/admin associated with the system, the Admin can login to the Reservation system using the employeeLogin API.

__Add Flights__

   An admin can add a flight to the booking system using the addFlights API which is one of the core functionalities of the Admin

__Cancel Flight__

   An admin can also cancel any flight if the flight has no active reservations using the cancelFlight API

__Edit Flight__

   An admin can edit the price and the mileage points associated with a particular flight using the editFlight API
### ***Customer*** 
__Sign up__

   A customer can register themselves into the Spartan Airlines portal which is enbled by the signup API associated with actor customer

__Login__

   If a customer has an account with the portal they can login to the portal and view their dashboard using the login API

__Search Flight__

   If a customer has a active session with the portal they can search for flights using the searchFlights API which will give the list all the flights in which they can make a reservation

__Make Reservation__

   A customer make reservations for multiple passengers in a single reservation made possible by the reservation API

__Change Seat__

   If a customer has a active reservation they change their existing seat from the list of available seats from the same website using changeSeat API

__Cancel Booking__

   A customer can also cancel the active reservation using the cancelReservation API which will release all the seats that were held by the passengers of that reservation

__View Booking History__

   A customer can also change view all the reservations they have made using their account with getAllReservations API

__Edit Profile__

   A customer can also edit the contents of the their profile which has been done using the PUT API for the profile endpoint

__View Profile Details__

   A customer can view their profile details on the profile page which has been done with the help of a GET API on the profile endpoint.


# Application Screenshots:

![image](https://raw.githubusercontent.com/gopinathsjsu/Spartans-Airlines-team10/main/Documents/1.png?token=AEI43ZJN2LTSYISVOXUFEVLBWTJFO)

![image](https://raw.githubusercontent.com/gopinathsjsu/Spartans-Airlines-team10/main/Documents/2.png?token=AEI43ZOEGAXLEN2OAHCVSU3BWTJOA)

![image](https://raw.githubusercontent.com/gopinathsjsu/Spartans-Airlines-team10/main/Documents/3.png?token=AEI43ZLKHTBLC2K6STT2VXTBWTJPY)

![image](https://raw.githubusercontent.com/gopinathsjsu/Spartans-Airlines-team10/main/Documents/4.png?token=AEI43ZLARYRD34K6IH6YDUDBWTJSI)

![image](https://raw.githubusercontent.com/gopinathsjsu/Spartans-Airlines-team10/main/Documents/5.png?token=AEI43ZLFO2DJAVN734JSJE3BWTJUK)

![image](https://raw.githubusercontent.com/gopinathsjsu/Spartans-Airlines-team10/main/Documents/6.png?token=AEI43ZMTPYQBJUVLTUIQSNTBWTJXW)

![image](https://raw.githubusercontent.com/gopinathsjsu/Spartans-Airlines-team10/main/Documents/10.png?token=AEI43ZKCUVLYHOSEHPQIEO3BWTRH6)

![image](https://raw.githubusercontent.com/gopinathsjsu/Spartans-Airlines-team10/main/Documents/7.png?token=AEI43ZPMMTBZ2F4KD2O5H4TBWTR2E)

![image](https://raw.githubusercontent.com/gopinathsjsu/Spartans-Airlines-team10/main/Documents/8.png?token=AEI43ZKNL5DPK6LFF477WWDBWTR5O)

![image](https://raw.githubusercontent.com/gopinathsjsu/Spartans-Airlines-team10/main/Documents/9.jpg?token=AEI43ZKPBMAO2CJDJQGN5QLBWTR7M)

![image](https://raw.githubusercontent.com/gopinathsjsu/Spartans-Airlines-team10/main/Documents/12.png?token=AEI43ZNN52KYPQWUQT543ZTBWT4ZK)

# AWS Load Balancers Screenshots:

![image](https://user-images.githubusercontent.com/77031080/144661860-f316dc50-8a50-4e08-94aa-7b4499eb40a1.png)





![image](https://user-images.githubusercontent.com/77031080/144661775-2c7d8200-f67d-4ff4-b278-9600be8b82a7.png)




![image](https://user-images.githubusercontent.com/77031080/144677457-b907d9bd-b0f2-4253-9718-bf25f0dda23d.png)



# GitHub Repo Link:

https://github.com/gopinathsjsu/Spartans-Airlines-team10

# Scrum Meeting Schedule:
Wednesday  <br>
Friday

# Weekly Scrum Report & Burndown charts:

https://github.com/gopinathsjsu/Spartans-Airlines-team10/blob/main/Documents/Weekly%20Scrum%20Report.xlsx

# Project Dashboard:

![image](https://user-images.githubusercontent.com/77031080/144716412-1751eada-c2b3-4da5-8321-19045fa0be03.png)


# Sprint Journal:

https://github.com/gopinathsjsu/Spartans-Airlines-team10/blob/main/Documents/Sprint%20Journal.xlsx

# Areas of contribution:
* We divided our work as two categories, Frontend and Backend application development:

   * Frontend Application design, implementation and deployments - Shakthivel Ramesh Nirmala and Saurabh Vijaywargia
   * Backend Application design, implementation and deployments - Divya Mohan and Shravan Vallaban

# Extreme programming (XP) Core Values Implemented:
 * Communication
    * Communication was one of the key strengths of our team. Our team managed to meet every week on Wednesday and Friday for the scrum.
    * During the meeting, we discussed about individual progress, technical difficulties and we helped each other whenever there was a roadbloack. We ensured that there was knowledge transfer from one person to the rest of the team.
    * We used GITHUB project board to plan our product backlog items. This helped us to analyse our team's sprint capicity and plan accordingly for all our future sprints.
    * By incorporating unfettered communication, we eliminated major pitfalls at earlier stage of development and increased our overall productivity.

  * Simplicity
    * We ensured to incorporate only the simplest things that worked.
    * We have made our code modular and re-usable so that everyone in the team could understand the code and make changes in the future if needed.
    * We have minimised the code smells as much as possible and added relevant comments in our code.
    * Our code base is simple hence easy to maintain
  
  * Feedback
       * Constructive feedback gave us a healthy environment for interaction and conveying our thoughts more transparently.
       * By giving and receiving regular feedbacks, we were able learn, adapt to the changes and avoid recurring mistakes. This motivated us to perform more efficiently.
       * During the development phase we pushed our changes to a branch and created pull requests. Once the code was approved by another team member, we pushed the changes to the master branch. We made sure the code changes on the master branch was always stable and did not break the other team member’s code.
       * Continuous feedback helped us in aligning our goals and responsibilities.










