//create shows array

const showsArray = [
    {
      date: "Mon Sept 09 2024",
      venue: "Ronald Lane",
      location: "San Francisco, CA",
    },
    {
      date: "Tue Sept 17 2024",
      venue: "Pier 3 East",
      location: "San Francisco, CA",
    },
    {
      date: "Sat Oct 12 2024",
      venue: "View Lounge",
      location: "San Francisco, CA",
    },
    {
      date: "Fri Nov 29 2024",
      venue: "Hyatt Agency",
      location: "San Francisco, CA",
    },
    {
      date: "Sat Oct 12 2024",
      venue: "Moscow Center",
      location: "San Francisco, CA",
    },
    {
      date: "Wed Dec 18 2024",
      venue: "Press Club",
      location: "San Francisco, CA",
    },
  ];
  
  const showsSection = document.querySelector("#Shows");
  
  //creating shows header
  const showsHeader = document.createElement("h2");
  showsHeader.setAttribute("class", "shows__header");
  showsHeader.textContent = "Shows";
  showsSection.append(showsHeader);
  
  //creating show container
  const showContainer = document.createElement("div");
  showContainer.setAttribute("class", "show__container");
  showsSection.append(showContainer);
  
  function displayShows() {
    for (let i = 0; i < showsArray.length; i++) {
      //creating shows container
      const showsContainer = document.createElement("div");
      showsContainer.setAttribute("class", "shows__container");
      showContainer.append(showsContainer);
  
      //creating shows subcontainer for date
      const showsSubcontainerDate = document.createElement("div");
      showsSubcontainerDate.setAttribute("class", "shows__subcontainer");
      showsContainer.append(showsSubcontainerDate);
  
      //creating shows__subtitle
      const showsDatesubtitle = document.createElement("div");
      showsDatesubtitle.setAttribute("class", "shows__subtitle");
      showsDatesubtitle.textContent = "date";
      showsSubcontainerDate.append(showsDatesubtitle);
  
      //creating shows__date
      const showsDate = document.createElement("div");
      showsDate.setAttribute("class", "shows__info--date");
      showsDate.textContent = showsArray[i].date;
      showsSubcontainerDate.append(showsDate);
  
      //creating shows subcontainer for venue
      const showsSubcontainerVenue = document.createElement("div");
      showsSubcontainerVenue.setAttribute("class", "shows__subcontainer");
      showsContainer.append(showsSubcontainerVenue);
  
      //creating shows__subtitle venue
      const showsVenuesubtitle = document.createElement("div");
      showsVenuesubtitle.setAttribute("class", "shows__subtitle");
      showsVenuesubtitle.textContent = "Venue";
      showsSubcontainerVenue.append(showsVenuesubtitle);
  
      //creating shows__venue
      const showsVenue = document.createElement("div");
      showsVenue.setAttribute("class", "shows__info");
      showsVenue.textContent = showsArray[i].venue;
      showsSubcontainerVenue.append(showsVenue);
  
      //creating shows subcontainer for location
      const showsSubcontainerLocation = document.createElement("div");
      showsSubcontainerLocation.setAttribute("class", "shows__subcontainer");
      showsContainer.append(showsSubcontainerLocation);
  
      //creating shows__subtitle location
      const showsLocationsubtitle = document.createElement("div");
      showsLocationsubtitle.setAttribute("class", "shows__subtitle");
      showsLocationsubtitle.textContent = "Location";
      showsSubcontainerLocation.append(showsLocationsubtitle);
  
      //creating shows__location
      const showsLocation = document.createElement("div");
      showsLocation.setAttribute("class", "shows__info");
      showsLocation.textContent = showsArray[i].location;
      showsSubcontainerLocation.append(showsLocation);
  
      //creating button
      const showsButton = document.createElement("button");
      showsButton.setAttribute("class", "shows__button");
      showsButton.textContent = "BUY TICKETS";
      showsContainer.append(showsButton);
  
      //creating attribute class for line divider
      const showsDivide = document.createElement("h2");
      showsDivide.setAttribute("class", "shows__divide");
      showsContainer.append(showsDivide);
    }
  }
  
  displayShows();
  